function distinctArray(arr) {
  let newArr = arr.reduce((arrayN, currentElement) => {
    if (!arrayN.includes(currentElement)) {
      arrayN.push(currentElement);
    }
    return arrayN;
  }, []);
  console.log(newArr.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

