function intersection(...arrays){
    //helper function 
    function getOccurrence(array, value) {return array.filter((v) => (v === value)).length;}
  //code
  let firstArray=[...arrays][0];
  let lastArray=arrays.slice(1).flat(1);
  let preResult=[];
  firstArray.forEach(n1 => {
  lastArray.forEach(n2 => {
    if(n1==n2)preResult.push(n1);
  });
  });
  return [...new Set( [...preResult].filter((num)=>getOccurrence(preResult,num)==[...arrays].length-1))]
  }
  
  console.log(intersection([2, 1], [2, 3] ))