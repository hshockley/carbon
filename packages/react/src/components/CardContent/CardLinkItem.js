import PropTypes from 'prop-types';
import React, {useState} from 'react';
import classNames from 'classnames';

import { settings } from '@rocketsoftware/carbon-components';
const { prefix } = settings;

const CardLinkItem = ({
    child
}) => {
    const [hoverState, setHoverState] = useState(false);

    let eventHandlers = {};
    const handleHover = value => {
        setHoverState(value);
    }
    if (addMouseListeners) {
      eventHandlers.onMouseEnter = () => handleHover(true);
      eventHandlers.onMouseLeave = () => handleHover(false);
    }

    return (
        <a key={key} href={link} className="bx--about__title--link">
          {link}
        </a>
    )
}

CardLinkItem.propTypes = {
    child: PropTypes.node,

};

export default CardLinkItem;