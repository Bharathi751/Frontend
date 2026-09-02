const processNumber = (number,callback) => {
    let result = number * 2;
    callback(result);
};
const displayResult = (result) => {
    console.log("Result:",result);
};

processNumber(5, displayResult);

