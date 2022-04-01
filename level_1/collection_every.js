function every(collection, predicate) {
  if (Array.isArray(collection)) {return !collection.some((e)=>(!predicate(e)));}
  }

console.log(every([true, 1, null, 'yes'], Boolean))
