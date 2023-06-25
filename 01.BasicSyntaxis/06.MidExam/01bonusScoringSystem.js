function bonusScoringSystem(arr) {
  let numberStudents = Number(arr.shift());
  let lectures = Number(arr.shift());
  let additionalBonus = Number(arr.shift());

  let studentAttendance = arr.map(Number).sort((a, b) => a - b);
  let biggest = studentAttendance.pop();

  let totalBonus = Math.ceil((biggest / lectures) * (5 + additionalBonus));
  console.log(`Max Bonus: ${totalBonus}.`);
  console.log(`The student has attended ${biggest} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
