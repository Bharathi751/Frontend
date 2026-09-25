
const App = () => {

const products = [
  {id:1,name:"Laptop",prize:69000,category:"Electronics"},
  {id:1,name:"MobilePhone",prize:189000,category:"Electronics"},
  {id:1,name:"Camera",prize:349000,category:"Media"},
  {id:1,name:"Watch",prize:8000,category:"Accesories"},
  {id:1,name:"Guitar",prize:25000,category:"Music"}
]

  return (
    <>
    <div className="bg-amber-300 p-6">
<h1 className=" font-bold text-center mt-25">Product Details</h1>

<div className="flex flex-wrap  text-white gap-4  p-5 justify-center">
  {products.map((e,i)=>(
<div className=" bg-red-600  justify-center items-center p-6 rounded-3xl mt-25 mb-50 gap-4" key={e.id}>
  <h2 className="">{e.name}</h2>
  <h2>{e.prize}</h2>
  <h2>{e.category}</h2>
  <button className="bg-blue-500 p-1 rounded-xl">Buy now</button>

</div>
  ))}
</div>
    </div>
    </>
  )
}

export default App