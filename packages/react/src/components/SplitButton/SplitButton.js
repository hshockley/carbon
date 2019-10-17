import PropTypes from 'prop-types';
import React, { useState } from 'react';
import cx from 'classnames';
import { settings } from '@rocketsoftware/carbon-components';
import Button from '../Button';
import OverflowMenu from '../OverflowMenu';
import { ChevronDown16 } from '@rocketsoftware/icons-react';

const { prefix } = settings;
const SplitButton = ({
  classNameContainer,
  classNameButton,
  classNameOverflow,
  disabled,
  href,
  tabIndex,
  type,
  role,
  children,
  menuOffset,
  menuOffsetFlip,
  getViewport,
  ...other
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const childrenArray = React.Children.toArray(children);
  const primaryAction = childrenArray.splice(0, 1);

  const forOnOpen = (e) => {
    console.log(primaryAction);
    setIsOpen(true);
  };

  const forOnClose = (e) => {
    setIsOpen(false);
  }

  const containerClasses = cx({
    classNameContainer,
    [`${prefix}--btn--split--container`]: true,
  });

  const overflowClasses = cx({
    classNameOverflow,
    [`${prefix}--btn--split--overflow`]: true,
    [`${prefix}--btn--split--overflow--disabled`]: disabled,
  });

  const overflowIconClasses = cx({
    [`${prefix}--btn--split--overflow__open`]: isOpen,
    [`${prefix}--btn--split--overflow--icon`]: true,
  });
  
  return (
    <div
      className={containerClasses}
      style={{ display: 'flex' }}
      tabIndex={tabIndex}>
      <Button 
      type={type} 
      role={role} 
      disabled={disabled}
      className={classNameButton}
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
        menuOffset={}
        menuOffsetFlip={}
        getViewport={getViewport}
        {...other}>
        {children}
      </OverflowMenu>
    </div>
  );
};

SplitButton.PropTypes = {
  /**
   * Container classes
   */
  classNameContainer: PropTypes.string,
  
  /**
   * Add an optional class to the button
   */
  classNameButton: PropTypes.string,

  /**
   * Add an optional class to the button
   */
  classNameOverflow: PropTypes.string,

  /**
   * Child nodes to be rendered in secondary actions menu
   */
  children: PropTypes.node,

  /**
   * For specifying whether the button is disabled
   */
  disabled: PropTypes.bool,

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
};

export default SplitButton;
