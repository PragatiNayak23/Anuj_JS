var no = prompt("Enter No = ")

let sec_dig = Number(no[1])
let sec_las_dig = Number(no[no.length-2])

sum = sec_dig + sec_las_dig

document.writeln("Sum of second digit & Second last digit = ",sum)