

const Student = () => {

const StudentName = "Bharathi"
const Age = 21
const Course = "React JS"
const Isactive = true
const Fees = 45000


const statusdetails = Isactive?"Active":"Inactive"

  return (
    <>
    <div>
        <h1><b>Student Details</b></h1>
        <p><b>Student Name</b>: <i>{StudentName}</i></p>
        <p><b>Age</b>: <i>{Age}</i></p>
        <p><b>Course</b>:<i>{Course}</i></p>
        <p><b>Status</b>:<i>{statusdetails}</i></p>
        <p><b>Fees</b>:<i>{Fees}</i></p>
    </div>
    </>
  )
}

export default Student