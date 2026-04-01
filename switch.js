// switch ()
// {
//     case 1 :
//             break
//     case ...

//     default
// }

var num1 = Number(prompt("\nEnter No1 : "))
var num2 = Number(prompt("\nEnter No2 : "))
var a = Number(prompt("\n1. Addition \n2. Subtraction \n3.Multiply \n4.Division \nEnter Your Choice : "))

switch(a)
{
    case 1 :
            document.writeln("\nYour Addition =",num1+num2)
            break;

    case 2 :
            document.writeln("\nYour Subtraction =",num1-num2)
            break;

    case 3 :
            document.writeln("\nYour Multiply =",num1*num2)
            break;

    case 4 :
            document.writeln("\nYour Division =",num1/num2)
            break;

    default :
            document.writeln("\nInvalid Choice...")
            break;
}