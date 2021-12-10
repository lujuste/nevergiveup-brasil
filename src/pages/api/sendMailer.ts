import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default function sendMailer(req: NextApiRequest, res: NextApiResponse) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
  });

  transporter
    .sendMail({
      from: `${process.env.USERMAIL}`,
      to: req.body.email,
      replyTo: process.env.PASSMAIL,
      text: 'Participe do curso de mulheres na política!',
      html: `<b> ${req.body.name} </b>`,
    })
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
}
