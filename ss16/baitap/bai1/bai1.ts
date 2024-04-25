/*
    Định nghĩa abstract class Shape có thuộc tính name, phương thức getName 
    và phương thức abstract getSize.
    Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
    Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức
    getSize để in ra các kích cỡ của hình trong lớp con.
*/
abstract class Shape{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    // viết theo phương thức normal
    getName(){   
        // lấy ra tên của hình
        return `hinh la  ${this.name};`
    
    }
    // viết theo kiểu abstract
    abstract getSize():void
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(name:string,width:number,height:number) {
        super(name)
        this.width = width;
        this.height = height;
    }
    getSize():void{
        console.log("chiều dài",this.width);
        console.log("chiều rộng",this.height);
        // return  `chiều dài: ${this.width} và chiều rộng: ${this.height}`   
    }
}
let rectangle = new Rectangle("Hinh tron",10,20);
console.log("ten",rectangle.getName());