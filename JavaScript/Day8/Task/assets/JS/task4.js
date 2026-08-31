let  students=(studentList)=>{
    for(let a=0;a<studentList.length;a++){
        if(studentList[a].mark < 80){
            console.log(studentList[a]);
            
        }
    }
}

students([
    {
        name: "Gopal",
        age: 22,
        mark: 85
    },
    {
        name: "Munusami",
        age: 23,
        mark: 90
    },
    {
        name: "Picahamani",
        age: 21,
        mark: 50
    }
]
)
