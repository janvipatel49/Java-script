// ->Day Number to Day Name

// Write a  program to read any day number  and display the day name in word format.

let dayNumber = Number(prompt("Enter day number (1 to 7):"));

if (dayNumber === 1) {
    alert("Monday");
} else if (dayNumber === 2) {
    alert("Tuesday");
} else if (dayNumber === 3) {
    alert("Wednesday");
} else if (dayNumber === 4) {
    alert("Thursday");
} else if (dayNumber === 5) {
    alert("Friday");
} else if (dayNumber === 6) {
    alert("Saturday");
} else if (dayNumber === 7) {
    alert("Sunday");
} else {
    alert("Invalid day number");
}
