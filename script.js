// function onNumbers(x, y) {
//     if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(onNumbers(2, -4))

let arr = window.prompt('Write something!')
let list = arr.split(" ").map(i => Number(i))

let minFirst = 0
let minSecond = 0

minFirst = Math.min(...list)
list.splice(list.indexOf(minFirst), 1)

minSecond = Math.min(...list)
list.splice(list.indexOf(minSecond), 1)

console.log(minFirst + minSecond)