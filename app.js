document.write("<h1>For Loop Assignment By Uzair Malik  </h1><hr>");

for(var i=1 ; i<=5 ; i++){
    document.write("<h2>Hello<h2>")
};

document.write("<hr>");

for(var i=1 ; i<=10 ; i++){
    document.write("<h2>" + i + "</h2>")
};

document.write("<hr>");

var input = prompt("Enter a Number To Print its Multiplication table")

var input1 = prompt("Enter Length Of Multiplication table")

document.write("<h2>Multiplication Table Of " + input + "</h2>")

document.write("<h2>Lenght " + input1 + "</h2><br>")

for(var i=0 ; i<=input1 ; i++){
    document.write("<h2>" + input + " x " + i + " = " + i*input + "</h2>")
}

document.write("<hr>");

var mobile = ["Nokia" , "Sumsung" , "Apple" , "Sony" , "Huawei"];

for (var i=0 ; i<mobile.length ; i++){
    document.write("<h2>" + mobile[i] + "</h2>")
};

document.write("<hr>");

var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawbery"]

for (var i=0 ; i<fruits.length ; i++){
    document.write("<h2>" + fruits[i] + "</h2>")
};

document.write("<br>");

for (var j=0 ; j<mobile.length ; j++){
    document.write("<h2>Element At Index" + j +" is " +fruits[j]+ "</h2>")
};

document.write("<hr>");

var input2 = prompt("Enter Number Of Items")

var array = []

document.write("<h2>Number of item: " + input2 + "<br>Items:</h2><br>")

for (var i=0 ; i<input2 ; i++){
    var input3 = prompt("Enter Value For Index " + i)
    array.push(input3)
    document.write("<h2>" + array[i] + "</h2>")
}

document.write("<hr>");

document.write("<h2> Counting: </h2>");

var number1 = []

for (var i=1 ; i<=15 ; i++){
    number1.push(i)
}

document.write("<h2>" + number1 +"</h2>")

var number2 = []

for(var i=10 ; i>=1 ; i--){
     number2.push(i)
 }
 
document.write("<h2> Reverse Counting: </h2>");

document.write("<h2>" + number2 +"</h2>")

var number3 = []

for (var i=1 ; i<=20 ; i++){
    if(i%2 == 0){
        number3.push(i)
    }
}

document.write("<h2> Even Counting: </h2>");

document.write("<h2>" + number3 +"</h2>")

var number4 = []

for (var i=1 ; i<=20 ; i++){
    if(i%2 != 0){
        number4.push(i)
    }
}

document.write("<h2> Odd Counting: </h2>");

document.write("<h2>" + number4 +"</h2>")

var number5 = []

 for (var i=1 ; i<=20 ; i++){
     if(i%2 == 0){
         number5.push(i+"k")
     }
 }

document.write("<h2> Serise: </h2>");

document.write("<h2>" + number5 +"</h2><hr>")


let array1 = [24, 53, 78, 91, 12]
let max= array1[0]
for(let i=0;i<array1.length;i++){
    if(array1[i]>max){
    max= array1[i]
    }
}
let array2= [24, 53, 78, 91, 12]
let min=array2[0]
for(let i = 0 ;i<array2.length;i++){
    if(min>array2[i]){
    min= array2[i]
    }
}

document.write('<h2>array item ' + array1 + '</h2>')

document.write('<h2>The largest element in array is ' + max + '</h2>')

document.write('<h2>The Smallest value is ' + min +'</h2><hr>')

 var multiples = []

 for (var i=5 ; i<=100 ; i++){
    if(i%5==0){
        multiples.push(i)
    }
}
document.write('<h2>' + multiples + '</h2><hr>')

var students = ["Ali", "Sami", "Taha", "Inam"];

var scores = [58, 73, 89, 90];

document.write('<h2><table border="2px"><tr><td>Students</td><td>Scores</td><tr>')

for (var i=0 ; i<students.length ; i++){
        document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>")
}

document.write("</table></h2><hr>")

var food = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var userInput = prompt("Enter a snack :")

var flag = false;

for(var i=0;i<food.length; i++){

    if(userInput === food[i]){
       flag = true;
       userInput = food[i];
       var index = i;
    }
  
}

if(flag==true){

    document.write('<h2>' + userInput + " is avaible at insdex " + index + " in our bakery</h2>" )

}

else{

    document.write('<h2>' + userInput + " is not avaible at in our bakery</h2>" )

}

document.write("<hr>")

var list = [12, 45, 3, 22, 34, 50];
var input4 = +prompt("Enter End number ")
for (i=0;i<list.length;i++)
{
    if(input4 === i)
    break;
   document.write('<h2>' + list[i] + '</h2>') 
}

document.write("<hr>")

var mixarray = [ [1,2,3] , [4,5,6] , [7,8,9] ]

for(var i=0 ; i<mixarray.length ; i++){

        document.write('<h2>' + mixarray[i] + '</h2>')
    
}

document.write("<hr>")

var number7 = +prompt("Enter a Number")

var number8 = []

for(i=number7 ; i>=0 ; i-=0.5){
    number8.push(i)
}

document.write("<h2>" + number8 + "</h2><hr>")

for(i=0 ; i<=20 ; i++){
    if(i%2==0){
        document.write('<h2>' + i + " is even </h2>")
    }
    else if(i%2!=0){
        document.write('<h2>' + i + " is odd </h2>")
    }
}

document.write("<hr>")

document.write("<h2>The Product Of The Odd Integers Fromm 1 to 7  is "  + 1*3*5*7 + " </h2><hr>")

var rows = 5

var rows1 = 7

var col = 5

for(var i=1; i<=rows1; i++){
    for(var j=7; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(var i=1;i<=rows; i++){
    for(var j=1; j<=col; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")

for(var i=1; i<=rows; i++){
    for(var j=1; j<=i; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(var i=1; i<=rows; i++){
    for(var j=5; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}