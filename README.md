<h2 align="center">  МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ» </h2>
<div align="center">
<h3>Институт естественных наук и техносферной безопасности
<br>
Кафедра информатики
<br>
Половников Владислав Олегович</h3>

<br>
<h3>Лабораторная работа №5
<br>
“Введение в вэб-разработку”
<br>
01.03.02 Прикладная математика и информатика</h3>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h3 align="right">Научный руководитель
<br>
Соболев Евгений Игоревич
</h3>

<h3 align="center">Южно-Сахалинск
<br>
2022г.
</h3>
<hr>
</div>
<p>
HTML (HyperText Markup Language) - язык разметки гипертекста - предназначен для создания Web-страниц.
Под гипертекстом в этом случае понимается текст, связанный с другими текстами указателями-ссылками.
HTML представляет собой достаточно простой набор кодов, которые описывают структуру документа. HTML позволяет выделить в тексте отдельные логические части (заголовки, абзацы, списки и т.д.), поместить на Web-страницу подготовленную фотографию или картинку, организовать на странице ссылки для связи с другими документами.
HTML не задает конкретные и точные атрибуты форматирования документа. Конкретный вид документа окончательно определяет только программа-браузер на компьютере пользователя Интернета. 
HTML также не является языком программирования, но web-страницы могут включать в себя встроенные программы-скрипты на языкахJavascript и Visual Basic Script и программы-апплеты на языке Java.
</p>

<h3 align="center">Задание</h3>

Задачи:
1.	Напишите код, выполнив задание из каждого пункта отдельной строкой:
-	Создайте пустой объект user.
-	Добавьте свойство name со значением John.
-	Добавьте свойство surname со значением Smith.
-	Измените значение свойства name на Pete.
-	Удалите свойство name из объекта.

2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";

4. У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

6. Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

7. Давайте произведём 5 операций с массивом.
·	Создайте массив styles с элементами «Джаз» и «Блюз».
·	Добавьте «Рок-н-ролл» в конец.
·	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
·	Удалите первый элемент массива и покажите его.
·	Вставьте «Рэп» и «Регги» в начало массива.
·	Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл

8. Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?

9. Напишите функцию sumInput(), которая:
·	Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
·	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
·	Подсчитывает и возвращает сумму элементов массива.


  10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

11. Удалить в массиве все числа, которые повторяются более двух раз. 

12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент. Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума, и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.

13. Найдите сумму отрицательных элементов массива.

14. Найдите произведение элементов массива с нечетными номерами.

15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.

16. Найдите наибольший элемент массива.

17. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент. 

18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.

19. Найдите сумму номеров минимального и максимального элементов. 

 20. Найдите минимальный по модулю элемент массива.

21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

Задачи CodeWars:
1.	https://www.codewars.com/kata/javascript-mathematician
2.	https://www.codewars.com/kata/javascript-from-the-inside-number-1-map
3.	https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter
4.	https://www.codewars.com/kata/power-bind
5.	https://www.codewars.com/kata/closures-and-scopes
6.	https://www.codewars.com/kata/can-you-keep-a-secret

<h2 align="center">Решение</h2>

<h3>Файл index.html</h3>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js"></script>
</head>
<body>
    
</body>
</html>
```

<h3>Файл script.js</h3>

```javascript
/* Задание 1*/
console.log("Задание 1");
var user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);
console.log("-------------------");

/* Задание 2*/
console.log("Задание 2");
function isEmpty(obj){
    if(Object.keys(obj).length) return false;
    else return true;
}
let schedule = {};
console.log(isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule) ); // false

console.log("-------------------");

/* Задание 3*/
console.log("Задание 3");
const user3 = {
    name: "John"
  };
  user3.name = "Pete";
  console.log(user3.name);
console.log("-------------------");

/* Задание 4*/
console.log("Задание 4");
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  var sum = 0;
for(key in salaries){
    sum += salaries[key];
}
console.log(sum);
console.log("-------------------");

/* Задание 5*/
console.log("Задание 5");
function multiplyNumeric(obj){
    for(key in obj){
        if(typeof obj[key] === 'number') obj[key] *=2;
    }
}
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };  
multiplyNumeric(menu);
console.log(menu);
console.log("-------------------");

/* Задание 6*/
console.log("Задание 6");
var fruits = ["Яблоки", "Груша", "Апельсин"];

var shoppingCart = fruits;
shoppingCart.push("Банан");
console.log( fruits.length ); 

console.log("-------------------");

/* Задание 7*/
console.log("Задание 7");
var styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor(styles.length/2)] = "Классика";
console.log(styles);
styles.splice(0,1);
console.log(styles);
styles.splice(0,0,"Рэп","Регги");
console.log(styles);

console.log("-------------------");

/* Задание 8*/
console.log("Задание 8");
let arr = ["a", "b"];
arr.push(function() {
  console.log( this );
})
arr[2](); 

console.log("-------------------");

/* Задание 9*/
console.log("Задание 9");
function sumInput(){
    var mas = [];
    var input;
    while(true){
        input = prompt("Введите число");
        if(input == "null" || input == null || input == "" || typeof Number(input) != 'number') break;
        mas.push(input);
        
    }
    var sum = 0;
    for(var i =0; i<mas.length;i++)
    {
        sum += Number(mas[i]);
    }
    console.log(sum);
}
/////////////////////////////sumInput();
console.log("-------------------");

/* Задание 10*/
console.log("Задание 10");
function getMaxSubSum(arr){
    var sum = 0;
    var maxsum = 0;
    console.log(arr);
    for(var i =0; i<arr.length;i++ ){
        if(arr[i]<0) {
            if(sum > maxsum)maxsum = sum;
            sum = 0;
        }
        else{
            sum += arr[i];
        }
    }
    if(sum > maxsum) maxsum = sum;
    return maxsum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])) ;
console.log(getMaxSubSum([2, -1, 2, 3, -9]) );
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) ;
console.log(getMaxSubSum([-2, -1, 1, 2])) ;
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

console.log("-------------------");

/* Задание 11*/
console.log("Задание 11");
function deleteRepeat(arr){
    arr.sort(function(a,b){
        return a-b;
    })
    for(var i =0; i<arr.length-1;i++){
        if(arr[i] == arr[i+1]) arr.splice(i,1);
    }
    return arr;
}
console.log(deleteRepeat([1,1,2,2,3,3,4,5,6]));
console.log("-------------------");

/* Задание 12*/
console.log("Задание 12");
function replace(arr){
    console.log(arr);
    var maxindex = 0;
    for(var i =0 ;i<arr.length;i++){
        if(arr[i] > arr[maxindex] && arr[i]%2 == 1) maxindex = i;
    }
    var tempindex = maxindex+1;
    var countright = arr.length-maxindex-1;
    var arrcopy = [];
    for(var i =0; i<arr.length;i++){
        arrcopy[i] = arr[i];
    }

    var indexrightelements = [];
    for(var i =maxindex+1;i<arr.length;i++)
    {
        indexrightelements.push(i);
    }

    for(var i =0; i<3;i++){

        for(var j = 0;j<indexrightelements.length;j++)
        {
            var temp = arrcopy[indexrightelements[j]-1];
            arrcopy[indexrightelements[j]-1] = arrcopy[indexrightelements[j]];
            arrcopy[indexrightelements[j]] = temp;
            indexrightelements[j] -= 1; 
        }
        
    }
    console.log(arrcopy);
    var indexleftelements = [];
    for(var i =0;i<maxindex;i++)
    {
        for(var j = 0; j<arrcopy.length;j++)
        {
            if(j == maxindex-2) j +=indexrightelements.length;
            if(arr[i] == arrcopy[j]){
                indexleftelements.push(j);
                break;
            }
        }
    }
    indexleftelements[indexleftelements.length-1] = indexleftelements[indexleftelements.length-2]+1;

    for(var j = indexleftelements.length-1;j>=0;j--)
    {
        var temp = arrcopy[indexleftelements[j]+1];
        arrcopy[indexleftelements[j]+1] = arrcopy[indexleftelements[j]];
        arrcopy[indexleftelements[j]] = temp;
        indexleftelements[j] += 1; 
    }

    console.log(arrcopy);
}
console.log(replace([5,2,7,6,2,9,8,3,6,2]));
console.log("-------------------");

/* Задание 13*/
console.log("Задание 13");
function z13(arr){
    var sum = 0;
    for(var i =0 ;i<arr.length;i++)
    {
        if(arr[i]<0) sum += arr[i];
    }
    return sum;
}
console.log(z13([-1,-2,-3,-4,4,2,-6,-1]));
console.log("-------------------");

/* Задание 14*/
console.log("Задание 14");
function z14(arr){
    var proiz = 1;
    for(var i =0; i<arr.length;i++){
        if(i%2 == 1) proiz *= arr[i];
    }
    return proiz;
}
console.log(z14([1,2,3,4,5,6,7]));1
console.log("-------------------");

/* Задание 15*/
console.log("Задание 15");
function z15(arr){
    var sum = 0;
    var firstzero = false;
    var secondzero = false;
    for(var i =0; i<arr.length;i++)
    {
        if(firstzero == false){
            if(arr[i] == 0) {
                firstzero = true;
                continue;
            }
        }
        if(firstzero == true){
            sum += arr[i];
            if(arr[i] == 0) 
            {
                secondzero = true;
                break;
            }
        }
        
    }
    if(secondzero == false) sum = 0;
    return sum;
}
console.log(z15([1,2,0,3,4,5,6,0,223]));
console.log("-------------------");

/* Задание 16*/
console.log("Задание 16");
function z16(arr){
    var max = 0;
    for(var i =0 ; i<arr.length;i++)
    {
        if(arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(z16([1,2,3,4,5,6,9,8,7]));
console.log("-------------------");

/* Задание 17*/
console.log("Задание 17");
function z17(arr){
    var min = 3232323223232;
    for(var i =0 ;i<arr.length;i++)
    {
        if(arr[i]%2 == 0 && arr[i] < min) min = arr[i];
    }
    if(min == 3232323223232) min = arr[0];
    return min;
}
console.log(z17([1,3,5,2,4,11]));
console.log("-------------------");

/* Задание 18*/
console.log("Задание 18");
function z18(arr){
    for(var i =1 ;i<arr.length;i++)
    {
        if(arr[i] == 0)
        {
            arr.splice(i,1);
            arr.splice(0,0,0);
        }
        
    }
    return arr;
}
console.log(z18([1,2,3,0,0,4,6,4,2]));
console.log("-------------------");

/* Задание 19*/
console.log("Задание 19");
function z19(arr)
{
    var max = 0;
    var min = 0;
    for(var i = 0; i<arr.length;i++)
    {
        if(arr[max] < arr[i]) max = i;
        if(arr[min] > arr[i]) min = i;
    }
    return max+min;
}
console.log(z19([8,2,3,4,1,5,9,6,7]));
console.log("-------------------");

/* Задание 20*/
console.log("Задание 20");
function z20(arr){
    var min = arr[0];
    for(var i =0; i<arr.length;i++)
    {
        if(Math.abs(arr[i]) < Math.abs(min)) min = arr[i];
    }
    return min;
}
console.log(z20([-4,2,2,6,-1,3,-9,4,-21,20]));
console.log("-------------------");

/* Задание 21*/
console.log("Задание 21");
var mas = [];
for(var i = 0; i<10;i++)
{
    mas[i] = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
}
var leftpart = [];
var rightpart = [];
for(var i = 0; i<5;i++)
{
    leftpart[i] = mas[i];
    rightpart[i] = mas[i+5];
}
console.log(mas);
console.log(leftpart.reverse() + ','+ rightpart.reverse());

console.log("-------------------");

/* Задание 22*/
console.log("Задание 22");
var mas = [];
for(var i = 0; i<12;i++)
{
    mas[i] = Math.floor(Math.random() * (12 - -12 + 1)) + -12;
}
console.log(mas);
for(i=0;i<4;i++) 
{
 mas.unshift(mas.pop());
}
console.log(mas);
console.log("-------------------");
```

<h3>Файл server.js</h3>

```javascript
const express = require('express')
const app = express()
const port = 3000;

app.use(express.static("."));

app.get((req, res) => {
    res.sendFile(".\\index.html")
 })
 
 app.listen(port, () => console.info(`Server running on ${port}`))
```

https://www.codewars.com/kata/javascript-mathematician

![img1](/image/1.png)

https://www.codewars.com/kata/javascript-from-the-inside-number-1-map

![img2](/image/2.png)

https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter

![img3](/image/3.png)

https://www.codewars.com/kata/power-bind

![img4](/image/4.png)

https://www.codewars.com/kata/closures-and-scopes

![img5](/image/5.png)

https://www.codewars.com/kata/can-you-keep-a-secret

![img6](/image/6.png)

<h4>Вывод: Укрепил знания в Node Js, JavaScript и вспомнил Markdown.</h4>

