import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { initialRowsLarge, headers } from '../DataTable/stories/shared';
import DataGrid from './DataGrid';
import getDerivedStateFromProps from '../DataTable/state/getDerivedStateFromProps';

const props = {
  rows: initialRowsLarge,
  columns: headers
};

storiesOf('Pattern|DataGrid', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return <DataGrid {...props}/>;
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
