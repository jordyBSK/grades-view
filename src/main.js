import { addGrades } from "./addGrades";
import { calculAverage } from "./addGrades";

const semesterButton = document.querySelector("#add-semester");
let count = 0;

semesterButton.addEventListener("click", (event) => {
  count++;
  const allSemester = document.querySelector("#all-semester");
  const newSemestre = document
    .querySelector("#semester-template")
    .content.cloneNode(true);

  const buttonGrades = newSemestre.querySelector("button");
  const inputSemester = newSemestre.querySelector("input");
  let divGrades = newSemestre.querySelector(".grades");

  if (count <= 8) {
    allSemester.appendChild(newSemestre);
    const semester = allSemester.lastElementChild;
    semester.querySelector("dt").innerText = "Semester " + count;
    const semesterGrades = [];

    buttonGrades.addEventListener("click", () => {
      addGrades(inputSemester, divGrades);
      calculAverage();
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
