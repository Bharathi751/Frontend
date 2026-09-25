
const App = () => {

const programLanguages = ["C++","Python","Java","C","Mern"]


  return (
    <>
    <div>
<h1>Programming Languages</h1>
{programLanguages.map((e,i)=>(
<p key={i}>{e}</p>
))}
    </div>
    </>
  )
}

export default App