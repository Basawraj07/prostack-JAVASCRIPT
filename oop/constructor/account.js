class Account{
    acc_id;
    acc_name;

    constructor(id,name){
        this.acc_id = id
        this.acc_name = name
        this.min_bal = 500;
        this.acc_bal = 0;
    }

    deposit(amount){
this.acc_bal = this.acc_bal + amount
    }

    withdraw(amount){
        this.acc_bal = this.acc_bal - amount
    }

    get_bal(){
      return this.acc_bal - this.min_bal
    }
}

let a1 = new Account(101,'basu')
let a2 = new Account(102,'feli')


a1.deposit(2000)
a2.deposit(7000)

console.log(a1)
console.log(a2)

a1.withdraw(300)
a2.withdraw(200)

console.log(a1)
console.log(a2)

console.log(a1.get_bal())
console.log(a2.get_bal())
