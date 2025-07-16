# EmailJS Setup Guide for IEDC VISAT Contact Form

## Steps to Configure EmailJS:

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose Gmail (or your preferred email service)
- Connect your Gmail account (iedcvisat25@gmail.com)
- Note down the Service ID (you'll need this)

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Set up your template with these variables:
  ```
  Subject: New Contact Form Submission from {{name}}
  
  Body:
  Hello,
  
  You have received a new message from your website contact form.
  
  Name: {{name}}
  Email: {{email}}
  Message: {{message}}
  
  Best regards,
  IEDC VISAT Website
  ```
- Note down the Template ID

### 4. Get Public Key
- Go to "Account" in your EmailJS dashboard
- Find your Public Key in the "API Keys" section

### 5. Update Configuration
- Open `js/emailjs-config.js`
- Replace the following values:
  - `YOUR_PUBLIC_KEY` with your actual Public Key
  - `YOUR_SERVICE_ID` with your Gmail Service ID
  - `YOUR_TEMPLATE_ID` with your Template ID

### 6. Test the Form
- Open contact.html in your browser
- Fill out the form and submit
- Check iedcvisat25@gmail.com for the email

## Example Configuration:
```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "user_1234567890abcdef", // Your actual public key
    SERVICE_ID: "service_gmail123", // Your Gmail service ID
    TEMPLATE_ID: "template_contact456" // Your template ID
};
```

## Troubleshooting:
- Make sure all IDs are correctly copied from EmailJS dashboard
- Check browser console for any error messages
- Verify that the Gmail account is properly connected
- Ensure the template variables match the form field names

## Free Tier Limits:
- 200 emails per month
- Sufficient for most contact forms
- Upgrade available if needed

## Security Notes:
- Public key is safe to expose in client-side code
- Service ID and Template ID are also safe to expose
- Never expose your private key in client-side code
