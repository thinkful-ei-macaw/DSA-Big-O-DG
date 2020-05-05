// 1.1) is a constant or O(1) because there is no "run time", you put in the input, the algorithm spits out an answer, there is not "computational requirement". It will take the same amount of time, no matter how many other people are in the room.

// 1.2) is a linear or O(n) because it is acting like a loop. You are going person by person and asking what breed of dog they have. The more people in the room, the longer it will take, directly corresponding to the number of people in the room.

// 2) is a constant or O(1) because there is only one value, no matter how "large" the value is (for example 10 or 10000000000), there is still only one value.

// 3) is a polynomial or O(n^2) because there is a single nested loop.  It is going to increase the time based on the number of items in each array.

// 4) is a linear or O(n) because it is a loop. The run time is going to be directly propotional to the number of items in the array.

// 5) is a linear or O(n) because the run time is directly proportional to the number of items in the array (worst case being the item isn't in the array or is in the last index of the array).

// 6) is polynomial or O(n^2) because the nested loop is going to increase the run time exponentially based on the number of items in the array. (for each item in the array, it has to run the secondary loop. ({fist loop runs: array[0] second loop runs: array[all indexs]}))

// 7) is a linear or O(n) this is because even though there is only one value (num) the larger that value is, the more iterations it will take to get the result. the for loop is our longest wait {O(n)} and therefore that is the complexity of the algorithm

// 8) is a linear or O(log(n)) because every time it goes through the loop, it is reducing the size of the search parameter.

// 9) is a constant or O(1) because all it is doing is returning a random element from an array. it just instantly (1 run cycle) returns the value of the element at arr[random-index]

// 10) is linear or O(n) because the larger the value of the number, the longer it takes to go through the loop to identify if the number is prime.

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false; // if less than 2 or not a whole number, return false
  }
  for (let i = 2; i < n; ++i) { //if n = 2, dont increment i. if n > 2, increment i by 1
    console.log(i)
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isWhat(13))

// 11) Tower of hanoi, disks are numbered 1 2 3 (a larger disk (2) cannot be on top of a smaller disk (1)). rods are A, B, and C (A is the start, C is the end.) they are stacked on A and you want the to be stacked on C. code the algorith to solve the tower puzzle.

const towerOfHanoi = function (n, s, d, t) {
  if (n === 0) {
    print(t, d)
    return;
  } else {
    print(s, t)
    towerOfHanoi(n - 1, s, t, d);
  }
};

function print(a, b) {
  console.log(`Moving ${a} to ${b}`);
};

// else if (n === 1) {
//   console.log(`Moving ${s} to ${t}`);
//   towerOfHanoi(n-1,s,t,d) 
// }

towerOfHanoi(3, 'A', 'C', 'B');

// 1 = A -> C
// 2 = A -> B, A -> C, B -> C
// 3 = A -> C, A -> B, C -> B, A -> C, B -> A, B -> C, A -> C
// 4 = 1(A) -> C, 2(A) -> B, 1(C) -> B, 3(A) -> C, 1(B) -> A, 2B -> C, 1(A) -> C, 4A -> B, 1(C) -> B, 2(C) -> A, 1(B) -> A, 3(C) -> B, 


// 12.1) Counting Sheep

const countingSheep = function (num) {
  for (i = num; i > 0; i--) {
    console.log(`${i}: Another Sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
};

countingSheep(3);

// 12.2) Power Calculator

const powerCalculator = function (base, exp) {
  let sum = base;
  if (exp < 0) {
    return console.log('Exponent should be >= 0');
  } else if (exp === 0) {
    return console.log(1)
  } else if (exp === 1) {
    return console.log(sum)
  } else {
    for (let i = 1; i < exp; i++) {
      sum = sum * base;
    }
    return console.log(sum);
  }

}

powerCalculator(10, 2)

// 12.3) Reverse String

const reverseString = function (str) {
  let newString = '';
  for (let i = str.length; i >= 0; i--) {
    newString = newString + str.charAt(i);
  }
  console.log(newString);
}

reverseString('this is how you do it')

// 12.4) nth Triangular Number

const triangularNumber = function (num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum = sum + i;
  }
  console.log(sum)
}

triangularNumber(9)

// 12.5) String Splitter

const stringSplitter = function (str, sep) {
  let numOfSep = str.match(/[/]/g).length;

  console.log(numOfSep)

  let splitString = [];
  let string = str;
  
  for (let i = 0; i <= numOfSep; i++){
    if (string === '') {
      return;
    } else if (!string.includes(sep)) {
      splitString.push(string);
    } else {
      let separator = string.indexOf(sep);
      splitString.push(string.slice(0, string.indexOf(sep)));
      string = string.slice((separator) + 1);
    }
  }
  console.log(splitString);
}

stringSplitter('02/20/2020', '/')