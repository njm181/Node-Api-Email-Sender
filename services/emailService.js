var nodemailer = require('nodemailer');

exports.sendEmail = async function(req, res){
    // email sender function
    // Definimos el transporter
    try{
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: 'nicolasjmolina1@gmail.com',
            pass: 'jnytvfqwwmjqqdvc'
        }
    });
    }catch(err) {
        res.status(500).send('Error al crear el mail');
        console.log('Error perrito malvado');
      };
    
    // Definimos el email
    // send mail with defined transport object
    const message = {
        from: 'mensaje de prueba', // sender address
        to: "nicolasjmolina@live.com", // list of receivers
        subject: "Hello perrito malvado", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };

      try{
        await transporter.sendMail(message, function(err, info) {
          if (err) {
            console.log(err);
            console.log(message);
            res.status(500).send('Error al enviar el mail');
          } else {
            console.log('Info: '+JSON.stringify(info));
            console.log('Message: '+JSON.stringify(message));
            res.status(200).send('Email enviado');
          }
        });
      }catch(err) {
        res.status(500).send('CATCH: Error al enviar el mail');
        console.log('Error perrito malvado');
      };
}
