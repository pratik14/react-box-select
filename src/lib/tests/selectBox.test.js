import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SelectBox from '../selectBox';

describe('<SelectBox />', () => {
  let options;

  beforeEach(() => {
    let step;
    options = [];
    for (step = 1; step < 10; step += 1) {
      options.push({ id: `${step}`, label: `Element ${step}` });
    }
  });

  it('should render without crashing', () => {
    const tree = renderer
      .create(
        <SelectBox
          type="selectable"
          options={options}
          selectors={{
            id: 'id',
            label: 'label',
          }}
          handleClick={() => {}}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('#handleOptionClick', () => {
    const opt = options[0];
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <SelectBox
        type="selectable"
        options={options}
        selectors={{
          id: 'id',
          label: 'label',
        }}
        handleClick={mockCallback}
      />,
    );

    wrapper.instance().handleOptionClick(opt, 'selectable');
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback).toBeCalledWith(opt, 'selectable');
  });
});
