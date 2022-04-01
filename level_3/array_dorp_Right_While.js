var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
function dropRightWhile(array,func){
  for(let i=array.length-1 ; i>-1 ; i--){
    if(func(array[i]))array.pop();
 else break;
  }
  return array;
}
console.log(dropRightWhile(users, function(o) { return !o.active; }));
