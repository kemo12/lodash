function size(collection){
    if(Array.isArray(collection)||typeof collection === 'string') return collection.length;
    else if(typeof collection === 'object' && collection !== null)
    return Object.keys(collection).length;
}
console.log(size({ 'a': 1, 'b': 2 }))
console.log(size([1, 2, 3]))
console.log(size('pebbles'))


