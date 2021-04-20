import React from 'react';
import LearnMoreButton from './LearnMoreButton';
import { ReactComponent as Icon1 } from '../design/images/iconSedans.svg';
import { ReactComponent as Icon2 } from '../design/images/iconSuvs.svg';
import { ReactComponent as Icon3 } from '../design/images/iconLuxury.svg';

function CardContent(props) {
  return (
    <div className="card-content">
      {props.icon === 'icon1' ? <Icon1 /> : props.icon === 'icon2' ? <Icon2 /> : <Icon3 />}
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <LearnMoreButton cardColor={props.cardColor} />
    </div>
  );
}

export default CardContent;
