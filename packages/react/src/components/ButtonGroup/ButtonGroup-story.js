import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import ButtonGroup from '../ButtonGroup';
import OverflowMenuItem from '../OverflowMenuItem';

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
      menuText: text('Menu Text', 'Menu Text'),
      size: select('Button size (size)', sizes, 'default'),
      kind: select('Button kind (kind)', kinds, 'primary'),
    };
  },
};

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      const regularProps = props.regular();
      return (
        <ButtonGroup {...regularProps}>
          <OverflowMenuItem itemText={'Item 1'} />
          <OverflowMenuItem itemText={'Item 2'} />
          <OverflowMenuItem itemText={'Item 3'} />
        </ButtonGroup>
      );
    },
    {
      info: {
        text: `
        ButtonGroup Component
        `,
      },
    }
  );
