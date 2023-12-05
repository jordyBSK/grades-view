const allGrades = [];

export function calculAverage(allgrades) {
  if (allGrades.length === 0) {
    return null;
  }

  let sum = allgrades.reduce(function (acc, grade) {
    return acc + grade;
  }, 0);

  let moyenne = sum / allgrades.length;

  return moyenne;
  console.log(moyenne);
}

let spanAverage = (document
  .querySelector("#semester-template")
  .content.querySelector("#moyenne").textContent = calculAverage());

console.log(spanAverage);

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
      allGrades.push(grades);

      // Calculate the new average and log it
      let spanAverage = calculAverage(allGrades);
      console.log(spanAverage);
    }
  }
  inputSemester.value = "";
}
