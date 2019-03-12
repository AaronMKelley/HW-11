function Shape (n,s){
    this.name=n;
    this.sides=s;
}

function Rec(h,w,n,s){
    this.height=h;
    this.width=w;
    Shape.call(this,n,s)
}
Rec.prototype=Object.create(Shape.prototype)

Rec.prototype.area=function(){
    var area= this.height*this.width
    console.log(area)
}

Rec.prototype.perimeter=function(){
  var perimeter=  (this.height*2)+(this.width*2)
    console.log(perimeter)
}

function Sqaure (h,w,n,s){
    if (h != w){
      h=w
    }
    Rec.this(h,w,n,s)
}


Sqaure.prototype=Object.create(Rec.prototype)

var rec = new Rec (32,12,"rectangle",4)

console.log(rec.area())
console.log(rec.perimeter())