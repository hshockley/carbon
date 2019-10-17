import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { settings } from '@rocketsoftware/carbon-components';
import SplitButton from '../SplitButton';
import Button from '../Button';
import OverflowMenuItem from '../OverflowMenuItem';
const { prefix } = settings;

const kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Ghost button (ghost)': 'ghost',
};

const sizes = {
  Default: 'default',
  Field: 'field',
  Small: 'small',
};

const props = {
  regular: () => {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
    };
  },
  items: () => {
    return {
      onClick: action('onClick'),
    }
  }
};

SplitButton.displayName = 'Button';

storiesOf('Button - SplitButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      const regularProps = props.regular();
      const itemProps = props.items();
      return (
        <SplitButton {...regularProps} className="some-class">
          <OverflowMenuItem itemText={'Item 1'} {...itemProps}/>
          <OverflowMenuItem itemText={'Item 2'} {...itemProps} primaryFocus/>
          <OverflowMenuItem itemText={'Item 3'} {...itemProps}/>
          <OverflowMenuItem itemText={'Item 4'} {...itemProps}/>
          </SplitButton>
      );
    },
    {
      info: {
        text: `
          Buttons are used to initialize an action, either in the background or
          foreground of an experience.

          There are several kinds of buttons.

          Primary buttons should be used for the principle call to action
          on the page.

          Secondary buttons should be used for secondary actions on each page.

          Danger buttons should be used for a negative action (such as Delete) on the page.

          Modify the behavior of the button by changing its event properties.

          Field buttons may be use directly next to an input element, to visually align their heights.

          Small buttons may be used when there is not enough space for a
          regular sized button. This issue is most found in tables. Small button should have three words
          or less.

          When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are
          always paired with text.
        `,
      },
    }
  );
