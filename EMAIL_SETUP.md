# Email Service Setup for BuiltBetter Agency

## Setup Instructions (EmailJS)

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Set Up Email Service
1. Go to "Email Services" in EmailJS dashboard
2. **Delete the existing Gmail service** if you have one
3. Click "Add New Service"
4. Choose **"Gmail"** as your email service
5. **Important**: When connecting your Gmail account, make sure to:
   - Grant access to "Send emails on your behalf"
   - Allow "Read and send emails"
   - Accept all requested permissions
6. Connect your Gmail account (tony.builtbetter@gmail.com)
7. Note down your Service ID (should look like `service_xxxxxxx`)

**If you still get authentication errors:**
- Try using **"Custom SMTP"** instead of Gmail API
- Or use **"Outlook"** or **"Yahoo"** as alternative services

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:
   ```
   Subject: {{subject}}
   
   {{message}}
   
   ---
   Sent from: {{from_email}}
   Applicant: {{from_name}}
   ```
4. Save the template and note down your Template ID (should look like `template_xxxxxxx`)

### 4. Get User ID
1. Go to "Account" > "API Keys" in EmailJS dashboard
2. Copy your Public Key (User ID)

### 5. Update Configuration
The email service requires these three values:

```typescript
const emailData = {
  service_id: 'service_snp52hp', // From step 2
  template_id: 'template_c9qfq8p', // From step 3
  user_id: 'BVJ7j_1n_twJGUuFh', // From step 4
};
```

### 6. Environment Variables
Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

**Note**: For Vite, environment variables must be prefixed with `VITE_` to be accessible in the frontend.

## Benefits of EmailJS
- ✅ No complex OAuth setup required
- ✅ Free tier available (200 emails/month)
- ✅ Easy to configure and maintain
- ✅ Reliable delivery
- ✅ Professional email templates
- ✅ Built-in spam protection

## Usage
The Contact form will automatically send emails to `tony.builtbetter@gmail.com` when users submit applications.

## Security Notes
- EmailJS handles authentication securely
- No sensitive credentials stored in frontend code
- Emails are sent through EmailJS servers
- Built-in rate limiting and spam protection

## Alternative Email Services (If Gmail API Fails)

### Option 1: Custom SMTP (Recommended)
1. Go to "Email Services" in EmailJS dashboard
2. Choose "Custom SMTP"
3. Use these settings:
   - **SMTP Host**: `smtp.gmail.com`
   - **Port**: `587`
   - **Username**: `tony.builtbetter@gmail.com`
   - **Password**: Use an **App Password** (not your regular Gmail password)
   - **Security**: `STARTTLS`

### Option 2: Outlook/Hotmail
1. Choose "Outlook" as email service
2. Connect your Outlook account
3. Simpler authentication process

### Option 3: Yahoo Mail
1. Choose "Yahoo" as email service
2. Connect your Yahoo account
3. No API scope issues

## Gmail App Password Setup (For Custom SMTP)
1. Go to your Google Account settings
2. Navigate to "Security" > "2-Step Verification"
3. Go to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in EmailJS Custom SMTP settings
