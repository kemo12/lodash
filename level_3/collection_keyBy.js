var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];
function keyBy(collection,iteratee){
    let resultArray=[];
    for(let i=0;i<collection.length;i++){
        let obj={};
        if((typeof iteratee === "function")) obj[iteratee(collection[i])]=collection[i]
        else obj[collection[i][iteratee]]=collection[i];
        resultArray.push(obj);
    }
    return resultArray;
}


console.log(keyBy(array, function(o) {return String.fromCharCode(o.code);}))
console.log(keyBy(array, 'dir'))