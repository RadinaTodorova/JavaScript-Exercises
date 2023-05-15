function triangleArea(sideOne, sideTwo, sideThree) {
  let p = (sideOne + sideTwo + sideThree) / 2;
  let a = Math.sqrt(p * (p - sideOne) * (p - sideTwo) * (p - sideThree));

  console.log(a);
}
triangleArea(2, 3.5, 4);
