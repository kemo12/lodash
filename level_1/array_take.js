function take(array,n=1){
   return array.slice(0,n)
}
console.log(take([1, 2, 3]))
console.log(take([1, 2, 3], 0))
console.log(take([1, 2, 3], 5))