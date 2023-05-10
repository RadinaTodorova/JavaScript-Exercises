function daysOfTheWeek(num) {

let daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
if (num >= 1 && num <= 7) {
console.log(daysOfTheWeek[num-1])
}else {
console.log('Invalid day!')
}
}
daysOfTheWeek(3);