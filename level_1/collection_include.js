function includes(collection,value,fromIndex=0){
if(Array.isArray(collection)){
  for(let i=fromIndex;i<collection.length;i++){
     if(collection[i]===value) return true
  }
  return false
}
else if(typeof collection === 'string') return collection.includes(value)
else if(typeof collection === 'object' && collection !== null)return Object.values(collection).includes(value);
}

console.log(includes({ 'a': 1, 'b': 2 }, 4))