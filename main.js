document.write(
  "<h1 style = 'color: red; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;'>Walid</h1>"
);
// Another solution
document.write("<h1 id='myHeader'>Walid</h1>");
var myHeader = document.getElementById("myHeader");
myHeader.style.color = "red";
myHeader.style.fontSize = "80px";
myHeader.style.fontWeight = "bold";
myHeader.style.textAlign = "center";
myHeader.style.fontFamily = "Arial";
// ------------------------------------------------------
console.log(
  "%cWalid %cAshraf %cAhmed",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: blue; font-size: 40px;"
);
// ------------------------------------------------------
console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd("Grand Child Group");
console.groupEnd("Child Group");
console.groupEnd("Group 1");
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
// ------------------------------------------------------
console.table(["Walid", "Ashraf", "Ahmed", "Elsayed", "Gazy"]);
// ------------------------------------------------------
/*
/// console.log("Iam In Console");
document.write("Iam In Page");
*/
let numberOne = "10";
let numberTwo = "20";
console.log(numberOne + numberTwo);
console.log(typeof ("numberOne" + "numberTwo"));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);
//----------------------------------------------------------------
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
//----------------------------------------------------------------
console.log(
  '`I\'m In \n\\\nLove \\\\ """ \'\'\'\n++ With ++\n""""""\n""JavaScript""``'
);
//----------------------------------------------------------------
// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
//----------------------------------------------------------------
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLocaleLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.split("l", 1).toString().toLowerCase());
console.log(userName[0].toLocaleLowerCase().repeat(3));
//----------------------------------------------------------------
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
//----------------------------------------------------------------
console.log("------------");
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 == typeof +"-40"); // true
console.log(typeof 10 != -"-40"); // true
console.log(typeof "10" != 10); // true
console.log(typeof 20 != false); // true
//----------------------------------------------------------------
console.log("------------");
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a > b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
//----------------------------------------------------------------
console.log("------------");
let num = 110;
if (num === 9) {
  console.log(`00${num}`);
} else if (num === 20) {
  console.log(`0${num}`);
} else if (num === 110) {
  console.log(`${num}`);
}
//----------------------------------------------------------------
console.log("------------");
let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log(`{num1} Is The Same Value As {str}`);
}
if (num1 == str) {
  console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}
if (typeof num1 === typeof +str2) {
  console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
}
if (typeof str === typeof str2) {
  console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}
//----------------------------------------------------------------
console.log("------------");
let num2 = 10;
let num3 = 30;
let num4 = "30";

if (+num4 > num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
} else if (+num4 == num3) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
} else {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

// Needed Output
("30 Is Larger Than 10 And Type string Not The Same Type As number");
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
//----------------------------------------------------------------
console.log("------------");
let day = "Monday";

switch (day) {
  case " friday ":
    console.log(
      "You Need To Remove Spaces And Make First Letter Capital => Friday"
    );
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}
//----------------------------------------------------------------
console.log("------------");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num5 = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num5)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(false, num5)); // ["Ahmed", "Elham", "Osama"];
// Method 3
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//----------------------------------------------------------------
console.log("------------");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
//----------------------------------------------------------------
console.log("------------");
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//----------------------------------------------------------------
console.log("------------");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
//----------------------------------------------------------------
console.log("------------");
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) == -1) {
  console.log("Not Found");
} else {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) == -1) {
  console.log("Not Found");
} else {
  console.log("Found");
}
//----------------------------------------------------------------
console.log("------------");
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort();
allArrs = allArrs.slice(allArrs.indexOf("F"));
allArrs = allArrs.join("").toLocaleLowerCase();
console.log(allArrs); // fxy
//----------------------------------------------------------------
console.log("================================");
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i === 40) {
    continue;
  }
  console.log(i);
}
//----------------------------------------------------------------
console.log("================================");
let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= stop; i--) {
  if (i < start2) {
    console.log(`${end2}${i}`);
  } else {
    console.log(i);
  }
}
//----------------------------------------------------------------
console.log("================================");
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (i = start3; i <= end3; i++) {
  console.log(i);
  for (j = start3; j < breaker; j++) {
    console.log(`-- ${breaker}`);
    console.log(`-- ${breaker + 2}`);
  }
}
//----------------------------------------------------------------
console.log("================================");
let index = 10;
let jump = 2;
let k = index;

for (;;) {
  if (k === jump) {
    break;
  }

  if (k > jump) {
    console.log(k);
  }
  k -= jump;
}
//----------------------------------------------------------------
console.log("================================");
let friends2 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let d = letter.indexOf(letter); // 0
// console.log(d);

for (let i = d; i < friends2.length; i++) {
  if (friends2[i].startsWith(letter.toUpperCase())) {
    continue;
  } else {
    console.log(`"${++d} => ${friends2[i]}"`);
  }
}
//----------------------------------------------------------------
console.log("================================");
let start4 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start4; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);
//----------------------------------------------------------------
console.log("================================");
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i =start5; i <mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] === 1) {
    continue;
  }
  else {
    console.log(mix[i]);
  }
}