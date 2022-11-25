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