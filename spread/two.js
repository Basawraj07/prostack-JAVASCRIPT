let price = [9,99,999,9999]

let total = price.filter((price)=>{
    return price < 999
})
console.log(total)