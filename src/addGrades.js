const allGrades = [];

export function addGrades(inputSemester, divGrades) {
  const grades = parseFloat(inputSemester.value);
  const svgOrange = document
    .getElementById("svg-orange")
    .content.querySelector("svg");
  const svgRed = document
    .getElementById("svg-red")
    .content.querySelector("svg");
  const svgGreen = document
    .getElementById("svg-green")
    .content.querySelector("svg");

  if (grades <= 6 && grades % 0.5 === 0 && grades > 0.5) {
    const newGrades = document.createElement("span");
    newGrades.className =
      "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200";

    let newSvg = document.createElement("svg");

    if (inputSemester.value > 4) {
      newSvg = svgGreen.cloneNode(true);
    } else if (inputSemester.value < 4) {
      newSvg = svgRed.cloneNode(true);
    } else {
      newSvg = svgOrange.cloneNode(true);
    }
    newGrades.appendChild(newSvg);
    newGrades.appendChild(document.createTextNode(inputSemester.value));

    if (divGrades) {
      divGrades.appendChild(newGrades);
    }
    average(grades);
  }
  inputSemester.value = "";
}

export function average(grades) {
  let notes = allGrades.push(grades);

  let sum = 0;

  for (let i = 0; i < allGrades.length; i++) {
    if (isNaN(allGrades[i]) || allGrades[i] === "") {
      throw new Error("Element at index " + { i } + "is not a valid number");
    }
    sum += parseFloat(allGrades[i]);
  }

  let average = sum / allGrades.length;

  console.log(average);
}
