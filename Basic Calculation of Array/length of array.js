
let size = Number(prompt("Enter array size:"));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}


let count = 0;

while (arr[count] !== undefined) {
    count++;
}

console.log("Length of array:", count);
