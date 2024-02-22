class School {
    constructor(name,age,branch){
        this.namee = name;
        this.agee = age;
        this.branch = branch;
    }

    m1(){
        console.log(`my name is ${namee} and my age is ${agee}`)
    }
}

class student extends School{
    constructor(game){
        super(name,age,branch)
        this.games = game;
    }
}

let ob1 = new student('basu',26,'ece',football);

ob1.m1();