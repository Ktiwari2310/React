import Card from "./Card"

const Page1 = () => {
  return (
    <>
    <div className="mb-15" >
      <div >
        <h1 className="text-center text-3xl font-bold pt-20 text-red-500">BREAKFAST</h1>
      </div>
      <div className="flex text-gray-400 h-8 justify-between mx-100 mt-8 my-9 ">
        <h1>Breakfast</h1>
        <h1>Lunch</h1>
        <h1>Dinner</h1>
        <h1>Desserts</h1>
        <h1>Coffee</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </>
  )
}

export default Page1
