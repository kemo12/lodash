var array1 = [1, 2, 3, 4];
function remove(array,func){
    return array.filter((e,index)=>{
        if(func(e)){
            array.splice(index, 1);
            return true;        
        }   
    })
}

console.log(remove(array1,function(n) {return n % 2 == 0;}))
console.log(array1)