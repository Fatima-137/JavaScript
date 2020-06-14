// ............Chapter # 1............ //

// ............Task # 1............ //
alert("Well Come!");
// ............Task # 2............ //
alert("Error! Please enter a valid password.");
// ............Task # 3............ //
alert("Welcome to JS Land... \nHappy Coding!");
// ............Task # 4............ //
alert("Welcome to JS Land...");
alert("Happy Coding!");
// ............Task # 5............ //
alert("Hello... I can run JS through my web browser's console");

// ............Task # 6............ //
// This task is completed

// ............Task # 7............ //
// This task is completed

// ............End Chapter # 1............ //




// ............Chapter # 2............ //

// ............Task # 1............ //
var username;
// ............Task # 2............ //
var myName = "Syeda Paras";
// ............Task # 3............ //
var message;
message = "Hello World";
alert(message);
// ............Task # 4............ //
var studentName = "Jhone Doe";
alert(studentName);
var studentAge = "15 years old";
alert(studentAge);
var studentCourse = "Certified Mobile Application Development";
alert(studentCourse);
// ............Task # 5............ //
alert("PIZZA \nPIZZ \nPIZ \nPI \nP");
// ............Task # 6............ //
var email;
email = "example@example.com";
alert("My email address is " +email);
// ............Task # 7............ //
var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " +book);
// ............Task # 8............ /
document.write("Yah! I can write HTML content through JavaScript");
// ............Task # 9............ //
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
// ............End Chapter # 2............ //

 


// ............Chapter # 3............ //

// ............Task # 1............ //
var age;
age = 15;
alert("I am " +age+ " years old");
// ............Task # 2............ //
var track;
track = 20;
alert("You have visited this site " +track+ " times");
// ............Task # 3............ //
var birthYear;
birthYear = 1990;
alert("My birth year is " +birthYear+ "\nData type of my declared variable is number");
// ............Task # 4............ //
var visitorName;
visitorName = "John Doe";
var productTitle;
productTitle = "5 T-shirt(s)";
var quantity;
quantity = "XYZ";
document.write(visitorName+ " ordered " +productTitle+ " on " +quantity+ " Clothing store"); 
// ............End Chapter # 3............ //




// ............Chapter # 4............ //

// ............Task # 1............ //
var a, b, c;
// ............Task # 2............ //

// Legal variables 
var a1, _a2, _a3_, declare_var, declareVar;

/* Inlegal variables
 var 1a, ?a, @a, .a, %a; */

// ............Task # 3............ //
document.write("<h1>Rules for naming JS variables</h1><br><br>");
var $my_1stVariable = ",";
var $my_2ndVariable = "numbers";
var $my_3rdVariable = "$";
var $my_4thVariable = "_";
document.write("Variable names can only contain " +$my_1stVariable,$my_2ndVariable+ "," +$my_3rdVariable+ " and " +$my_4thVariable+ " . For example : $my_1stVariable");
var $name = "letter";
var _name = "$";
var name = "_";
document.write("Variables must begin with a " +$name+ ", " +_name+ " or " +name+ " . For example : $name, _name or name");
var Case = "sensitive";
document.write("Variable names are case " +Case);
var JS = "keywords";
document.write("Variable names should not be JS " +JS);
// ............End Chapter # 4............ //




// ............Chapter # 5............ //

// ............Task # 1............ //
var num1 = 3;
var num2 = 5;
var sum = num1+num2;
document.write("Sum of " +num1+ " and " +num2+ " is " +sum); 
// ............Task # 2............ //

// Subtraction
var num1 = 3;
var num2 = 5;
var subtraction = num1-num2;
document.write("Subtraction of " +num1+ " and " +num2+ " is " +subtraction);

// Multiplication
var num1 = 3;
var num2 = 5;
var multiplication = num1*num2;
document.write("Multiplication of " +num1+ " and " +num2+ " is " +multiplication);

// Division
var num1 = 3;
var num2 = 5;
var division = num1/num2;
document.write("Division of " +num1+ " and " +num2+ " is " +division);

// Modulus
var num1 = 3;
var num2 = 5;
var modulus = num1%num2;
document.write("Modulus of " +num1+ " and " +num2+ " is " +modulus);

// ............Task # 3............ //
var num;
document.write("Value after variable declaration is: " +num);
num = 5;
document.write("<br> Initial value: " +num);
num = ++num;
document.write("<br> Value after increment is: " +num);
num = num+7;
document.write("<br> Value after addition is: " +num);
num = --num;
document.write("<br> Value after decrement is: " +num);
num = num%3;
document.write("<br> The remainder is : " +num);

// ............Task # 4............ //
var ticketPrice = 600;
var ticketBuy = 5;
var totalTicketPrice = ticketPrice*ticketBuy;
document.write("Total cost of buy " +ticketBuy+ " tickets to movie is " +totalTicketPrice+ "PKR");

// ............Task # 5............ //
var multiplicationTable = prompt("Enter number");
document.write("Table of  " +multiplicationTable+ "<br>");
var i = 1;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
i++;
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
// ............OR............ //
var multiplicationTable = prompt("Enter the number");
document.write("Table of  " +multiplicationTable+ "<br>");
for (var i = 1; i <= 10; i++){
document.write(multiplicationTable+ " x " +i+ " = " +multiplicationTable*i+ "<br>");
}

// ............Task # 6............ //
var Celsius = 25;
var CelsiusIntoFahrenheit = (Celsius * 9/5) + 32;
document.write(Celsius+ "°C is " +CelsiusIntoFahrenheit+ "°F");
var Fahrenheit = 70;
var FahrenheitIntoCelsius = (Fahrenheit - 32) * 5/9;
document.write(Fahrenheit+ "°F is " +FahrenheitIntoCelsius+ "°C");

// ............Task # 7............ //
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItems1 = 3;
var quantityItems2 = 7;
var shippingCharges = 100;
var totalCost = priceItem1*quantityItems1+priceItem2*quantityItems2+100;
document.write("<h1>Shopping Cart</h1><br><br><br>");
document.write("Price of item 1 is " +priceItem1+ "<br>");
document.write("Quantity of item 1 is " +quantityItems1+ "<br>");
document.write("Price of item 2 is " +priceItem2+ "<br>");
document.write("Quantity of item 2 is " +quantityItems2+ "<br>");
document.write("Shipping Charges " +shippingCharges+ "<br><br>");
document.write("Total cost of your order is " +totalCost);

// ............Task # 8............ //
var totalMarks = 980;
var marksObtained = 804;
var percentage = marksObtained/totalMarks*100;
document.write("<h1>Marks Sheet</h1><br><br>")
document.write("Total marks: " +totalMarks+ "<br>");
document.write("Marks obtained: " +marksObtained+ "<br>");
document.write("Percentage: " +percentage+ "%");

// ............Task # 9............ //
var usDollar = 10;
var usDollarIntoPakistan = usDollar*104.80;
var saudiRiyal = 25;
var saudiRiyalIntoPakistan = saudiRiyal*28;
var totalCurrency = usDollarIntoPakistan+saudiRiyalIntoPakistan;
document.write("<h1>Currency in PKR</h1><br><br>");
document.write("Total Currency in PKR: " +totalCurrency);

// ............Task # 10............ //
var arithmeticSequence = 12+5*10/2;

// ............Task # 11............ //
var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1><br><br>");
document.write("Current Year: " +currentYear+ "<br>");
document.write("Birth Year: " +birthYear+ "<br>");
document.write("Your age is: " +age);

// ............Task # 12............ //
var radius = 20;
var circumference = 2*3.142*radius;
var area = 3.142*radius*radius;
document.write("<h1>The Geometrizer</h1><br><br>");
document.write("Radius of a circle: " +radius+ "<br>");
document.write("The circumference is: " +circumference+ "<br>");
document.write("The area is: " +area);

// ............Task # 13............ //
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;
var totalDaysInYear = 365*15;
var totalNeed = amountPerDay*totalDaysInYear;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favourite Snack: " +favoriteSnack+ "<br>");
document.write("Current Age: " +currentAge+ "<br>");
document.write("Estimated Maximum Age: " +maximumAge+ "<br>");
document.write("Amount of snacks per day: " +amountPerDay+ "<br>");
document.write("You will need " +totalNeed+ " to last you until the ripe old age of " +maximumAge);

// ............End Chapter # 5............ //




// ............Chapter # 6-9............ //

// ............Task # 1............ //
var input = prompt("Enter number");
document.write("Result: <br> The value of a is: " +input+ "<br>.........................................<br><br>");
++input;
document.write("The value of ++a is: " +input+ "<br> Now the value of a is: " +input+ "<br><br><br>");
input++;
document.write("The value of a++ is: " +input+ "<br> Now the value of a is: " +input+ "<br><br><br>");
--input;
document.write("The value of --a is: " +input+ "<br> Now the value of a is: " +input+ "<br><br><br>");
input--;
document.write("The value of a-- is: " +input+ "<br> Now the value of a is: " +input+ "<br><br><br>");

// ............Task # 2............ //
/* Explain Output
a = 2 , b =1;
--a = 1;
--a - --b = 1;
--a - --b + ++b = 2;
--a - --b + ++b + b-- = 3; */
var a=2, b=1;
var result = --a - --b + ++b + b--;
document.write("a is " +a+ "<br>");
document.write("b is " +b+ "<br>");
document.write("Result is " +result);

// ............Task # 3............ //
var userInput = prompt("Enter the User Name");
alert("WellCome! Assalam-o-Alaikum.");

// ............Task # 4............ //
var tableInput = prompt("Enter the number");
var i;
if(tableInput === " "){
    for (i=1; i<=10; i++){
        document.write(5 + " * " + i + " = " + 5*i + "<br>" );
    }
}
else {
    for (i=1; i<=10; i++){
        document.write(tableInput+ " * " + i + " = " +tableInput*i+ "<br>" );
    }
}

// ............Task # 5............ //
var subject1st = prompt("Enter the subject name");
var subject2nd = prompt("Enter the subject name");
var subject3rd = prompt("Enter the subject name");
var totalMarksSubject = 100;
var obtainedMarks1st = parseInt(prompt("Enter the subject marks"));
var obtainedMarks2nd = parseInt(prompt("Enter the subject marks"));
var obtainedMarks3rd = parseInt(prompt("Enter the subject marks"));
var totalMarks = totalMarksSubject*3;
var totalObtainedMarks = obtainedMarks1st + obtainedMarks2nd + obtainedMarks3rd;
var percentage = (totalObtainedMarks/totalMarks)*100;

document.write("<table><tr><th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th></tr>");
document.write("<tr><td>" +subject1st+ "</td>");
document.write("<td>" +totalMarksSubject+ "</td>");
document.write("<td>" +obtainedMarks1st+ "</td>");
document.write("<td>" +obtainedMarks1st+ "%</td></tr>");

document.write("<tr><td>" +subject2nd+ "</td>");
document.write("<td>" +totalMarksSubject+ "</td>");
document.write("<td>" +obtainedMarks2nd+ "</td>");
document.write("<td>" +obtainedMarks2nd+ "%</td></tr>");

document.write("<tr><td>" +subject3rd+ "</td>");
document.write("<td>" +totalMarksSubject+ "</td>");
document.write("<td>" +obtainedMarks3rd+ "</td>");
document.write("<td>" +obtainedMarks3rd+ "%</td></tr>");

document.write("<tr><td></td>");
document.write("<th>" +totalMarks+ "</th>");
document.write("<th>" +totalObtainedMarks+ "</th>");
document.write("<th>" +percentage+ "%</th></tr></table>");

// ............End Chapter # 6-9............ //




// ............Chapter # 9-11............ //

// ............Task # 1............ //
var cityInput = prompt("Enter the  city name");
if (cityInput === "Karachi"){
    alert("Welcome to city of lights");
}

// ............Task # 2............ //
var genderInput = prompt("Enter the gender");
if (genderInput === "male"){
    alert("Good Morning Sir.");
}
if (genderInput === "female"){
    alert("Good Morning Ma'am.");  
} 

// ............Task # 3............ //
var color1Input = prompt("Enter the color");
var color2Input = prompt("Enter the color");
var color3Input = prompt("Enter the color");
if (color1Input === "Red"){
    document.write("<table><tr><center><th>Signal color</th><th>Message</th></center></tr>");
    document.write("<tr><center><td>" +color1Input+ "&emsp;&emsp;</td><td>&emsp;&emsp;&nbsp;Must Stop</center></td></center></tr>");
    if(color2Input === "Yellow"){
        document.write("<tr><center><td>" +color2Input+ "&emsp;&emsp;</td><td>&emsp;&emsp;&nbsp;Ready to move</td></center></tr>");
        if(color3Input === "Green"){
            document.write("<tr><center><td>" +color3Input+ "&emsp;&emsp;</td><td>&emsp;&emsp;&nbsp;Move now</td></center></tr>");
        }
    }
}

// ............Task # 4............ //
// A
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} 
// Yes

// B
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} 
// No

// C
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} 
// 2nd and 4th condition True

// D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} 
// Yes

// E
if (true){
alert("True");
}
if (false){
alert("False");
}
// True

// F
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Yes
    
// ............Task # 5............ //
var remainingFuel = prompt("Enter the remaining fuel in Car");
if(remainingFuel < 0.25){
    alert("Please refill the fuel in your car");
} 

// ............Task # 6............ //
var obtainedMarksFirst = parseInt(prompt("Enter the Obtained Marks"));
var obtainedMarksSecond = parseInt(prompt("Enter the Obtained Marks"));
var obtainedMarksThird = parseInt(prompt("Enter the Obtained Marks"));
var totalMarksInput = parseInt(prompt("Enter the Total Marks"));
var totalMarks = totalMarksInput*3;
var totalObtainedMarks = obtainedMarksFirst+obtainedMarksSecond+obtainedMarksThird;
var percentage = (totalObtainedMarks/totalMarks)*100;
document.write("<h1>Marks Sheet</h1><br><br>Total marks : " +totalMarks+ "<br> Marks obtained : " +totalObtainedMarks+ "<br> Percentage : " +percentage+ "% <br>");
if (percentage >= 80){
    document.write("Grade : A-One <br> Remarks : Excellent");
}
else if (percentage >= 70){
    document.write("Grade : A <br> Remarks : Good");
}
else if (percentage >= 60){
    document.write("Grade : B <br> Remarks : You need to improve");
}
else{
    document.write("Grade : Fail <br> Remarks : Sorry");
}

// ............Task # 7............ //
var secretNumber = 5;
var guessSecretNumber = parseInt(prompt("Enter the Guess number"));
if (secretNumber === guessSecretNumber){
    alert("Bingo! Correct answer");
}
if (secretNumber === guessSecretNumber+1){
    alert("Close enough to the correct answer");
}

// ............Task # 8............ //
var num = 36;
if(num%3 === 0){
    alert("Your number is divisible by 3");
}

// ............Task # 9............ //
var num = prompt("Enter the number");
if(num%2 === 0){
    alert("Your number is Even");
}
else{
    alert("Your number is Odd");
}

// ............Task # 10............ //
var temperatureInput = prompt("Enter the temperature");
if (temperatureInput > 40){
    alert("It is too hot outside.");
}
else if (temperatureInput > 30){
    alert("The Weather today is Normal.");
}
else if (temperatureInput > 20){
    alert("Today’s Weather is cool.");
}
else {
    alert("OMG! Today’s weather is so Cool.");
}

// ............Task # 11............ //
var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number"));
var operator = prompt("Enter the operation");
if (operator === '+'){
    alert(num1+ " + " +num2+ " = " + (num1+num2));
}
if (operator === '-'){
    alert(num1+ " - " +num2+ " = " + (num1-num2));
}
if (operator === '*'){
    alert(num1+ " * " +num2+ " = " + (num1*num2));
}
if (operator === '/'){
    alert(num1+ " / " +num2+ " = " + (num1/num2));
}
if (operator === '%'){
    alert(num1+ " % " +num2+ " = " + (num1%num2));
}

// ............End Chapter # 9-11............ //




// ............Chapter # 12-13............ //

// ............Task # 1............ //
var char = prompt("Enter the number/string");
if (char <= 'A' || char <= 'Z'){
    document.write("UpperCase letter " +char.charCodeAt());
}
else if (char <= 'a' || char <= 'z'){
    document.write("LowerCase letter " +char.charCodeAt());
}
else{
    document.write("Number")
}

// ............Task # 2............ //
var numFirst = prompt("Enter the first number");
var numSecond = prompt("Enter the second number");
if (numFirst > numSecond){
    alert("First number is larger than second number");
}
else if (numSecond > numFirst){
    alert("Second number is larger than first number");
}
else{
    alert("First number and second number are equal");
}

// ............Task # 3............ //
var numInput = prompt("Enter the number");
if (numInput > 0){
    alert("Your entered number is positive");
}
else if (numInput < 0){
    alert("Your entered number is negative");
}
else {
    alert("Your entered number is zero");
}

// ............Task # 4............ //
var charInput = prompt("Enter the character");
if(charInput.length === 1){
    if (charInput === 'a' || charInput === 'e' || charInput === 'i' || charInput === 'o' || charInput === 'u'){
        alert("True");
    }
}
else {
    alert("False");
}

// ............Task # 5............ //
var password = "JavaScript2020";
var passwordCheck = prompt("Enter the password");
if (passwordCheck === " "){
    alert(" Please enter your password");
}
else if (passwordCheck === password){
    alert("“Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// ............Task # 6............ //
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}

// ............Task # 7............ //
var time = prompt("Enter the time");
if (time >= 0000 && time < 1200){
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100){
    alert("Good evening!");
}
else {
    alert("Good night");
}

// ............End Chapter # 12-13............ //




// ............Chapter # 14-16............ //

// ............Task # 1............ //
var emptyArrayLiteral = [];

// ............Task # 2............ //
var empltyArrayObject = new Array();

// ............Task # 3............ //
var stringArray = ["Website", "Mobile", "Google"];

// ............Task # 4............ //
var numberArray = [0, 1, 2, 3, 4, 5];

// ............Task # 5............ //
var booleanArray = ['true', 'false'];

// ............Task # 6............ //
var mixedArray = ['fruits', 1, 'true', '$', '%'];

// ............Task # 7............ //
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<b> Qualifications: </b><br/>");
document.write("<ol>");
document.write("<li>" +qualifications[0]+ "</li>");
document.write("<li>" +qualifications[1]+ "</li>");
document.write("<li>" +qualifications[2]+ "</li>");
document.write("<li>" +qualifications[3]+ "</li>");
document.write("<li>" +qualifications[4]+ "</li>");
document.write("<li>" +qualifications[5]+ "</li>");
document.write("<li>" +qualifications[6]+ "</li>");
document.write("<li>" +qualifications[7]+ "</li>");
document.write("</ol>");

// ............Task # 8............ //
var studentNames = ["Michael", "John", "Tony"];
var studentMarks = [320, 230, 480];
document.write("Score of " +studentNames[0]+ " is " +studentMarks[0]+ ". Percentage: 64% <br/>");
document.write("Score of " +studentNames[1]+ " is " +studentMarks[1]+ ". Percentage: 46% <br/>");
document.write("Score of " +studentNames[2]+ " is " +studentMarks[2]+ ". Percentage: 96%");

// ............Task # 9............ //
var colorNames = ["red", "blue", "green", "pink"];
document.write(colorNames);
var colorAddStart = prompt("Enter a color that you want to add to beginning of array");
colorNames.unshift(colorAddStart);
document.write(" <br/> Updated array  <br/>" +colorNames);
var colorAddEnd = prompt("Enter a color that you want to add to end of array");
colorNames.push(colorAddEnd);
document.write(" <br/> Updated array  <br/>" +colorNames);
var colorAddMore = prompt("Enter a color that you want to add two more color to beginning of array");
colorNames.splice(2,0,colorAddMore);
document.write(" <br/> Updated array  <br/>" +colorNames);
var colorStartDelete = prompt("Enter a color that you want to delete to beginning of array");
colorNames.shift(colorStartDelete);
document.write(" <br/>Updated array  <br/>" +colorNames);
var colorEndDelete= prompt("Enter a color that you want to delete to end of array");
colorNames.pop(colorEndDelete);
document.write(" <br/> Updated array  <br/>" +colorNames);
var colorAddName = prompt("Enter a color that you want to add color and color name");
colorNames.splice(5,0,colorAddName);
document.write(" <br/> Updated array  <br/>" +colorNames);
var colorDelete = prompt("Enter a color that you want to delete colors");
colorNames.splice(1,1,colorDelete);
document.write(" <br/>Updated array  <br/>" +colorNames);

// ............Task # 10............ //
var studentScores = [320,230,480,120];
document.write("Scores of Students : ")
for (var i = 0; i<studentScores.length; i++)
document.write(studentScores[i]+ ",");
document.write("<br/> Ordered Scores of Students : " +studentScores.sort());

// ............Task # 11............ //
var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list: <br/>" +cityNames+ ",");
var selectedCities = cityNames.slice(2,4);
document.write("Selected cities list: <br/>" +selectedCities);

// ............Task # 12............ //
var arr = ["This", "is", "my", "cat"];
document.write("Array: <br/>" +arr+ ", <br/><br/>");
document.write("String: <br/>" +arr.join(" "));

// ............Task # 13............ //
var array = new Array();
array.push("keyboard","mouse","printer","monitor");
document.write("Devices <br/>" +array+ "<br/>");
document.write("Out: <br/>" +array);

// ............Task # 14............ //
var array = new Array();
array.push("keyboard","mouse","printer","monitor");
document.write("Devices <br/>" +array+ "<br/>");
document.write("Out: <br/>" +array.reverse());

// ............Task # 15............ //
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++){
    document.write("<option>" +manufacturers[i]+ "</option>");
}
document.write("</select>");

// ............End Chapter # 14-16............ //




// ............Chapter # 17-20............ //

// ............Task # 1............ //
var multidimensionalArray = [
    ['Mango', 'Orange', 'Lemon'],
    [1, 2, 3]
];

// ............Task # 2............ //
var matrixArray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
for (var i=0; i<=2; i++)
document.write("<br>" +matrixArray[i]);

// ............Task # 3............ //
var numericArray = [1,2,3,4,5,6,7,8,9,10];
for (var i=0; i<=9; i++)
document.write("<br>" +numericArray[i]);

// ............Task # 4............ //
var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length multiplication table");
document.write("Multiplication table of " +tableNumber+ "<br> Length " +tableLength+ "<br><br>");
for (var i = 1; i<=tableLength; i++){
    document.write(tableNumber+ " x " +i+ " = " +tableNumber*i+ "<br>");
}

// ............Task # 5............ //
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i=0; i<=4; i++)
document.write("<br>" +fruits[i]);
document.write("<br> Element at index 0 is " +fruits[0]+ "<br> Element at index 1 is " +fruits[1]+ "<br> Element at index 2 is " +fruits[2]+ "<br> Element at index 3 is " +fruits[3]+ "<br> Element at index 4 is " +fruits[4]);

// ............Task # 6............ //
document.write("<b>Counting: </b><br/><br/>");
for (var count = 1; count <= 15; count++){
    document.write(" " +count+ ",");
}
document.write("<br/><br/><b> Reverse counting:</b><br/><br/>");
for (var reverseCount = 10; reverseCount >= 1; reverseCount--){
    document.write(" " +reverseCount+ ",");
}
document.write("<br/><br/><b>   Even:</b><br/><br/>")
for (var even = 0; even <= 20; even += 2){
    document.write(" " +even+ ",");
}
document.write("<br/><br/><b>   Odd:</b><br/><br/>")
for (var odd = 1; odd < 20; odd += 2){
    document.write(" " +odd+ ",");
}
document.write("<br/><br/><b>   Series:</b><br/><br/>")
for (var series = 2; series <= 20; series+=2){
    document.write(" " +series+ "k,");
}

// ............Task # 7............ //
var A = ["cake", "apple pie"," cookie", "chips", "patties"];
var searchInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
if (A.indexOf(searchInput) !== -1){
    if (searchInput === A[0]){
        alert(A[0]+" is available at index " +A.indexOf(searchInput)+ " in our bakery");
    }
    else if (searchInput === A[1]){
        alert(A[1]+" is available at index " +A.indexOf(searchInput)+ " in our bakery");
    }
    else if (searchInput === A[2]){
        alert(A[2]+" is available at index " +A.indexOf(searchInput)+ " in our bakery");
    }
    else if (searchInput === A[3]){
        alert(A[3]+" is available at index " +A.indexOf(searchInput)+ " in our bakery");
    }
    else{
        alert(A[4]+" is available at index " +A.indexOf(searchInput)+ " in our bakery");
    }
}
else{
    alert("We are sorry. " +searchInput+ " is not available in our bakery");
}

// ............Task # 8............ //
var A = [24, 53, 78, 91, 12];
var largestNumber = A[0];
for (var i = 0; i<A.length; i++){
    if (A[i]>largestNumber){
        largestNumber = A[i];
    }
}
document.write("Array items: ");
for (var i = 0; i<A.length; i++)
document.write(A[i]+ ",");
document.write("<br/> The largest number is " +largestNumber);

// ............Task # 9............ //
var A = [24, 53, 78, 91, 12];
var smallestNumber = A[0];
for (var i = 0; i<A.length; i++){
    if (A[i]<smallestNumber){
        smallestNumber = A[i];
    }
}
document.write("Array items: ");
for (var i = 0; i<A.length; i++)
document.write(A[i]+ ",");
document.write("<br/> The smallest number is " +smallestNumber);

// ............Task # 10............ //
for (var i = 1; i*5 <= 100; i++){
    document.write(i*5+ ", ");
}

// ............End Chapter # 17-20............ //
