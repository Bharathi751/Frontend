
const Employee = (props) => {

  return (
    <>
    <div>
        <p>Name:{props.sendtoemp.name}</p>
        <p>Role:{props.sendtoemp.role}</p>
        <p>Salary:{props.sendtoemp.salary}</p>
        <p>City:{props.sendtoemp.city}</p>
    </div>
    </>
  )
}

export default Employee