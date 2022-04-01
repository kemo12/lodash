function Foo() {
      this.a = 1;
    }
     
function Bar() {
      this.c = 3;
    }
Foo.prototype.b = 2;
Bar.prototype.d = 4;

function assign(...source){
return Object.assign(...source);
}

console.log(assign({'a':0},new Foo,new Bar))