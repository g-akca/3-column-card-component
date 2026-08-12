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

function Card({ icon, title, description, primaryColor = "gold" }) {
  const colors = colorVariants[primaryColor] || colorVariants.gold;

  return (
    <div className={`p-12 tablet:px-20 desktop:px-12 ${colors.bg} flex flex-col items-start gap-8 desktop:gap-10`}>
      <img src={icon} alt="" className="h-10" />

      <div className="grow flex flex-col gap-6 items-start desktop:justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] leading-[120%] font-semibold font-shoulders text-gray-100">{title}</h2>
          <p className="opacity-75 font-light">{description}</p>
        </div>

        <button 
          type="button" 
          aria-label={`Learn more about ${title}`}
          className={`bg-gray-100 ${colors.text} px-6 py-2 h-12 w-36.75 rounded-[25px] cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-white hover:border-2 hover:border-white`}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card;