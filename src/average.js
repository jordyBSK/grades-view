const svgOrange = document
  .getElementById("svg-orange")
  .content.querySelector("svg");
const svgRed = document.getElementById("svg-red").content.querySelector("svg");
const svgGreen = document
  .getElementById("svg-green")
  .content.querySelector("svg");

const allAverage = [];
export function semesterAverage(newSemester, semesterGrades) {
  let sum = 0;

  for (let i = 0; i < semesterGrades.length; i++) {
    sum += parseFloat(semesterGrades[i]);
  }
  const average = sum / semesterGrades.length;
  const roundedAvg = Math.round(average * 10) / 10;
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

  moyenneElement.appendChild(document.createTextNode(roundedAvg));
  allAverage.push(average);
  generalAverage();
}
function generalAverage() {
  const allAverage = document.querySelectorAll(".moyenne");
  const generalSpan = document.querySelector(".general");
  generalSpan.innerHTML = "";

  let sum = 0;

  for (let i = 0; i < allAverage.length; i++) {
    sum += parseFloat(allAverage[i].innerText);
  }

  const generalAvg = sum / allAverage.length;

  const roundedGeneral = Math.round(generalAvg * 10) / 10;
  const cloneSvg = (svg) => generalSpan.appendChild(svg.cloneNode(true));

  console.log(generalAvg);
  if (generalAvg > 4) {
    cloneSvg(svgGreen);
  } else if (generalAvg < 4) {
    cloneSvg(svgRed);
  } else {
    cloneSvg(svgOrange);
  }
  generalSpan.appendChild(document.createTextNode(roundedGeneral));
  console.log(allAverage);
}
