require('dotenv').config();
import nodemailer from 'nodemailer';
let sendSimpleEmail = async(dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"TuanAnh88 👻" <tuananh2001ptit@gmail.com>', // sender address
        to: dataSend.reciverEmail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Thông tin đặt lịch khám bệnh", // plain text body
        html: `
            <h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên TuanAnh88</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

            <p>Vui lòng nhấn vào linh bên dưới để xác nhận thông tin</p>
            <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
            <div>Xin chân thành cảm ơn</div>
        `, // html body
    });
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
}