// y -->  x  y  z
let ch = prompt("Enter Any Character = ")

let x = " abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 "

for(let i=0;i<x.length;i++)
{
    if(x[i] === ch )
    {
        console.log(x[i-1] + "  " + x[i] + "  " + x[i+1])
        break;
    }
}
// task 1 --> "ThiS Is InDIa 2@@"
//  count -- upper , lower , digit , s.symbol , space 