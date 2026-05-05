function Card({ icon, title, description, primaryColor = "gold" }) {
  const colorVariants = {
    gold: {
      bg: "bg-gold-500",
      text: "text-gold-500"
    },
    cyan: {
      bg: "bg-cyan-800",
      text: "text-cyan-800"
    },
    green: {
      bg: "bg-green-950",
      text: "text-green-950"
    }
  }

  const colors = colorVariants[primaryColor] || colorVariants.gold;

  return (
    <div className={`p-12 ${colors.bg}`}>

    </div>
  )
}

export default Card;