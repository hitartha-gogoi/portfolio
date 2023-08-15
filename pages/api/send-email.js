import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import "dotenv/config"
import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { recipient, subject, htmlFilePath } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSKEY
    }
  });

  try {
     const response = await axios.get(htmlFilePath); // Fetch HTML content from the URL
     //const htmlContent = await readFile('./service-email.html', 'utf-8');
    const htmlContent = response.data;
    // const htmlContent = await readFile(htmlFilePath, 'utf-8');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log('Error:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}