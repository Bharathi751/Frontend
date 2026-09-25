
const App = () => {

const product = [
  {id:1,name:"Iphone18 pro",prize:189999,category:"Mobile"},
  {id:2,name:"Airpods",prize:29999,category:"Headphone"},
  {id:3,name:"MacBook 3",prize:299999,category:"Laptop"},
  {id:4,name:"MacStudio",prize:399999,category:"MacPc"},
  
]

  return (
<>
<div>
<h1>Product List</h1>

{product.map((e)=>(

  <div key={e.id}>
    <p>Name:{e.name}</p>
    <p>Prize:{e.prize}</p>
    <p>Category:{e.category}</p>

  </div>
))}
</div>
</>  )
}

export default App