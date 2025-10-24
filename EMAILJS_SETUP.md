# EmailJS Setup Guide for Contact Form

## Overview
The contact form is now integrated with EmailJS to send emails directly from the frontend without a backend server.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Service Interest: {{service}}

Message:
{{message}}

---
This message was sent from the Quantum IT Solutions contact form.
```

4. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (also called API Key)
3. Copy this key

### 5. Update the Contact Form
Open `src/pages/ContactPage.jsx` and replace these values around line 81-83:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

### 6. Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Sender's company
- `{{service}}` - Selected service
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (optional)

### 7. Test the Form
1. Run the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your connected email inbox for the message

## Email Configuration

### Recommended Settings
- **Auto-Reply**: Set up an auto-reply template to acknowledge receipt
- **Email Limit**: Free plan includes 200 emails/month
- **Custom Domain**: Consider using a custom domain for professional emails

### Security
- Keep your Public Key public (it's safe to expose)
- Never expose your Private Key
- EmailJS automatically validates requests from your domain

## Troubleshooting

### Email Not Sending
1. Check browser console for errors
2. Verify Service ID, Template ID, and Public Key are correct
3. Ensure email service is connected and active in EmailJS dashboard
4. Check EmailJS quota (200 emails/month on free plan)

### Error Messages
- **"Failed to send"**: Check your EmailJS credentials
- **"Service unavailable"**: EmailJS might be down, check status
- **"Invalid template"**: Verify template variables match

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Contact EmailJS Support: support@emailjs.com

## Features Implemented
✅ Email sending via EmailJS
✅ Loading state during submission
✅ Success message after sending
✅ Error handling and display
✅ Form validation
✅ Auto-clear form after success
✅ Responsive design
✅ Professional email template

## Next Steps (Optional)
- Set up auto-reply emails
- Add email notification preferences
- Implement email tracking
- Add reCAPTCHA for spam protection
- Create multiple templates for different services
