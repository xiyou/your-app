class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
       
    }

    print() {
        return "天也会颤抖啊";
    }
}

Point.prototype.speak = function(){
    console.log(this);
    return "爱";
}

Point.prototype.p = 2;
   
class ColorPoint extends Point {
    constructor(x, y, color) {
        //super指向的是父类的原型
        super(x, y);
        this.color = color;
    }

    m() {
       var store =  super.print();
       return store;
    }

    toString() {
        return this.color + ' ' + super.toString();//调用父类的toString()
    }
}

let cp = new ColorPoint(1,2,'red');
console.log(cp.print === Point.prototype.print);
console.log(ColorPoint.__proto__ === Point);

// console.log(cp);
// console.log(ColorPoint.prototype.__proto__);
// console.log(cp instanceof ColorPoint);
// console.log(cp instanceof Point);
// ColorPoint.hello();
// console.log(Object.getPrototypeOf(ColorPoint));
// console.log(ColorPoint.__proto__ === Point);
// console.log(Point.prototype);
// Point.prototype.constructor.call(cp,10,10);

console.log(ColorPoint.__proto__ === Point);
console.log(ColorPoint.prototype.__proto__ === Point.prototype);
console.log(ColorPoint.prototype);