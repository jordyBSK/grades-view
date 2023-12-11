import { addGrades } from "./addGrades";

const semesterButton = document.querySelector("#add-semester");
let count = 0;

semesterButton.addEventListener("click", (event) => {
  count++;
  const semester = {
    notes: [],
    number: count,
    average: 0,
  };
  console.log(semester);
  const allSemester = document.querySelector("#all-semester");
  const newSemestre = document
    .querySelector("#semester-template")
    .content.cloneNode(true);

  const buttonGrades = newSemestre.querySelector("button");
  const inputSemester = newSemestre.querySelector("input");

  if (count <= 8) {
    allSemester.appendChild(newSemestre);
    const semestre = allSemester.lastElementChild;
    semestre.querySelector("dt").innerText = "Semester " + count;

    buttonGrades.addEventListener("click", () => {
      addGrades(inputSemester, semestre);
    });
  }

  if (count > 7) {
    semesterButton.remove();
  }

  inputSemester.addEventListener("focus", (event) => {
    const svgButton = buttonGrades.querySelector("svg");

    buttonGrades.classList.add("ring-blue-400");
    svgButton.classList.remove("text-gray-400");
    svgButton.classList.add("text-blue-400");
  });

  inputSemester.addEventListener("blur", (event) => {
    const buttonClass = buttonGrades.classList;

    const svgButton = buttonGrades.querySelector("svg");

    buttonGrades.classList.remove("ring-blue-400");
    svgButton.classList.remove("text-blue-400");
    svgButton.classList.add("text-gray-400");
  });
});

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
