class bank{
    branch_name = 'hdfc'

    method1(){
console.log(this.branch_name)
    }

    method2(){
        console.log(this.branch_name)
    }
}

let a1 = new bank()

console.log(a1.branch_name)
a1.method1()
a1.method2()

