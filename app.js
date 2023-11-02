const express = require('express')
const app = express()
const nodemailer=require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trendyfirst48@gmail.com',
        pass:'Trendyfirstworld'
    }
});

let mailDetails = {
    from: 'trendyfirst48@gmail.com',
    to: 'priyapremlal2015@gmail.com',
    subject: 'Sending mail',
    text: 'Node.js Sample mail'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent successfully');
    }
});



const PORT = 3541;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})