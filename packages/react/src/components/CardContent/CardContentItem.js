import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { settings } from '@rocketsoftware/carbon-components';
const { prefix } = settings;

const CardContentItem = ({}) => {
  let eventHandlers = {};
  const handleHover = value => {};
  if (addMouseListeners) {
    eventHandlers.onMouseEnter = () => handleHover(true);
    eventHandlers.onMouseLeave = () => handleHover(false);
  }

  return (
    <h4 key={key} className="bx--about__title--additional-info">
      {info}
    </h4>
  );
};

CardContentItem.propTypes = {};

export default CardContentItem;
