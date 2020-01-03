import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { settings } from '@rocketsoftware/carbon-components';
const { prefix } = settings;

const CardLinkItem = ({ link, addMouseListeners, key }) => {
  const [hoverState, setHoverState] = useState(false);

  let eventHandlers = {};
  const handleHover = value => {
    setHoverState(value);
  };
  if (addMouseListeners) {
    eventHandlers.onMouseEnter = () => handleHover(true);
    eventHandlers.onMouseLeave = () => handleHover(false);
  }

  return (
    <a key={key} href={link} className={`${prefix}--about__title--link`}>
      {link}
    </a>
  );
};

CardLinkItem.propTypes = {
  link: PropTypes.any,
  addMouseListeners: PropTypes.bool,
  key: PropTypes.any,
};

export default CardLinkItem;
