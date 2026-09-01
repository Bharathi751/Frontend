//.Global Scope:

var Car1="BMW"
let Car2="PORCHE"
const Car3="VERNA"

let CarName=()=>
{
    console.log(Car1);
    console.log(Car2);
    console.log(Car3);
    
}
CarName()


//.Function Scope:

let ActorMovies=()=>{
    var ajith ="GBU"
    let vijay ="MASTER"
    const STR ="MANMATHAN"

    if(true){
    console.log(ajith);
    console.log(vijay);
    console.log(STR);
    
}
}

ActorMovies()


//.Block Scope :


let bike=()=>{
    if(true){
        var Bike1="DUKE 390"
        let Bike2="NINJA H2R"
        const Bike3="GT 650"
        
        console.log(Bike1);
        console.log(Bike2);
        console.log(Bike3);
        
        
        
    }
}

bike()