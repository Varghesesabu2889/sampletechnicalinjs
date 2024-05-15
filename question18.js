/*18.	Grades are computed using a weighted average. Suppose that the 
written test counts 70%,  lab exams 20% and assignments 10%.
If Arun has a score of
Written test = 81
Lab exams = 68
Assignments = 92
Arun’s overall grade = (81x70)/100 + (68x20)/100 + (92x10)/100 = 79.5
 Write a program to find the grade of a student during his academic year. 

a.	Program should accept the scores for written test,
 lab exams and assignments
b.	Output the grade of a student (using weighted average)
 */

const prompt = require('prompt-sync')();
const test = parseInt(prompt("Enter the Score of Written test "));
const exams = parseInt(prompt("Enter the Score of lab exams "));
const ce = parseInt(prompt("Enter the Score of assignments "));

function findGrade(test,exams,ce) {
    let weightedTest=(test*70)/100
    let weightedExam= (exams*20)/100
    let weightedCe=(ce*10)/100
const grade=weightedTest+weightedExam+weightedCe;
return grade
}
function display() {
    console.log("");
    console.log(`Written test = ${test}`);
    console.log(`Lab exams = ${exams}`);
    console.log(`Assignments= ${ce}`);
}
const grade = findGrade(test, exams, ce);
display()
console.log(`Grade of the student is ${grade.toFixed(2)}% `);





