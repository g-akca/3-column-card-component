import Card from "./Card";

function CardContainer() {
  return (
    <main className="w-full grid-rows-3 rounded-lg overflow-hidden">
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default CardContainer;