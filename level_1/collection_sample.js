function sample(collection){
return collection[Math.floor(Math.random() * (collection.length ))]
}

console.log(sample([1, 2, 3, 4]))