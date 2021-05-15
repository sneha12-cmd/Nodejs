var fs=require('fs');
fs.writeFileSync('A10.txt',"hey ho! lets go",() =>{
    console.log("the file was saved!");
})