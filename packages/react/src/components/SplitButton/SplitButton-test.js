import React from 'react';
import SplitButton from '../SplitButton';
import OverflowMenuItem from '../OverflowMenuItem';
import { shallow } from 'enzyme';

describe('TabContent', () => {
  describe('renders as expected', () => {
    const wrapper = shallow(
      <SplitButton>
        <OverflowMenuItem itemText={'Item 1'} />
        <OverflowMenuItem itemText={'Item 2'} primaryFocus />
        <OverflowMenuItem itemText={'Item 2'} />
      </SplitButton>
    );

    it('renders children as expected', () => {
      expect(wrapper.props().children.length).toEqual(2);
    });

    it('sets selected if passed in via props', () => {
      wrapper.setProps({ selected: true });
      expect(wrapper.props().selected).toEqual(true);
    });

    it('sets selected and hidden props with opposite boolean values', () => {
      wrapper.setProps({ selected: true });
      expect(wrapper.props().hidden).toEqual(false);
    });
  });
});
