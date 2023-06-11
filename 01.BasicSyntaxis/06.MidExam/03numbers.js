function numbers(input) {
let newArr = input.split(" ").map(Number);

let average = newArr.reduce((acc,currel) => acc += currel, 0)/newArr.length;

let aboveAvg = newArr.filter(elm => elm > average).sort((a,b) => b-a);
let result = aboveAvg.slice(0, 5);

if (result.length === 0) {
    console.log("No");
} else {
console.log(result.join(" "));
}
}
numbers('1 1 1');