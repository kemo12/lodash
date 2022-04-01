function compact(array){
return array.filter((e)=>Boolean(e))
}
console.log(compact([0, 1, false, 2, '', 3]))
