// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;

    if (!resendApiKey) {
      throw new Error('Resend API key is not configured.');
    }
    if (!toEmail) {
      throw new Error('Recipient email is not configured.');
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Must be from a verified domain on Resend
      to: toEmail,
      subject: `New message from ${name} via your portfolio`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}