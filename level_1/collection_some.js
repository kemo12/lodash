function some(collection,predicate){
 return collection.some((e)=>(predicate(e)));
}

console.log(some([null, 0, 'yes', false], Boolean))