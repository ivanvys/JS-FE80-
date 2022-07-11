const number:number = 4

const string:string = 'string'

const undefined1:any = undefined 

const numbersArray: Array<number>=[1,2,3]//generic type
const numbersArray2:number[]=[1,2,3]

interface IObj {//по такому типу должен быть сделан объект(!только для {})
    name: string,
    age?: number,
    friends?: string[]
}

// OR

type Obj={
    name: string//кастомный тип!!!(можно и объект и просто примитив)
}

const obj: IObj = {
name:'Alex',
age: 10,
friends: ['vanya']
};

const users: IObj[]=[]//массив объектов вида интерфэйс

users.push({name: 'Petr', age: 10})

enum Roles {///перечисление
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


const arrayOfNumbers:number[]=[1,1,2,2,2,3,3,3,4,4,5,5,5];

const numbrs = (value:number[])=>{return value.reduce((acc:Record<string,number>, element:number) => {//Record
    if (acc[element]) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {})}

  interface Iuser {
    name: string,
    age: number,
    nick?: string
    getPass?:()=>string//типизация методов
    }