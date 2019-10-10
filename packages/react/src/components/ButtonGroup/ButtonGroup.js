import PropTypes from 'prop-types';
import React, { Children, useRef } from 'react';
import classNames from 'classnames';
import { settings } from '@rocketsoftware/carbon-components';
import { ButtonTypes } from '../../prop-types/types';
import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import { ChevronDown16, ChevronUp16 } from '@rocketsoftware/icons-react';

const { prefix } = settings;
const ButtonGroup = React.forwardRef(function ButtonGroup(
  {
    className,
    disabled,
    size,
    kind,
    href,
    tabIndex,
    type,
    role,
    children,
    ...other
  },
  ref
) {
  const wrapper = useRef(null);

  const getMenuOffset = () => {
    const { top } = wrapper.current.getBoundClientRect();
    const isTop = direction === 'top';
    return {
      top: top * -1,
      left: 'auto',
    };
  };

  return (
    <div style={{ display: 'flex' }}>
      <Button data-floating-menu-container>Primary Action</Button>
      <OverflowMenu
        className={classNames(`${prefix}--btn--primary`, `${prefix}--btn`)}
        flipped={true}
        renderIcon={ChevronDown16}>
        <OverflowMenuItem>Test 1</OverflowMenuItem>
        <OverflowMenuItem>Test 2</OverflowMenuItem>
        <OverflowMenuItem>Test 3</OverflowMenuItem>
        <OverflowMenuItem>Test 4</OverflowMenuItem>
      </OverflowMenu>
    </div>
  );
});

ButtonGroup.PropTypes = {
  /**
   * Add an optional class to the button
   */
  className: PropTypes.string,

  /**
   * For specifying whether the button is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Size of button.
   */
  size: PropTypes.oneOf(['default', 'field', 'small']),

  /**
   * Kind of button
   */
  kind: ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes.string,
};
ButtonGroup.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
};

export default ButtonGroup;
