

const App = () => {

const isActive =true
const Isnull = null
/* const datas = undefined */
const datas = 69

/* const datacheck = isActive?"runing":"not runing" */


  return (
    <>
    <div>
      App  component is {isActive?"runing":"not runing"}
    </div>

    <div>
 
      {isActive}

      {
        isActive?<p>This is True</p>:<p>This is False</p>
      }
    </div>
    <div>
      {
        Isnull??<h1>This is the null value process nullish colishing</h1>
      }
    </div>

    <div>
      {
        datas && <h2>this is optional  rendering process</h2>
      }

      Not operator is 
      {!datas?<h2>true</h2>:<h2>false</h2>}
    </div>
    </>
  )
}

export default App