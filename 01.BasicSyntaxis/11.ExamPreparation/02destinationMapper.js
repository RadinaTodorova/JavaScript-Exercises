function destinationMapper(str) {
  let pattern = /([=|\/])(?<city>[A-Z][A-Za-z]{2,})\1/g;

  let points = 0;

  let destinations = [];

  let match = pattern.exec(str);
  while (match !== null) {
    let destination = match.groups["city"];

    destinations.push(destination);
    points += destination.length;
    match = pattern.exec(str);
  }
  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
