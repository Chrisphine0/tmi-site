import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  // Configure your email service here
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: "your_email@example.com",
    pass: "your_password",
  },
})

const departmentEmails = {
  general: "info@tuhifadhimchanga.org",
  projects: "projects@tuhifadhimchanga.org",
  donations: "donations@tuhifadhimchanga.org",
  volunteers: "volunteers@tuhifadhimchanga.org",
}

export async function POST(request: Request) {
  const { name, email, subject, message, department } = await request.json()

  const mailOptions = {
    from: "Your Website <noreply@tuhifadhimchanga.org>",
    to: [
      "founder@tuhifadhimchanga.org",
      "secretary@tuhifadhimchanga.org",
      "info@tuhifadhimchanga.org",
      departmentEmails[department as keyof typeof departmentEmails],
    ].join(", "),
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Department: ${department}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

