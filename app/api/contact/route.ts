import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, clientType, serviceType, message } = body;

    // Format the message for email
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Client Type: ${clientType}
Service Type: ${serviceType}
Message: ${message || 'No message provided'}
    `.trim();

    // Send email using your preferred service
    // For now, we'll use a simple fetch to a service like Resend, SendGrid, or Nodemailer
    
    // Option 1: Using Resend (recommended - simple and free tier available)
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>', // Change this to your verified domain
          to: process.env.CONTACT_EMAIL || 'your-email@example.com',
          subject: `New Contact: ${name} - ${serviceType}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
