// const add = (no1,no2) => {
//     no1 + no2 
// }

// const add = (no1,no2) => no1 + no2 ;
// console.log(add(3,4));


// even odd
// const data = no => no % 2===0 ? "Even" : "Odd";
// console.log(data(8));


//max
// const max = (a,b) => (a>b?a:b);
// console.log(max(10,20));


//reverse
// const rev = str => str.split("").reverse().join("");
// console.log(rev("hello world"));


//list
// const even = x => x.filter(x=> x%2===0);
// console.log(even([1,2,3,4,5,6]));


//upper case remove
// let x = prompt("Enter String = ")

// const upper = str =>{
//     return str.split("").filter(ch=> !(ch>='A' && ch<='Z')).join("")
// };

// console.log(upper(x));

// My Name Is Pragati
// MyNameIsPragati  --- itagarPsIemaNyM --- iaaIea

let str = prompt("Enter String = ")
let x = str.split(" ").join("") // my name is pragati --> ["mynameispragati"]

let rev = x.split("").reverse().join("")

let vowel = "";
let ch
for(ch of rev)
{
    if("aeiouAEIOU".includes(ch))
    {
        vowel += ch
    }
}

console.log("Reversed = ",rev);
console.log("Vowel String = ",vowel);