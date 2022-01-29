import { SES as _SES } from 'aws-sdk';
import { createTransport } from 'nodemailer';
import APIResponses from '../../common';

const ses = new _SES();

export const sendEmail = async (event) => {
  const { to, subject, fileName, file, text } = JSON.parse(event.body);
  const attachments = [];

  if (fileName && file) {
    attachments.push({
      // encoded string as an attachment
      filename: fileName,
      content: file,
      encoding: 'base64',
    });
  }
  const mailOptions = {
    from: 'info@incubapp.co',
    subject: subject,
    text,
    to,
  };

  const transporter = createTransport({
    SES: ses,
  });

  try {
    await transporter.sendMail(mailOptions);

    return APIResponses._200({
      msg: 'Email sent successfully',
    });
  } catch (error) {
    return APIResponses._400({
      error: error.message,
    });
  }
};
