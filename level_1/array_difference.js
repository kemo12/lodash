function difference(...arrays){
return arrays.shift().filter((e)=>!arrays.flat(1).includes(e));

}

console.log(difference([2, 1], [1, 3]));