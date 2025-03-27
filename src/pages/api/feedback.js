import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullname, email, company, designation, dob, number, address, feedback } = req.body;

    if (!fullname || !email || !number || !company || !designation || !dob || !address || !feedback) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Full Name: ${fullname}
        Email: ${email}
        Company: ${company}
        Designation: ${designation}
        Date of Birth: ${dob}
        Phone: ${number}
        Address: ${address}
        Feedback: ${feedback}
      `,
      html: `
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
      `,
    };

    try {
      // await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Feedback sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
