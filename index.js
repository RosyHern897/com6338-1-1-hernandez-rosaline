// Your code here
function greet() {
  // 1. Ask for the user's name
  let name = prompt("What is your name?");

  // 2. Greet the user with an alert
  alert("Hello, " + name);

  // 3. Ask for the user's age
  let age = prompt("How old are you?");
  age = parseInt(age); // convert input into a number

  // 4. Ask if they've had a birthday this year
  let hadBirthday = confirm("Have you had a birthday yet this year?");

  // 5. Figure out birth year
  let currentYear = new Date().getFullYear();
  let birthYear;

  if (hadBirthday) {
    birthYear = currentYear - age;
  } else {
    birthYear = currentYear - (age + 1);
  }

  // 6. Show the user their birth year
  alert("You were born in " + birthYear + ".");
}
