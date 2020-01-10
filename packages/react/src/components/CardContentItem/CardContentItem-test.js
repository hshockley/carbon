import React from 'react';
import { shallow } from 'enzyme';
import CardContentItem from './CardContentItem';
import { settings } from '@rocketsoftware/carbon-components';

const { prefix } = settings;

describe('CardContentItem', () => {
  describe('Renders as expected', () => {
    const props = {
      info: 'testinfo 1',
      maxWidth: '10rem',
    };
    const wrapper = shallow(<CardContentItem {...props} />);

    it('renders as expected', () => {
      expect(wrapper.find(`${prefix}--card-text__overflow`).length).toBe(1);
    });
  });
});
