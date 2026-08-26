let student = [{ name: "Tamil", mark: 90 },
{ name: "Vignesh", mark: 95 },
{name: "Akash", mark: 59}
];

let FindName ="Vignesh"

for(let i=0; i<student.length; i++)
{
    if(student[i].name===FindName){
        console.log(student[i].name);
        console.log(student[i].mark);
        
    }
    
}