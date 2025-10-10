// -> Admission Eligibility Check
// Eligibility Criteria:
// Marks in Maths >= 65
// Marks in Physics >= 55
// Marks in Chemistry >= 50
// AND (Total of all 3 subjects >= 190 OR Maths + Physics >= 140)

let math = Number(prompt("Enter Maths marks:"));
let phy = Number(prompt("Enter Physics marks:"));
let che = Number(prompt("Enter Chemistry marks:"));

let total = math + phy + che;
let all = math + phy;

if (math >= 65 && phy >= 55 && che >= 50 && (total >= 190 || all >= 140)) {
    alert("Student is eligible");
} else {
    alert("Student is not eligible");
}
