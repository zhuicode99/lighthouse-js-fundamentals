

/*for(var x = 100; x <=200; x++){
  if(x % 3 === 0 && x %4 === 0){
    console.log("LoopyLighthouse");
  }else if(x % 4 === 0){
    console.log("Lighthouse");
  }else if(x % 3 === 0){
    console.log("Loopy");
  }else{
    console.log(x);
  }
}*/
//
/*function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();*/
//break

/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "ha";
  }
  return line + "\n";
}

function buildTriangle(length){
  var tri="";
  for(var y = 1; y <= length; y++){
      tri=tri+makeLine(y);
  }
  return tri;
}
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length){
  var tri="";
  for(var y = 1; y <= length; y++){
      tri=tri+makeLine(y);
  }
  return tri;
}
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length){
  var tri="";
  for(var y = 1; y <= length; y++){
      tri=tri+makeLine(y);
  }
  return tri;
}
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "H";
  }
  return line + "\n";
}

function buildTriangle(length){
  var tri="";
  for(var y = 1; y <= length; y++){
      tri=tri+makeLine(y);
  }
  return tri;
}
console.log(buildTriangle(10));

*/

//break

/*
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodStations = [];
  for(const station of stations){
    const capacity = station[1]
    const venue = station[2];
    if(capacity >= 20 && (venue === "school" || venue === "community centre")){
      goodStations.push(station[0])
    }
  }
  return goodStations;
  
}

console.log(chooseStations);

//break
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 

const finalPosition = function (moves) {
  const position = [0,0];
  for(const move of moves){
    if(move === "north"){
      position[1] ++; 
    }else if(move === "south"){
      position[1] --;
    }else if(move === "east"){
      position[0] ++;
    }else if(move === "west"){
      position[0] --;
    }

  }
        return position;
    
}
console.log(finalPosition(moves));

//break


function ageCalculator(name, birthYear, currentYear){
  return(`${name} is ${currentYear - birthYear} years old.`);

}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//break

function howManyHundreds(num){
  howMany = num/100;
  return Math.floor(howMany);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

//break

function calculateRectangleArea(length, width){
  let rectangleArea = length * width;
  if(length < 0 || width < 0){
    rectangleArea = "undefined";
  }
return rectangleArea;
}

function calculateTriangleArea(base, height){
  let triangleArea = base * height / 2;
  if(base < 0 || height < 0){
    triangleArea = "undefined";
  }
return triangleArea;
}

function calculateCircleArea(radius){
  let circleArea = Math.PI * radius * radius
  if(radius < 0){
    circleArea = "undefined";
  }
return circleArea;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

*/ 
//break

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var row = 0; row < numbers.length; row++){
  
  for(var col= 0; col<numbers[row].length; col++){
      if(numbers[row][col] % 2 ===0){
          numbers[row][col] = "Even";
      }else{
          numbers[row][col] = "Odd";
      }

  }
}
console.log(numbers)