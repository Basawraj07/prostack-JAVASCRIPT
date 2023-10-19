class Parent{
    m1(){
        console.log('its dad')
    }

    m2(){
        console.log('its mom')
    }
}

class child extends Parent{
m3(){
    console.log('the child')
}

}

let a1 = new child()

a1.m1()
a1.m2()
a1.m3()