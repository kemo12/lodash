function pull(array,...values){
    return array.filter((n)=>!values.includes(n))
}

console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'],'a'));
