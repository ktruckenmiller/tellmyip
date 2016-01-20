var os = require('os');
var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');
var ip = require(__dirname + '/ifaces.js');
require('dotenv').config({
  path: __dirname + "/.env"
});


var currentIp = ip.getIp();


var transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
    region: process.env.AWS_REGION
}));


var mailOptions = {
  from: 'My Mono PI <no-reply@mono-1.com>',
  to: 'kevin.truckenmiller@mono-1.com',
  subject: 'My IP addresss!',
  text: 'My current IP is: ' + currentIp
}
transporter.sendMail(mailOptions, function(err, info) {
  if(err) {
    return console.log(err);
  }
  console.log('Message sent: ' + info.response);
});
