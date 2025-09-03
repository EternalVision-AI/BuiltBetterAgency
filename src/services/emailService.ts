// Email Service Configuration

const EMAIL_SERVICE_URL = 'https://api.emailjs.com/api/v1.0/email/send';

interface FormData {
  email: string;
  loom: string;
  telegram: string;
  companies: string;
  interviewConfidence: string;
  englishAccent: string;
  availability: string;
  resumeLink: string;
  location?: string;
}

export const sendEmail = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if EmailJS credentials are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_snp52hp';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_c9qfq8p';
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || 'BVJ7j_1n_twJGUuFh';
    
    // If credentials are still placeholder values, return error
    if (!serviceId || serviceId === 'your_service_id_here' || 
        !templateId || templateId === 'template_xxxxxxx' ||
        !userId || userId === 'your_user_id_here') {
      return { 
        success: false, 
        message: 'Email service not configured. Please set up EmailJS credentials.' 
      };
    }

    // Prepare email data with template
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        to_email: 'tony.builtbetter@gmail.com',
        from_email: `${formData.location || 'Not detected'}`,
        from_name: 'BuiltBetter Applicant',
        subject: `New applicant from ${formData.location || 'Not detected'}`,
        message: `
Personal Information:
- Email: ${formData.email}
- Location: ${formData.location || 'Not detected'}
- Telegram: ${formData.telegram || 'Not provided'}

Interview Details:
- Loom Video Link: ${formData.loom || 'Not provided'}
- Resume/CV Link: ${formData.resumeLink || 'Not provided'}

Experience & Background:
- Companies Worked With: ${formData.companies}
- Interview Confidence: ${formData.interviewConfidence}

Communication & Availability:
- English Communication Style: ${formData.englishAccent}
- Availability: ${formData.availability}



Application submitted via BuiltBetter Agency website
Date: ${new Date().toLocaleString()}
        `
      } as EmailTemplateParams
    };


    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('EmailJS API Error:', errorData);
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
    }

    return { success: true, message: 'Application submitted successfully! We\'ll get back to you within 24 hours.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send application. Please try again or contact support.' 
    };
  }
};

interface EmailTemplateParams {
  to_email: string;
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
  attachment?: string;
  file_name?: string;
}
