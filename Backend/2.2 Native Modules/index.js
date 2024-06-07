const fs = require("fs")

// fs.writeFile("message.txt", "Hello this is writing to a file again", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved again");
// })

fs.readFile("message.txt", "utf8", (err,data) =>{
    if (err) throw err;
    console.log(data);
}) 