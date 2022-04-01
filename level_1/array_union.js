function union(...arrays){
return [...new Set(arrays.flat(1))]
}
console.log(union([2], [1, 2]))