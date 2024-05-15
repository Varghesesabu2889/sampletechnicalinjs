/*20.	Write a program to print the following
 pattern using for loop
1
2	3
4	5	6
7	8	9	10
*/
let string=''
var size=4;
let count =1
for(row=0; row<=size; row++){
    for (var col = 1; col <= row; col++) {
       string=string+" "+count
       count++
    }
    string+=`\n` 
}
console.log(string)