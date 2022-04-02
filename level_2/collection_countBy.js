function countBy(collection,iteratee){
    let obj={};
    let duplicated=[];
    for(let i=0;i<collection.length;i++){
        if(!duplicated.includes(iteratee(collection[i]))){
            obj[iteratee(collection[i])]=1;
            duplicated.push(iteratee(collection[i]))
        }else{
            obj[iteratee(collection[i])]++;
        }
    }
    return obj;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor))