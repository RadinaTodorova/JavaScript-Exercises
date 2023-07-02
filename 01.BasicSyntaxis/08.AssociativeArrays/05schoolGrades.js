function schoolGrades(input) {
  let avg = {};
  for (const line of input) {
    let studentArr = line.split(' ');
    let name = studentArr.shift();
    let grade = studentArr.map(Number);
    let averageGrades = grade.reduce((a, b) => a + b, 0) / grade.length;

    if (avg.hasOwnProperty(name)) {
      avg[name] = (avg[name] + averageGrades) / 2;
    } else {
      avg[name] = averageGrades;
    }
  }
  let sortedAvg = Object.entries(avg).sort((a, b) => a[0].localeCompare(b[0]));
  for (const line of sortedAvg) {
    console.log(`${line[0]}: ${line[1].toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
