//function Hello() {
   // document.write("Hello Everyone This is Me ... Kainat shabbir Husaain");
//}

////function world(){
//document.write("physical properties of protien ... !!!");
//}
//Hello();
//document.write("<br>");
//document.write("<br>");
///document.write("<br>");
//world();
//document.write("<br>");
//document.write("<br>");
//document.write("<br>");
//Hello();
//document.write("<br>");
//document.write("<br>");
//document.write("<br>");
//world();
//document.write("<br>");
//document.write("<br>");
//document.write("<br>");
//Hello();
//document.write("<br>");
//document.write("<br>");
//document.write("<br>");
//world();
//document.write("<br>");
//document.write("<br>");
//document.write("<br>");


 ///True Function///

//1. What will be the output of the following code: 
// function foo() {
//    console.log("Hello");
//  }
 
//  foo();

//2. What will be the output of the following code:  
//  function foo() {
//    return "Hello";
//  }
 
//  console.log(foo());

 //3. What will be the output of the following code: 
//  function foo() {
//    console.log("Hello");
//    return "World";
//  }
 
//  console.log(foo());

 // What will be the output of the following code: 
//  function foo() {
//    return;
//    console.log("Hello");
//  }
 
//  console.log(foo());

 // What will be the output of the following code: 
//  function foo() {
//    if (true) {
//      return "Hello";
//    } else {
//      console.log("World");
//    }
//  }
 
//  console.log(foo());


//false functions//

//1. What will be the output of the following code: 
// function foo() {
//    console.log("Hello");
//  }
//  foo();

//2. What will be the output of the following code:  
//  function foo() {
//    return "Hello";
//  }
 
//  console.log(foo());

 //3. What will be the output of the following code: 
//  function foo() {
//    console.log("Hello");
//    return "World";
//  }
 
//  console.log(foo());

 // What will be the output of the following code: 
//  function foo() {
//    return;
//    console.log("Hello");
//  }
 
//  console.log(foo());

 // What will be the output of the following code: 
//  function foo() {
//    if (false) {
//      return "Hello";
//    } else {
//      console.log("World");
//    }
//  }
 
//  console.log(foo());
 


   //Define a regular expression that matches vowels (both uppercase and lowercase) for adding variables//
   function removeVowels(str) {
   let result = str.replace(/[aeiouAEIOU]/, '');
    return result;
    console.log(result);
    
  }
 //Write a function that takes a string as input and returns the string with all vowels removed.//
  let inputstring = "hello world";
  let varstring = removeVowels(inputstring);
  console.log(varstring); 