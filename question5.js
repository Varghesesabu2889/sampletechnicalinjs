/*Write a program to show the grade obtained by a student after he/she enters their
 total mark percentage. Program should accept an input from the user and
display their grade as follows
Mark	      Grade
100 > 90	   A
80-89	       B
70-79	       C
60-69          D
50-59	       E
< 50	       Failed
*/


const prompt = require('prompt-sync')();

const mark = parseInt(prompt("Enter Your Mark: "));

function grade(mark) {
    let grade = "";
     if (mark > 100 || mark<0) {
        return "Invalid";
     }
    else if (mark >= 90) {
        grade = 'A';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'B';
    } else if (mark >= 70 && mark <= 79) {
        grade = 'C';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'D';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'E';
    } else {
        grade = 'Failed';
    }
    return grade;
}

const studentGrade = grade(mark);
console.log(studentGrade === 'Failed' ? "Sorry, you didn't pass this time." : studentGrade === 'Invalid' ? "Please enter a valid mark." : `Congratulations! Your grade is ${studentGrade}.`);