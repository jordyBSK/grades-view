const button = document.getElementById("button");
const input = document.getElementById("sem1");
const divGrades = document.getElementById("grades");
const svgOrange = document
  .getElementById("svg-orange")
  .content.querySelector("svg");
const svgRed = document.getElementById("svg-red").content.querySelector("svg");
const svgGreen = document
  .getElementById("svg-green")
  .content.querySelector("svg");

button.addEventListener("click", () => {
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
