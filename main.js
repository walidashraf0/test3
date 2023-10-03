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
console.log("`I'm In \n\\\nLove \\\\ \"\"\" '''\n++ With ++\n\"\"\"\"\"\"\n\"\"JavaScript\"\"``");
//----------------------------------------------------------------
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_