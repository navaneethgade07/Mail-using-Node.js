var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'navaneethgade07@gmail.com',
        pass : 'ifqo qndx tjau nnup'
    }
});

var message = {
        from: 'navaneethgade07@gmail.com',
        to : '21951a05b4@iare.ac.in',
        subject: 'sending gmail through node.js',
        html: '<h1>Welcome</h1>'
};

transporter.sendMail(message , (error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent ' + info.response);
    }
});