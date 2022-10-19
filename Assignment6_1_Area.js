class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        return this.length*this.breadth;
    }
}
class Square extends Rectangle{
    constructor(side){
        super(side, side);
        this.side = side;
    }
}
let obj1 = new Rectangle(2,5);
let obj = new Square(5);
console.log(obj1.area());
console.log(obj.area());