//Function as arguments
function repeat(fn,n){
    for(let i=0; i < n ;i ++){
        fn();
    }
}

function hello(){
    console.log("Hello World");
}

function goodbye(){
    console.log("Goodbye World");
}

repeat(hello,5);
repeat(goodbye,5);

//Function as Return Values
function hazardWarningCreator(typeofWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter ++;
        console.log(`DANGER! There is a ${typeofWarning} hazard at ${location}`);
        warningCounter === 1 ? console.log(`The ${typeofWarning} hazard alert has triggered ${warningCounter} time today!`) :
        console.log(`The ${typeofWarning} hazard alert has triggered ${warningCounter} times today!`); 
    }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hailstonesWarning = hazardWarningCreator('Hail Stone');
const stormWarning = hazardWarningCreator('Storm on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
hailstonesWarning('Arlington');
hailstonesWarning('Piscataway');
stormWarning('Albany');
stormWarning('Peoria');

//forEach, filter and map
let turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function moveBackward(arr){
    if(arr[0] < 0 || arr[1] < 0)
        return false;
    else 
        return arr;
}
function numberOfSteps(arr){
    console.log(arr);
    console.log(arr[0] + arr[1]);
}
let x = turtleMovement.filter(moveBackward);
let y = x.forEach(numberOfSteps);

//REDUCE 
const reducer = (accumulator = [],arr) => {    
    for(let i = 0; i < arr.length; i++){
        //console.log( arr[i].length );                
        if(arr[i].length === 3)
            accumulator.push(' ');  
        else
            accumulator.push(arr[i][arr[i].length - 1].toUpperCase());        

    }
    return accumulator;
}

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ');
console.log(reducer( [],str).join(''));

//Functions as arguments (2)
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});
console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr,fn){
    let newArray = [];
    for(let i= 0; i < arr.length ; i++){
        if(fn(arr[i]) === true)
            newArray.push(arr[i]);
    }
    return newArray;
}
function nameFilter(name){
    console.log(name);    
    if(name[0] === 'B') return true;    
}
console.log(filter(myNames,nameFilter)); 