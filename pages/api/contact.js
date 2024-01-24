export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "premium171.web-hosting.com",
        auth: {
            user: 'contacto@delpinocardenas.com.ar',
            pass: process.env.password,
        },
        secure: true,
    });


    const mailData = {
        from: 'contacto@delpinocardenas.com.ar',
        to: 'contacto@delpinocardenas.com.ar',
        replyTo: req.body.email,
        subject: `Mensaje de ${req.body.name}`,
        //text: req.body.phone,
        html: `<div>Teléfono: ${req.body.phone} </br> E-mail: ${req.body.email} </br> Ciudad: ${req.body.address} </br> Mensaje: ${req.body.description}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err);
            res.status(500).json({message: "Momentaneamente fuera de servicio."})
        } else {
            console.log(info);
            res.status(200).json({message: "OK"})
        }
    })

}