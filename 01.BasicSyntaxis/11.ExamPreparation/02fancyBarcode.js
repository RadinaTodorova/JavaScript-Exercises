function fancyBarcode(data) {
  let n = Number(data.shift());
  let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  for (let index = 0; index < n; index++) {
    let bardode = data[index];
    let match = pattern.exec(bardode);
    let concatenateDigit = "";
    let isValid = false;
    while (match !== null) {
      isValid = true;
      let barcodetext = match[1];

      for (let ch of barcodetext) {
        if (!isNaN(Number(ch))) {
          concatenateDigit += ch;
        }
      }

      match = pattern.exec(bardode);
    }
    if (isValid) {
      concatenateDigit = concatenateDigit !== "" ? concatenateDigit : "00";
      console.log(`Product group: ${concatenateDigit}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
