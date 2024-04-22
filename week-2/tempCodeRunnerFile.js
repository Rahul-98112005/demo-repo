let a = 1;
console.log(a);
const fs = require("fs");

fs.readFile("a.txt","utf-8",(err, data) => {
    
    console.log("data read from file is" );
    console.log(data);
})

let ans = 0;
for(let i =0; i<100; i++)
{
    ans = ans + i;
}
console.log(ans);