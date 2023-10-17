class rectangle{
constructor(width,height){

    this.width=width;
    this.height=height;
}
calrect(){
return this.width * this.height;
}
calperi(){
return 2 * (this.width + this.height);
}
}

let a1 = new rectangle(12,10);

let area = a1.calrect();
let perimeter = a1.calperi();

console.log(`Rectangle area: ${area}`);
console.log(`Rectangle perimeter: ${perimeter}`);