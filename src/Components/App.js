import React, { useState } from 'react';
import Card from './Card';
import '../app.css';

const App = () => {
  const [cardDataState, setCardDataState] = useState([
    {
      id: 1,
      color: '#E28625',
      icon: 'icon1',
      header: 'sedans',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    },
    {
      id: 2,
      color: '#006971',
      icon: 'icon2',
      header: 'suvs',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    },
    {
      id: 3,
      color: '#004140',
      icon: 'icon3',
      header: 'luxury',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    },
  ]);

  const renderCards = cardDataState.map((card, index) => {
    return (
      <Card
        cardColor={card.color}
        key={card.id}
        icon={card.icon}
        header={card.header}
        description={card.description}
      />
    );
  });

  return (
    <div className="page-container">
      <div className="card-container">{renderCards}</div>
    </div>
  );
};

export default App;
