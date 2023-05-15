function echoType(paramentar) {
  let type = typeof paramentar;

  console.log(type);
  if (type === "string" || type === "number") {
    console.log(paramentar);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
echoType("Hello, JavaScript!");
