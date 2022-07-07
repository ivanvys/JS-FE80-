const number:number = 4

const string:string = 'string'

const undefined1:any = undefined 

const numbersArray: Array<number>=[1,2,3]
const numbersArray2:number[]=[1,2,3]

interface IObj {//по такому типу должен быть сделан объект
    name: string,
    age?: number,
    friends?: string[]
}

// OR

type Obj={
    name: string
}

const obj: IObj = {
name:'Alex',
age: 10,
friends: ['vanya']
};

const users: IObj[]=[]//массив объектов вида интерфэйс

users.push({name: 'Petr', age: 10})

enum Roles {
    ADMIN = "admin",
    CUSTOMER = 'customer'
}

interface IAdmin extends IObj{//наследование
    role: Roles
}

const admin: IAdmin = {
    name: "alex",
    age: 10,
    role: Roles.ADMIN
}

const arrays: (string|number) []=[1,'2']// или. только для типов!

type NuS = string|number

const arrayss: NuS[]=[1,'2']

const arrayOfTwo: [number,string]=[1,'1']

// типизация функций
const sum = (a:number,b:number):number=>{
    return a+b
}
//void тип - для ничего не возвращающей функции