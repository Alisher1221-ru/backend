let fs = require('fs')

let remave = () => {
    fs.rename("./files/forrename.txt", './files/newname.txt', (err) => {
        if (err) {
            console.log(err);
        }
    })
}
remave()