import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import CardContentItem from './CardContentItem';
import CardLinkItem from './CardLinkItem';
import Icon from '../Icon';

const CardContent = ({
  className,
  children,
  cardIcon,
  cardTitle,
  cardLink,
  cardInfo,
  iconDescription,
  addMouseListeners,
  ...other
}) => {
  const cardContentClasses = classNames({
    'bx--card__card-overview': true,
    [className]: className,
  });

  const cardLinkContent = cardLink
    ? cardLink.map((link, key) => (
        <CardLinkItem
          key={key}
          link={link}
          addMouseListeners={addMouseListeners}
        />
      ))
    : '';

  const cardInfoContent = cardInfo
    ? cardInfo.map((info, key) => (
        <CardContentItem
          key={key}
          info={info}
          addMouseListeners={addMouseListeners}
        />
      ))
    : '';

  const cardLinkContentArray = Object.keys(cardLinkContent);
  const cardInfoContentArray = Object.keys(cardInfoContent);

  return (
    <div {...other} className={cardContentClasses}>
      {children}
      <div className="bx--card-overview__about">
        {cardIcon !== null ? (
          <div className="bx--about__icon">
            <Icon
              icon={cardIcon}
              name={cardTitle}
              description={iconDescription}
            />
          </div>
        ) : null}

        <div className="bx--about__title">
          <p id="card-app-title" className="bx--about__title--name">
            {cardTitle}
          </p>
          {cardLinkContentArray.map((info, key) => cardLinkContent[key])}
          {cardInfoContentArray.map((info, key) => cardInfoContent[key])}
        </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  cardIcon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired,
  }),
  cardTitle: PropTypes.string,
  cardLink: PropTypes.node,
  cardInfo: PropTypes.array,
  className: PropTypes.string,
  iconDescription: PropTypes.string,
  addMouseListeners: PropTypes.bool,
};

CardContent.defaultProps = {
  iconDescription: 'card icon',
  cardIcon: null,
  cardTitle: 'card title',
  addMouseListeners: true,
};

export default CardContent;
