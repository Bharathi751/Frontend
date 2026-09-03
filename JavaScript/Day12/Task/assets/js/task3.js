let cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];

let removedCity = cities.shift();

cities.unshift("Kolkata");

console.log("Removed city:", removedCity);
console.log("Final array:", cities);