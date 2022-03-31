function join(array,char){
return array.reduce((e1,e2)=>e1+char+e2);
}
console.log(join(['a', 'b', 'c'], '~'))