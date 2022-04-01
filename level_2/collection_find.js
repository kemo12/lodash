var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
function find(collection,predicate,fromIndex=0){
 for(let i=fromIndex;i<collection.length;i++){
     if (predicate(collection[i]))return collection[i];
 }
}

console.log(find(users, function(o) { return o.age < 40; }))