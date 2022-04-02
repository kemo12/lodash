function zipObject(...arrays){
    let obj={};
    for(let i=0;i<arrays[0].length;i++) obj[arrays[0][i]]=arrays[1][i];
    return obj;
}
console.log(zipObject(['a', 'b'], [1, 2]))