// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater`);
  } else if (num2 > num1) {
    console.log(`${num2} is greater`);
  } else {
    console.log("They are equal");
  }
}

// Call the function
max(12, 43);
