import { semesterAverage } from "./average";

const svgOrange = document
  .getElementById("svg-orange")
  .content.querySelector("svg");
const svgRed = document.getElementById("svg-red").content.querySelector("svg");
const svgGreen = document
  .getElementById("svg-green")
  .content.querySelector("svg");

export function addGrades(inputSemester, newSemester, semesterGrades) {
  let divGrades = newSemester.querySelector(".grades");

  const grades = parseFloat(inputSemester.value);

  if (grades <= 6 && grades > 0.5 && grades % 0.5 === 0) {
    const newGrades = document.createElement("span");
    newGrades.className =
      "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200";

    let newSvg;

    if (grades > 4) {
      newSvg = svgGreen.cloneNode(true);
    } else if (grades < 4) {
      newSvg = svgRed.cloneNode(true);
    } else {
      newSvg = svgOrange.cloneNode(true);
    }

    newGrades.appendChild(newSvg);
    newGrades.appendChild(document.createTextNode(grades));

    if (divGrades) {
      divGrades.appendChild(newGrades);
      semesterGrades.push(grades);

      semesterAverage(newSemester, semesterGrades);
    }
  }
  inputSemester.value = "";
}
