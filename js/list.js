let fs = require('fs')

let list = () => {
    fs.readdir('./files', (err,fil) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log(fil);
        }
    })
}
list()