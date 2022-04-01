function difference(...arrays){
let firstArr=arrays.shift().filter((e)=>!arrays.flat(1).includes(e))
console.log(firstArr)
}

console.log(difference([2, 1], [1, 3]));