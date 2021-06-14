//Task 1
function calc1(a, b, c){
    d=(a-b)/c;
    console.log(d);
};
calc1(40, 2, 6);
console.log(' ');

//Task 2
function calc2(x){
    return `${x**3}  ${x**2}`;
};

let y=calc2(3);
console.log(y);
console.log(' ');

//Task 3
let a=26,
    b=64;

function min(a,b){
   if (a>b){
       return b;
   }else{
       return a;
   }
};

function max(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
};

let Min=min(a,b),
    Max=max(a,b);

console.log(`Меньшее число ${Min}\nБольшее число ${Max}`);
console.log(' ');

//Task 4
function getArray(){
    let array=[];   

    for(; ;){
        let i=prompt('Введите число');
        if (i===" ") break;

        let j=+i;
        if(!isNaN(j)) array.push(j);
    };
    return array; 
};

function showArray(){
   let Array = getArray();    
   console.log(Array);
};

showArray();
console.log(' ');


//Task 5
function isEven(integer){
    if(integer % 2==0){
        return true;
    }else{
        return false;
    };
};

let c=isEven(6);
console.log(c);
console.log(' ');

//Task 6

function returnArray(array){
    let arrayEven=[];

    for(let i=0; i<=array.length-1; i++){

        if(isEven(array[i])===false)continue;
        arrayEven.push(array[i]);
    }; 
    return arrayEven;               
}
let ArrayEven = returnArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(ArrayEven);
console.log(' ');

//Task 7
let print = function(hight){
    for(let i=1; i<=hight; i++){

        for(let j=0; j<i; j++){
            
            if(arguments.length > 1 && arguments[1]!= ' '){

                document.write(arguments[1]);  
            }else{
                document.write(i);
            };
        };
        document.write('<br>');
    };
};

print(9, '*');
document.write('<br>'); 
document.write('<hr>'); 
document.write('<br>');

//Task 8
let printTriangle = function(hight){
    for(let i=1; i<=hight; i++){

        for(let k=1; k<=hight-i; k++){
            document.write('&ensp;'); 
        }
        for(j=0; j< i*2-1; j++){
            document.write('*')
        };
        document.write('<br>');
    };
};
printTriangle(9);
document.write('<br>'); 
document.write('<hr>'); 
document.write('<br>');

let printTriangle1 = function(hight){
    for(let i=hight; i>=0; i--){

       for(let k=1; k<=hight-i; k++){
            document.write('&ensp;'); 
        };
        for(j=0; j< i*2-1; j++){
            document.write('*')
        };
        document.write('<br>');
        
    };
};
printTriangle1(9);
console.log(' ');

//Task 9
function createArray(array){

    let array1=[0,1];

    for(let i=0; array1[i]<1000; i++){

        let c=array1[i]+array1[i+1];
        if (c >= 1000) break;

        array1.push(c);
    }
    return array1;
};
let array1 = createArray();
console.log(`Числа Фибоначи  ${array1}`);
console.log(' ');


//Task 11
let printArray=function (array){
    console.log(array[i]);
    i++;
    if( i < array.length)printArray(array);
};
var i=0;
printArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

