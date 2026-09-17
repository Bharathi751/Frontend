
import Input1 from "./Input1"
import Input2 from "./Input2"
import Input3 from "./Input3"

const App = ()=>{

  return(<> 
  
  <div>
    This is react
  </div>

  </>)
}
export default App



export const Button = ()=>{
  return (<>

<div>
<button class="btn"> Click Me</button>
</div>

  </>)
}



export const Input = ()=>{
return(<>

<div>
  Enter your Name 
  <input type="text" placeholder="enter your name"/>
</div>

</>)
}



export const Card =()=>{
return(<>

<div class="card">
  <h2>React Card</h2>
  <p>This is React vite card</p>
  <button class="btn1"> By Now</button>
</div>

</>)

}