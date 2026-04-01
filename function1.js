/*
    4 type -->

        1 Without without
        2 Without with
        3 with with
        4 with without
*/

// 1 --> without without

// function demo()
// {
//     // console.log("hii");

//     var i,j
//     for(i=1;i<=5;i++)
//     {
//         for(j=1;j<=i;j++)
//         {
//             document.writeln("* ");
//         }
//         document.writeln("<br>");
//     }
    
//     //code....
// }
// demo()//calling part

// function demo()
// {
//     var i,j,k
//     for(i=1;i<=5;i++)
//     {
//         for(k=1;k<=i;k++)
//         {
//             console.log("  ");
//         }

//         for(j=1;j<=i;j++)
//         {
//             console.log("%d ",j);
//         }
//         console.log("\n");
//     }
    
//     //code....
// }
// demo()//calling part


// 2 without with

// function test()
// {

//     var no1,no2,sum=0

//     no1 = Number(prompt("Enter No1 = "))
//     no2 = Number(prompt("Enter No2 = "))

//     sum = no1 + no2

//     return sum
// }

// // var ans = test()
// document.writeln("Your Sum = ",test())


// 3 with argument without return type

// function squ(no)
// {
//     var no
//     let x = no * no

//     console.log(x);
// }

// squ(5)

// task 1 --> PraGATI  -->  
// upper case --> PGATI
// lower case --> ra
// upper case char count --> 5
// lower case char count --> 2



function check(name)
{
    let upper = ""
    let lower = ""
    let ucount = 0
    let lcount = 0

    for(let i=0;i<=name.length;i++)
    {
        let ch = name.charAt(i)

        if(ch >= 'A' && ch <= 'Z')
        {
            upper += ch
            ucount++
        }
        else if(ch >= 'a' && ch <= 'z')
        {
            lower += ch
            lcount++
        }
    }

    console.log("Upper case character = ",upper);
    console.log("Lower case character = ",lower);
    console.log("Upper case character Count = ",ucount);
    console.log("Lower case character Count = ",lcount);
}

check("PraGATI")