/* function every(collection,predicate){
    return collection.every(predicate)
} */
function every(collection, predicate, guard) {
    var func = isArray(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = undefined;
    }
    return func(collection, getIteratee(predicate, 3));
  }
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
console.log(every(users, { 'user': 'barney', 'active': false }))




//notes: i studied this article https://www.freecodecamp.org/news/how-to-use-javascript-collections-map-and-set/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections