const API_KEY = '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';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(API_KEY);

const message = {
    to: 'jhernandez@r2hstudent.org',
    from: 'juanh_12@outlook.com',
    subject: 'Hello from sendgrid',
    text: 'Hello!',
    html: '<h1>Hello from mac</h1>',

};

sgMail
.send(message)
.then((response) => console.log('Email sent!'));
.catch((error) => console.log(error.message));
