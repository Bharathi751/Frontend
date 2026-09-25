
const App = () => {

const cities = ["Chennai","Bangalore","Hydreabad","Kolkata","Delhi","Mumbai"]

  return (
    <>
    <div>
      <h2>City Names</h2>
      {cities.map((e,i)=>(
        <li key={i}>{e}</li>
      ))}
    </div>
    </>
  )
}

export default App