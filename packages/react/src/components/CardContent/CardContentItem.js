import PropTypes from 'prop-types';
import React from 'react';

import { settings } from '@rocketsoftware/carbon-components';
const { prefix } = settings;

const CardContentItem = ({ info, addMouseListeners, key }) => {
  let eventHandlers = {};
  const handleHover = value => {};
  if (addMouseListeners) {
    eventHandlers.onMouseEnter = () => handleHover(true);
    eventHandlers.onMouseLeave = () => handleHover(false);
  }

  return (
    <h4 key={key} className={`${prefix}--about__title--additional-info`}>
      {info}
    </h4>
  );
};

CardContentItem.propTypes = {
  info: PropTypes.any,
  addMouseListeners: PropTypes.bool,
  key: PropTypes.any,
};

export default CardContentItem;
