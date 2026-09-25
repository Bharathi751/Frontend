
const App = () => {

const product = {name:"Iphone18Pro",prize:189999,category:"Mobile",brand:"Apple"}

  return (
    <>
    <div className=" bg-blue-400 w-60 justify-center p-6 mx-52 mt-50 my-24 items-center rounded-3xl">
<h1 className=" text-center text-white font-bold">Product Details</h1>
<div className=" text-center bg-black p-3 text-white mt-4 flex-wrap gap-2 rounded-2xl">
<p>Name:{product.name}</p>
<p>Prize:{product.prize}</p>
<p>Category:{product.category}</p>
<p>Brand:{product.brand}</p>
<button className="bg-white text-black p-2 rounded-2xl">Buy Now</button>
</div>

    </div>
    </>
  )
}

export default App