let fs = require('fs');

let openFile = (text) => {
    fs.writeFile(`./files/${text}.txt`, 'Alisher', {encoding:'utf-8',flag:'wx'}, (error) => {
        if (error) {
            console.log(new Error(error));
        }
        else{
            console.log('perfect');
        }
    })
}
openFile('flesh')
// console.log(All);
// recuest 
// respons