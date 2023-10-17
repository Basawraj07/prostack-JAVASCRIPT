class Account{
min_bal = 500

open_account(){
    console.log('acoount opend in hdfc')
}
get_cash(){
    console.log('got 500 cash')
}

get_st(){
    console.log('statement')

}
    close_account(){

        console.log('account closed sucsesfully')
}

}

let a1 = new Account()

console.log(a1)

a1.open_account()
a1.get_cash()
a1.get_st()
a1.close_account()
