import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="text-base leading-base text-white min-h-screen bg-gray-100 px-6 py-12 tablet:px-20 tablet:py-22 flex justify-center items-center">
      <h1 className="sr-only">Car rental options</h1>
      
      <CardContainer />
    </div>
  )
}

export default App
