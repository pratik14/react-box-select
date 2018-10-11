import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Option from '../option';

describe('<Option />', () => {
  const option = { id: '1', label: 'One' };

  it('should render without crashing', () => {
    const tree = renderer
      .create(
        <Option
          type="selectable"
          option={option}
          text={option.label}
          handleClick={() => {}}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('#handleOptionClick', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <Option
        type="selectable"
        option={option}
        text={option.label}
        handleClick={mockCallback}
      />,
    );

    wrapper.simulate('click');
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback).toBeCalledWith(option);
  });

  it('#disabled', () => {
    option.disabled = true;
    const tree = renderer
      .create(
        <Option
          type="selectable"
          option={option}
          text={option.label}
          handleClick={() => {}}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
