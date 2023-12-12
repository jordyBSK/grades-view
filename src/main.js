import { addGrades } from "./addGrades";

const semesterButton = document.querySelector("#add-semester");
let count = 0;

semesterButton.addEventListener("click", (event) => {
  count++;
  const semesterGrades = [];

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
      addGrades(inputSemester, semestre, semesterGrades);
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

    buttonClass.remove("ring-blue-400");
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
