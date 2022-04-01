function flattenDeep(array){

    function getArrayDepth(arr) {
        return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getArrayDepth)):0;
    }

      if(getArrayDepth(array)==1) return array;
      return flattenDeep(array.flat());      
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]))