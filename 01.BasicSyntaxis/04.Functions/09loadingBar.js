function loadingBar(number) {
  let progressBar = printLoadingBar(number);
  let finalResult = progressBarVisualization();
  
  if (number === 100) {
    console.log("100% Complete!");
    console.log(progressBar);
  } else {
    console.log(finalResult);
    console.log("Still loading...");
  }

  function printLoadingBar(num) {
    let percentCount = num / 10;
    let percentsVisualization = "[";

    for (let index = 1; index <= 10; index++) {
      if (index <= percentCount) {
        percentsVisualization += "%";
      } else {
        percentsVisualization += ".";
      }
    }
    percentsVisualization += "]";
    return percentsVisualization;
  }

  function progressBarVisualization() {
    let result = `${number}% ${progressBar}`;
    return result;
  }

}
loadingBar(10);
