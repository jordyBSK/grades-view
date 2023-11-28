const button = document.querySelector("#button");
const input = document.querySelector("#sem1");
const divGrades = document.querySelector("#grades");
const semesterButton = document.querySelector("#add-semester");
let count = 1;

button.addEventListener("click", () => {
  const svgOrange = document
    .getElementById("svg-orange")
    .content.querySelector("svg");
  const svgRed = document
    .getElementById("svg-red")
    .content.querySelector("svg");
  const svgGreen = document
    .getElementById("svg-green")
    .content.querySelector("svg");

  if (input.value <= 6 && input.value % 0.5 === 0 && input.value > 0.5) {
    const newGrades = document.createElement("span");
    newGrades.className =
      "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200";

    let newSvg = document.createElement("svg");

    if (input.value > 4) {
      newSvg = svgGreen.cloneNode(true);
    } else if (input.value < 4) {
      newSvg = svgRed.cloneNode(true);
    } else {
      newSvg = svgOrange.cloneNode(true);
    }

    newGrades.appendChild(newSvg);
    newGrades.appendChild(document.createTextNode(input.value));

    if (divGrades) {
      divGrades.appendChild(newGrades);
    }
  }
  input.value = "";
});

input.addEventListener("focus", (event) => {
  const buttonClassList = button.classList;
  const svgClassList = button.querySelector("svg");

  buttonClassList.remove("ring-gray-300");

  svgClassList.classList.remove("text-gray-400");
  svgClassList.classList.add("text-blue-400");
});

input.addEventListener("blur", (event) => {
  const buttonClass = button.classList;

  const svgClassList = button.querySelector("svg");

  buttonClass.remove("ring-blue-300");
  buttonClass.add("ring-gray-300");

  svgClassList.classList.remove("text-blue-400");
  svgClassList.classList.add("text-gray-400");
});

semesterButton.addEventListener("click", (event) => {
  count++;
  if (count <= 8) {
    const newSemestre = document.createElement("div");
    newSemestre.className = "px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0";

    const dt = document.createElement("dt");
    dt.className = "text-sm font-medium text-gray-900 py-2";
    dt.textContent = "Semestre " + count;
    newSemestre.appendChild(dt);

    const gradesList = document.createElement("dd");
    gradesList.className =
      "mt-1 text-sm leading-6 text-gray-700 sm:col-span-4 sm:mt-0 flex justify-between gap-x-1.5";

    const grades = document.getElementById("grades").cloneNode(true);
    gradesList.appendChild(grades);

    const allSemester = document.getElementById("all-semester");
    allSemester.appendChild(newSemestre);
  }
});
