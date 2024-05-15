// Butterfly Pattern
spaceCount=4+2
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
       str+='* '
    }
    for(space=1;space<=spaceCount;space++){
        str+="  "
    }
    spaceCount-=2
    for(col=1;col<=row;col++){
        str+='* '
     }
    console.log(str);
}
spaceCount=0
for(row=1;row<=4;row++){
    str=""
    for(col=4;col>=row;col--){
       str+='* '
    }
    for(space=1;space<=spaceCount;space++){
        str+="  "
    }
    spaceCount+=2
    for(col=4;col>=row;col--){
        str+='* '
     }
    console.log(str);
}




//or




// let spaceCount = 4 + 2;
// for (let row = 1; row <= 4; row++, spaceCount -= 2) {
//     let str = "* ".repeat(row) + "  ".repeat(spaceCount) + "* ".repeat(row);
//     console.log(str);
// }

// spaceCount = 0;
// for (let row = 1; row <= 4; row++, spaceCount += 2) {
//     let str = "* ".repeat(4 - row + 1) + "  ".repeat(spaceCount) + "* ".repeat(4 - row + 1);
//     console.log(str);
// }
