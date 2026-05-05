import Card from "./Card";

import sedansIcon from "/images/icon-sedans.svg";
import suvsIcon from "/images/icon-suvs.svg";
import luxuryIcon from "/images/icon-luxury.svg";

function CardContainer() {
  const cards = [
    {
      icon: sedansIcon,
      title: "Sedans",
      description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      primaryColor: "gold"
    },
    {
      icon: suvsIcon,
      title: "SUVs",
      description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      primaryColor: "cyan"
    },
    {
      icon: luxuryIcon,
      title: "Luxury",
      description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      primaryColor: "green"
    }
  ];

  return (
    <main className="w-full grid grid-rows-3 rounded-lg overflow-hidden">
      {cards.map(card => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
          primaryColor={card.primaryColor}
        />
      ))}
    </main>
  )
}

export default CardContainer;