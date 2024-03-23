// Function to combine a string and a number

function combineStringAndNumber(text: string, number: number): string {
  // Concatenate the string and the number
  return text + number;
}

// Test the combineStringAndNumber function//
console.log(combineStringAndNumber("age:", 19));

// Function to calculate the reminder of two numbers
function reminder(num1: number, num2: number): number {
  return num1 % num2;
}
console.log(reminder(4, 2));
console.log(reminder(5, 3));
console.log(reminder(4, 3));

// Function to check if both boolean values are true
function checkBothTrue(val1: boolean, val2: boolean): boolean {
  return val1 && val2;
}
console.log(checkBothTrue(true, false));
