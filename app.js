// Question1

// var correctPassword = "hussain2001"
// var password = prompt("Enter Password");
 
// if (!password )
// {
//     alert ("plesae enter password")
// }

// else if (password === correctPassword )
// {
//     alert ("correct Password")
// }

// else {
//     alert ("please Enter Correct Paasword")
// }

// Question2

// var hour = 13;
// var greeting = +prompt("")
// if (hour < greeting) 
// { 
// alert ("Good day"); 
// }
// else {
// alert ("Good evening"); 
// }

// Question3
// part a

// var studentNames = []
// studentNames.push = ("Hussain")
// console.log (studentNames)


// part b

// var studentNames = []
// studentNames["Hammad"]=true 
// studentNames["Ahad"]=true
// console.log(studentNames)

// part c 

// var fruit = ["Apple", "Banana", "Graphs","Mango"];
// console.log (fruit [1])
// console.log (fruit [3])


// part d 

// var number = [1,2,3,4,5,6];

// console.log (number [4])
// console.log (number [0])
// part e
// var boolean = [true,false,true,false,true,false]

// console.log (boolean [2])
// console.log (boolean[4])

// part f

// var mixedArray =[1,2,3, "four","five",true,6,false,"seven"]

// console.log (mixedArray[1])
// console.log (mixedArray[4])
// console.log (mixedArray[7])

// part g 

// var qulification = [
//     "SSC (Secondary School Certificate)",
//     "HSC (Higher Secondary School Certificate)",
//     "BCS (Bachelor of Computer Science)",
//     "BS (Bachelor of Science)",
//     "BCOM (Bachelor of Commerce)", 
//     "MS (Master of Science)",
//     "M. Phil. (Master of Philosophy)",
//     "PhD (Doctor of Philosophy)"
// ]
// console.log (qulification [0])
// console.log (qulification[5])

// Question 4
// // part a

// var color = ["Red","Blue" , "Green", "Purple", "Pink"];
// document.write ("color name :" + color + "<br>")

// var addColor = prompt ("Enter a color you'd like to add to the beginning:")

// if (addColor)
// {
//     color.unshift(addColor);
//     document.write ("Updated Color Names start :"  + color + "<br>" )
// }
// else {
//     document.write("<p>No color added. Original color names: " + color + "</p>");
// }

// part b



// userColor = prompt ("Enter a color you'd like to add to the beginning:")

// if (userColor)
// {
//     color.push(userColor)
//     document.write ("Updated color names end:"+ color + "<br>")
// }
// else {
//     document.write ("No color added. Original color names:" + color + "<br>")
// }

// part c


// if (color)
// {
//     color.unshift("White", "Black")
//     document.write ("Updated beginnings color names :"+ color + "<br>")
// }

// part d


// if (color)
// {
//     color.shift (color)
//     document.write ("Delete first color names :"+ color + "<br>")
// }

// part e 


// if (color)
// {
//     color.pop(color)
//     document.write ("Delete end color names :"+ color + "<br>")
// }

// part f

// var userIndex = prompt ("Enter the index where you want to add a color (0 to " + (color.length -1) + " " + ""  )

// var userColor = prompt ("Enter the color name you'd like to add:")

// if (userColor && userIndex <= color.length )
// {
//     color.splice (userIndex , 0 , userColor)

//          document.write ("Updated Color Names add :"  + color + "<br>" )
// }

// else {
//     document.write("<p>No color added. Original color names: " + color + "</p>");
// }



// part g 

// var userIndex = prompt ("Enter the index where you want to add acolor (0 to " + (color.length -1 ) + " " + "" )

// var userDelete = prompt ("Enter the color name where you'like to delete")

// if (userIndex && userIndex <= 0 && userIndex < color.length && userDelete && userDelete>0 )

// {
//     color.splice (userIndex,userDelete)
//     document.write ("Updated Color Names add :"  + color + "<br>" )
//  }

//  else {
//          document.write("<p>No color added. Original color names: " + color + "</p>");
//      }

// Question 5 

// var studentScore = [20]

// for ( var i = 1 ; i<=studentScore ; i++ )
// {
//     console.log (i,studentScore )
// }


// Question 6

// var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

// document.write ("<form>")
// document.write("<select>")

// document.write("<option> choose a form manufacturer </option>")

// for (var manufacturer of mobile)
// {
//     document.write ("<option>" + manufacturer + "</option>")
// }
// document.write ("</option>")

// document.write ("</form>")


// Question 7 
 

// var number = +prompt("Enter an intiger")
// var length = +prompt ("Enter an lenght")


// for (var i = 1 ; i<=length; i++)

// {
//     var result = number*i
//     document.write (number + "x" + i + "=" + result + "<br>" )
// }

// Question 8

// part a 

// for (var i = 1 ; i<=15 ; i++)
// {
//     console.log (i)
// }

// part b 

// for (var i=10 ; i>=1 ; i--)
// {
//     console.log (i)i
// }

// part c 

// for (i=0 ;i<=20 ; i+=2)
// {
//     console.log (i)
// }

// part d 

// for (i=1; i<=19 ; i+=2)
// {
//     console.log (i)
// }

// part e 

// for (i=0; i<=20 ; i+=2)
// {
//     console.log (i+"k" )
// }
 

// Question 9

// var searching = prompt ("Enter name ")
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]

// var index = bakery.indexOf (searching)

// if (index=== -1)
// {
//     alert(searching + " is not found in the list.");
// }

// else {
//     alert(searching + " is found in the list at position " + (index + 1) + ".");
// }

// Question 10

// var user = prompt ("enter a string");
// var titleCase = user.toLowerCase().split ('').map(function (word){
// return word.charAt(0).toUpperCase()+word.slice(1);});
// document.write(titleCase);

// Question 11

// var user = prompt("enter any word to change a uppercase")
// var uppercase = user.toUpperCase().split('').map(function (word){
// return word.charAt(0).toUpperCase()+word .slice(1);});
// document.write(uppercase)

// Question 12

// var numberValue = +("472");
// document.write ("value:" + numberValue + "<br>" )
// document.write ("Type:"+ typeof (numberValue))

