import React, { useState } from 'react';

const LearnMoreButton = (props) => {
  const [hoverState, setHoverState] = useState(false);

  const mouseOver = () => {
    setHoverState(true);
    console.log('You Hovered');
  };

  const mouseLeave = () => {
    setHoverState(false);
    console.log('You left');
  };

  return (
    <>
      {hoverState ? (
        <button style={{ color: 'white' }} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
          Learn More
        </button>
      ) : (
        <button
          style={{ color: `${props.cardColor}` }}
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        >
          Learn More
        </button>
      )}
    </>
  );
};

export default LearnMoreButton;
