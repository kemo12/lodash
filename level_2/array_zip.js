function zip(...arrays){
    let arr=[];
    for(let i=0;i<arrays.length;i++){
        arr.push([]);
        for(let j=0;j<arrays.length;j++)arr[i].push(arrays[j][i]);
        }
    return arr.slice(0,arrays[0].length)  
}
console.log(zip(['a', 'b'], [1, 2], [true, false]))