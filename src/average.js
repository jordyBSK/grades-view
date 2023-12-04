const allGrades = [];

const notes = allGrades.push(grades);

let sum = 0;

for (let i = 0; i < allGrades.length; i++) {
    if (isNaN(allGrades[i]) || allGrades[i] === "") {
        throw new Error("Element at index " + { i } + "is not a valid number");
    }
    sum += parseFloat(allGrades[i]);
}