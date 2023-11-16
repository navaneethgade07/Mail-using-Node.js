// Importing nodemailer module
var nodemailer = require('nodemailer');

// authorizing the sender username and password
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'navaneethgade07@gmail.com',
        pass : 'ifqo qndx tjau nnup'
    }
});

// Sending message to the receiver along with the receiver's email
var message = {
        from: 'navaneethgade07@gmail.com',
        to : '21951a05b4@iare.ac.in',
        subject: 'sending gmail through node.js',
        html: '<h1>Welcome</h1>'
};

// sendMail() function used to send the mail to receiver along the message 
transporter.sendMail(message , (error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent ' + info.response);
    }
});