import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import MultiSelect from '../multiSelect';

describe('<MultiSelect />', () => {
  let options;

  beforeEach(() => {
    let step;
    options = [];
    for (step = 1; step < 10; step += 1) {
      options.push({ id: `${step}`, label: `Element ${step}` });
    }
  });

  it('should render without crashing', () => {
    const tree = renderer.create(<MultiSelect options={options} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('#showSelectAllBtn', () => {
    const tree = renderer
      .create(<MultiSelect options={options} showSelectAllBtn={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Select/Unselect All event', () => {
    const wrapper = shallow(<MultiSelect options={options} showSelectAllBtn />);

    wrapper.find('#selectAll').simulate('click');

    let selectedOptions = wrapper.state().options.filter(o => o.selected);
    expect(selectedOptions.length).toEqual(options.length);

    wrapper.find('#unSelectAll').simulate('click');

    selectedOptions = wrapper.state().options.filter(o => o.selected);
    expect(selectedOptions.length).toEqual(0);
  });

  it('#handleClick', () => {
    const opt = options[0];
    const wrapper = shallow(<MultiSelect options={options} showSelectAllBtn />);

    let selectedOption = wrapper.state().options.find(o => opt.id === o.id);
    expect(selectedOption.selected).toEqual(undefined);

    wrapper.instance().handleClick(opt, 'selectable');

    selectedOption = wrapper.state().options.find(o => opt.id === o.id);
    expect(selectedOption.selected).toEqual(true);

    wrapper.instance().handleClick(opt, 'selected');
    selectedOption = wrapper.state().options.find(o => opt.id === o.id);
    expect(selectedOption.selected).toEqual(false);
  });
});
