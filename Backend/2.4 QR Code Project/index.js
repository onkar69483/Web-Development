/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import fs from 'fs'
import qr from 'qr-image'

inquirer.prompt([ //prompt the user to get the url
    {
    name: 'url', //url will be stored in a  variable named url
    message: 'Enter the url: ',
    type: 'input'
    }
]).then((answer) => {
    const url = answer.url
    console.log("Your entered url is: "+url);
    fs.writeFile('message.txt', url, (err) => { //save the url to a local file
        if (err) throw err
        console.log("Message stored successfully!");
        const my_qr_img = qr.image(url)
        my_qr_img.pipe(fs.createWriteStream('my_qr_img.png')) //save the generated qr code
    })
})