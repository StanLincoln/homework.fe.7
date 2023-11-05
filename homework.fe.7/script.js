// 1. You need to double the integer and return it.
const doubleInteger = (i => i*2);
console.log(doubleInteger(4));
// 2. You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.
const otherAngle = ((a, b) => (a > 0 && b > 0) ? 180 - a - b : console.log('Error'));
console.log(otherAngle(40, 20));
// 3. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
const countSheep = num => {
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += `${i} sheep...`;
    }
    return result;
  }
console.log(countSheep(3));
// 4. Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
const setAlarm = ((employed, vacation) => employed && !vacation ? true : false);
console.log(setAlarm(true, false));
// 5. There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
function countPeopleOnBus(busStops) {
    let totalPeople = 0;
    busStops.forEach((stop) => {
      totalPeople += stop[0] - stop[1];
    });
    return totalPeople;
  }
  let busStops = [[3, 0], [4, 2], [6, 5]];
  console.log(countPeopleOnBus(busStops));
//   6.All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//   Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//   Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
  function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];
   }
   console.log(feast("great blue heron", "garlic naan"));
// 7. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * l + 2 * w;
console.log(areaOrPerimeter(5, 5));
// 8. Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);
console.log(goals(5,2,4));
// 9. Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
const squareOrSquareRoot = [4,3,9,7,2,1]
const squareArray = squareOrSquareRoot.map(el => Math.sqrt(el) % 1 === 0 ? Math.sqrt(el) : el**2);
console.log(squareArray);
// 10. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
function abbrevName(name){
    const words = name.split(' ');
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join('.');
  }
console.log(abbrevName('Stan Lincoln'));
// 11. Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
    const arr = [...a, ...b]
    return arr.filter((item, i) => arr.indexOf(item) === i).sort((a, b) => a-b)
  }
  console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
// 12. I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(a, b) {
    const arr = [...a, ...b]
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum;
  }
  console.log(arrayPlusArray([2, 4, 8], [2, 4, 6]));
// 13. Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const newArr = arr.reduce((acc, val) => {
val > 0 ? acc[0]++ : acc[1]+=val;
return acc;
}, [0, 0]);
console.log(newArr);
// 14. You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const newArr = arr.reduce((acc, val) => {
if(val > 0) return acc + val;
return acc;
}, 0);
console.log(newArr);