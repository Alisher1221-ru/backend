let fs = require('fs')

let openFile = (text) => {
    fs.copyFile("./files/flesh.txt", "./files/fileCopy.txt", (err) => {
        if (err) {
          console.log("Error Found:", err);
        }
    })
}
openFile('flesh')