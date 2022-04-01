var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false },
  ];

function filter(collection,predicate){
    let filteredArray=[];
    for(let i=0;i<collection.length;i++){
        if (predicate(collection[i]))filteredArray.push(collection[i]);
    }
    return filteredArray;
}
console.log(filter(users, function(o) { return !o.active; }))
