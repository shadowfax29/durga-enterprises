import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Client Type:* ${clientType}\n*Service Type:* ${serviceType}\n*Message:* ${message || 'No message provided'}`;

    const results = {
      email: false,
      whatsapp: false,
    };

    // Send Email using Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Durga Enterprises'}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact: ${name} - ${serviceType}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Client Type:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${clientType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Service Type:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Message:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
        `,
      });

      results.email = true;
    } catch (error) {
      console.error('Email error:', error);
    }

    // Send WhatsApp message using WhatsApp Business API
    const whatsappToken = process.env.WHATSAPP_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID;
    const whatsappRecipient = process.env.WHATSAPP_RECIPIENT;

    if (whatsappToken && whatsappPhoneId && whatsappRecipient) {
      try {
        const whatsappResponse = await fetch(
          `https://graph.facebook.com/v18.0/${whatsappPhoneId}/messages`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${whatsappToken}`,
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: whatsappRecipient,
              type: 'text',
              text: {
                body: whatsappMessage,
              },
            }),
          }
        );

        if (whatsappResponse.ok) {
          results.whatsapp = true;
        }
      } catch (error) {
        console.error('WhatsApp error:', error);
      }
    }

    // Return success if at least one method worked
    if (results.email || results.whatsapp) {
      return NextResponse.json({ 
        success: true,
        sent: results,
      });
    }

    // If neither worked, return error
    return NextResponse.json(
      { error: 'Failed to send notifications. Please check your configuration.' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
