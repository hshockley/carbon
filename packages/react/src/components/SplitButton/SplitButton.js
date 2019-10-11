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
const SplitButton = ({className, disabled, size, kind, href, tabIndex, type, role, children, ...other}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getMenuOffset = () => {
    const { top } = wrapper.current.getBoundClientRect();
    const isTop = direction === 'top';
    return {
      top: top * -1,
      left: 'auto',
    };
  };
  
  const childrenArray = React.Children.toArray(children);
  const primaryAction = childrenArray.splice(0);


  const classNames = cx({
    [`${prefix}--btn--split--overflow__active`]: isOpen,
  });

  return (
    <div className={`${prefix}--btn--split--container`} style={{ display: 'flex' }}>
      <Button data-floating-menu-container>Primary Action</Button>
      <OverflowMenu
        className={`${prefix}--btn--split--overflow`}
        flipped={true}
        onClick={() => setIsOpen(!isOpen)}
        iconClass={classNames}
        menuOptionsClass={`${prefix}--overflow-menu-options--container`}
        renderIcon={ChevronDown16}>
        <OverflowMenuItem>Test 1</OverflowMenuItem>
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
SplitButton.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary',
};

export default SplitButton;
