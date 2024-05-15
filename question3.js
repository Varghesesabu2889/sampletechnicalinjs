/*3.	Write a JavaScript program to calculate the area of a rectangle.The program 
should accept two inputs from the user: the length and width of the rectangle.Then, 
it should calculate the area using the formula: Area = Length * Width.Display the
calculated area on the console.*/
const prompt=require('prompt-sync')()
function areaOfRectangle() {
    const length=Number(prompt("Enter Your Length "))
    const width=Number(prompt("Enter Your Width "))
    let area=length*width  
    console.log(`Area of Rectangle = ${area}`);  
}
areaOfRectangle()

