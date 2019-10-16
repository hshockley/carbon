import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cx from 'classnames';
import { settings } from '@rocketsoftware/carbon-components';
import { ButtonTypes } from '../../prop-types/types';
import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import { ChevronDown16, ChevronUp16 } from '@rocketsoftware/icons-react';

const { prefix } = settings;
const SplitButton = ({
  className,
  disabled,
  size,
  kind,
  href,
  tabIndex,
  type,
  role,
  children,
  getViewport,
  ...other
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenArray = React.Children.toArray(children);
  const primaryAction = childrenArray.splice(0);

  const forOnOpen = (e) => {
    setIsOpen(true);
  };

  const forOnClose = (e) => {
    setIsOpen(false);
  }

  const overflowClasses = cx({
    [`${prefix}--btn--split--overflow`]: true,
    [`${prefix}--btn--split--overflow--disabled`]: disabled,
  });

  const overflowIconClasses = cx({
    [`${prefix}--btn--split--overflow__open`]: isOpen,
    [`${prefix}--btn--split--overflow--icon`]: true,
  });
  
  return (
    <div
      className={`${prefix}--btn--split--container`}
      style={{ display: 'flex' }}>
      <Button 
      type={type} 
      role={role} 
      disabled={disabled}
      kind={kind}
      size={size}
      {...other} 
      data-floating-menu-container>
        Primary Action
      </Button>
      <OverflowMenu
        className={overflowClasses}
        flipped={true}
        disabled={disabled}
        onOpen={forOnOpen}
        onClose={forOnClose}
        iconClass={overflowIconClasses}
        menuOptionsClass={`${prefix}--overflow-menu-options--container`}
        renderIcon={ChevronDown16}
        getViewport={getViewport}
        {...other}>
        <OverflowMenuItem primaryFocus>Test 1</OverflowMenuItem>
        <OverflowMenuItem>Test 2</OverflowMenuItem>
        <OverflowMenuItem>Test 3</OverflowMenuItem>
        <OverflowMenuItem>Test 4</OverflowMenuItem>
      </OverflowMenu>
    </div>
  );
};

SplitButton.PropTypes = {
  /**
   * Add an optional class to the button
   */
  className: PropTypes.string,

  /**
   * For specifying whether the button is disabled
   */
  disabled: PropTypes.bool,

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

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
    PropTypes.func,
  ]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
    PropTypes.func,
  ]),

  /**
     * Optional callback used to obtain a custom 'viewport' that differs from the window.
     */
    getViewport: PropTypes.func,
};
SplitButton.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
};

export default SplitButton;
