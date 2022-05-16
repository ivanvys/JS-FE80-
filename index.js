
/* Первое задание*/
const sayHello=(name)=> {
const name2=name.charAt(0).toUpperCase();
const name3=name.slice(1).toLowerCase()+"!";
if (name.toLowerCase()==="mark") {
return 'Hi, '+name2+name3};
return 'Hello, '+name2+name3;
};

/*Второе задание*/
const triangle=(m,n)=> {
return Math.sqrt((m*m)+(n*n));
};

/*Третье задание*/
const lowerNumber = (a,b)=> {
return Math.min (a,b)
};

/*Четвертое задание*/
const isEven =(n)=> {
return n%2===0
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