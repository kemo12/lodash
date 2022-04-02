function pullAt(array,indexes){
return array.filter((e,index)=>{return indexes.includes(index)});
}
console.log(pullAt(['a', 'b', 'c', 'd'],[1, 3]))