// var data = [10,20,30,40,50];
// document.writeln(data)
// document.writeln("<br>",data[2])
// document.writeln("<br>",data.length)


// var data = ["ram","radha","ankur","anuj","amit"]
// console.log(data)

// var x = data.push("Pragati")
// var y = data.pop()
// console.log("Added Element = ",x)
// var x = data.shift("anuj")
// var x = data.shift()
// var y = data.unshift("anuj")
// var y = data.unshift("geeta")
// var y = data.unshift("rita")
// console.log(x)
// console.log(y)
// console.log(data)


// var data = [10,20.2,"hii",true,false,null,undefined]
// console.log(data)

// var data = ["cpp","java","c","python","cppp","cppp","hindi","english"]
// var x = data.reverse(data)
// console.log(x)


// var x = data.includes("cpp")
// var x = data.includes("cpp",5)
// var x = data.indexOf("hindi")
// console.log(x)



// flag = false

// for(i=0;i<data.length;i++)
// {
//     if(data[i] == "cpp")
//     {
//         // console.log("Avai..")
//         flag = true
//         index = i;
//     }
// }
// console.log(index)
// console.log(flag)



var data = ["java","hindi","python","english","cpp"]
var flag= false;
var index = -1;
for(let i=0;i<data.length;i++){
    if(data[i].toLowerCase()=="HinDi".toLowerCase()){
        
        //console.log("hindi is available in array")
        flag=true;
        index=i;//1
        break;
    }

}

console.log("flag",flag)
console.log("index",index)