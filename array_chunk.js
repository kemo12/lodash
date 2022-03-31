function chunk(array,n){
return array.length>n?[array.slice(0,n),...chunk(array.slice(n),n)]:[array]
}
console.log(chunk(['a', 'b', 'c', 'd','c'], 3))