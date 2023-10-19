class Account{
    name;
    email;
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}
class CA extends Account{
    min_bal = 500
    avl_bal = 0
    constructor(name,email,amount){
       
        super(name,email)
this.avl_bal = amount
    }
    get_bal (amount){
 return this.avl_bal = this.min_bal
    }
    deposit (amount){
        this.avl_bal = this.avl_bal + amount
            }
        
}

let a1 = new CA('basu','basumat32@gmail.com')

a1.deposit(5000)
console.log(a1)
console.log(a1.get_bal())

class SA extends Account{
    min_bal = 5000
    avl_bal = 0
    constructor(name,email,amount){
       
        super(name,email)
this.avl_bal = amount
    }
    get_bal (amount){
 return this.avl_bal = this.min_bal
    }
    deposit (amount){
        this.avl_bal = this.avl_bal + amount
            }
        
}

let a2 = new SA('feli','basumat32@gmail.com')

a2.deposit(7000)
console.log(a2)
console.log(a2.get_bal())
