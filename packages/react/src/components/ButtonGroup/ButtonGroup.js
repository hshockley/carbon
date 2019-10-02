import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from '@rocketsoftware/carbon-components';
import { ButtonTypes } from '../../prop-types/types';

const { prefix } = settings;
const ButtonGroup = React.forwardRef(function ButtonGroup(
  { className, disabled, size, kind, href, tabIndex, type, role, ...other },
  ref
) {});

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
