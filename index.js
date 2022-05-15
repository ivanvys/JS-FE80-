
/* Первое задание*/

const sayHello=(name)=> {
if (name.toLowerCase()==="mark") {
return 'Hi, '+name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()+"!"};
return 'Hello, '+name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()+"!";
};

/*Второе задание*/

const triangle=(m,n)=> {
return Math.sqrt((m*m)+(n*n));
};

/*Третье задание*/

const lowerNumber = (a,b)=> {
if (a>b) {
return b};
return a;
};

/*Четвертое задание*/

const isEven =(n)=> {
if (n%2===0) {
return true};
return false
};

/*Пятое задание*/

const deleteChars=(str)=>{
return str.slice(1,-1);
};

/*Шестое задание*/
const SomeFn=(value)=> {
return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
};

/*Седьмое задание*/
const checkLetterCase=(value)=> {
if (value.charAt(0).toUpperCase()==value.charAt(0)) {
return 'Оууу май, большая буква!'};
return 'Нет уж, маленькие буквы - скучно'
};

/*Восьмое задание*/

const concatenate =(a,b)=> {
return a+" "+b;
}

/*Девятое задание*/

const checkStringLength =(a,b)=> {
if (a.length>=b) {
return "String is too long!"};
return a;
}