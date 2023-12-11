const semesterGrades = [];

const svgOrange = document
  .getElementById("svg-orange")
  .content.querySelector("svg");
const svgRed = document.getElementById("svg-red").content.querySelector("svg");
const svgGreen = document
  .getElementById("svg-green")
  .content.querySelector("svg");

export function calculAverage(newSemester) {
  let sum = 0;

  for (let i = 0; i < semesterGrades.length; i++) {
    sum += parseFloat(semesterGrades[i]);
  }
  const average = sum / semesterGrades.length;

  const moyenneElement = newSemester.querySelector(".moyenne");
  moyenneElement.innerHTML = "";

  const cloneSvg = (svg) => moyenneElement.appendChild(svg.cloneNode(true));

  if (average > 4) {
    cloneSvg(svgGreen);
  } else if (average < 4) {
    cloneSvg(svgRed);
  } else {
    cloneSvg(svgOrange);
  }

  moyenneElement.appendChild(document.createTextNode(average));
}

export function addGrades(inputSemester, newSemester) {
  let divGrades = newSemester.querySelector(".grades");

  const grades = parseFloat(inputSemester.value);

  if (grades <= 6 && grades > 0.5 && grades % 0.5 === 0) {
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
      semesterGrades.push(grades);

      calculAverage(newSemester);
    }
  }
  inputSemester.value = "";
}
