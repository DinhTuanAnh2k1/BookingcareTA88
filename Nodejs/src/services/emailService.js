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
        html: getBodyHTMLEmail(dataSend),
    });
}
let getBodyHTMLEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result =
            `
            <h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên TuanAnh88</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

            <p>Vui lòng nhấn vào linh bên dưới để xác nhận thông tin</p>
            <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
            <div>Xin chân thành cảm ơn</div>
        `
    }
    if (dataSend.language === 'en') {
        result =
            `
            <h3>Hi ${dataSend.patientName}!</h3>
            <p>You received this email because you booked an online medical appointment on TuanAnh88</p>
            <p>Information to book a medical appointment:</p>
            <div><b>Time: ${dataSend.time}</b></div>
            <div><b>Doctor: ${dataSend.doctorName}</b></div>

            <p>Please click the link below to confirm the information</p>
            <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
            <div>Sincerely thanks</div>
        `
    }
    return result;
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `
            <h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên TuanAnh88</p>
            <p>Thông tin đơn thuốc/hóa đơn được gửi trong file đính kèm.</p>
            
            <div>Xin chân thành cảm ơn!</div>
        `
    }
    if (dataSend.language === 'en') {
        result = `
            <h3>Hi ${dataSend.patientName}!</h3>
            <p>You received this email because you booked an online medical appointment on TuanAnh88</p>
            <p>Prescription/invoice information is sent in the attached file.</p>
            
            <div>Sincerely thanks!</div>
        `
    }
    return result;
}

let sendAttachment = async(dataSend) => {
    return new Promise(async(resolve, reject) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_APP, // generated ethereal user
                    pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
                },
            });
            let info = await transporter.sendMail({
                from: '"TuanAnh88 👻" <tuananh2001ptit@gmail.com>', // sender address
                to: dataSend.email, // list of receivers
                subject: "Kết quả khám bệnh ✔", // Subject line
                html: getBodyHTMLEmailRemedy(dataSend),
                attachments: [{
                    filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
                    content: dataSend.imageBase64.split("base64,")[1],
                    encoding: 'base64'
                }]
            });
            resolve(true)
        } catch (error) {
            reject(e)
        }
    })
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment,
}