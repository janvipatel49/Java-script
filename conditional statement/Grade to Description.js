// Grade to Description Mapping

// -> Write a program  to accept a grade and declare the equivalent description :

// Grade	Description
// E	Excellent
// V	Very Good
// G	Good
// A	Average
// F	Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average

    let grade = prompt("Enter the grade:").toUpperCase();

    if (grade === 'E') {
        alert("You have chosen: Excellent");
    } else if (grade === 'V') {
        alert("You have chosen: Very Good");
    } else if (grade === 'G') {
        alert("You have chosen: Good");
    } else if (grade === 'A') {
        alert("You have chosen: Average");
    } else if (grade === 'F') {
        alert("You have chosen: Fail");
    } else {
        alert("Invalid grade");
    }

