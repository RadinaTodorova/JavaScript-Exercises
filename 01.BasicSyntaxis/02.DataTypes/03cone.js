function cone(radius, height) {
  let volume = (Math.PI * radius * radius * height) / 3;
  let s = Math.sqrt(radius * radius + height * height);
  let area = Math.PI * radius * s + Math.PI * radius * radius;

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
