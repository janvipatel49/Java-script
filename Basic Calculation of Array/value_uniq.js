
let size = Number(prompt("Enter array size:"));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = Number(prompt("Enter value " + (i + 1) + ":"));
}


let unique = [];

for (let i = 0; i < size; i++) {
    let isUnique = true;

    for (let j = 0; j < size; j++) {
        if (i !== j && arr[i] === arr[j]) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        unique[unique.length] = arr[i];
    }
}

console.log("Unique values:", unique);
