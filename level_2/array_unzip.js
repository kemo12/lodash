function unzip(arrays){
    let arr=[];
    for(let i=0;i<arrays[0].length;i++){
        arr.push([]);
        for(let j=0;j<arrays.length;j++)arr[i].push(arrays[j][i]);
        }
    return arr;
        
}
console.log(unzip([['a', 1, true], ['b', 2, false]]))