import db from '../models/index';
require('dotenv').config();
import emailService from './emailService';


let postBookAppointment = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if (!data.email || !data.doctorId ||
                !data.date || !data.timeType) {

                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {

                await emailService.sendSimpleEmail({
                    reciverEmail: data.email,
                    patientName: 'Tuấn Anh đẹp trai',
                    time: '8:00 - 9:00 Chủ nhật 10/4/2022',
                    doctorName: 'Tuấn Anh',
                    redirectLink: 'https://www.facebook.com/tuananh12072001'
                })

                //upsert patient information
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                    },

                })
                console.log(user[0])
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {

                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        },
                    })
                }
                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment,
}