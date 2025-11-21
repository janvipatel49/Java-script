
let size = Number(prompt("Enter array size:"));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}


for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", arr);
