class Parent{
    parnet_Name;
    constructor(pname){
        this.parnet_Name=pname
    }
}
class Child extends Parent{
    child_Name;
    constructor(cname,pname){
        super(pname)
        this.child_Name=cname
        
    }
}

let c1=new Child('Rahul',"Rajiv Gandhi")
let c2=new Child('priyanka',"Rajiv Gandhi")
let c3=new Child('ramcharan',"Chiranjeevi")
console.log(c1)
console.log(c2)
console.log(c3)