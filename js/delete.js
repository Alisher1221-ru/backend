let fs = require('fs')

let remove = () => {
    fs.rm("./files/newname.txt", (err) => {
        if (err) {
            console.log(err);
        }
    })
}
remove()