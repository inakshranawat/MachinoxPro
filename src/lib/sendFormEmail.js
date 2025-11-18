/**
 * Escapes HTML to prevent XSS attacks
 */
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Validates email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates required form fields
 */
function validateFormData(formData, formType) {
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
  
  for (const field of requiredFields) {
    if (!formData[field] || String(formData[field]).trim() === '') {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (!isValidEmail(formData.email)) {
    throw new Error('Invalid email address');
  }

  if (!['contact', 'trial'].includes(formType)) {
    throw new Error('Invalid form type. Must be "contact" or "trial"');
  }
}

/**
 * Sends form submission emails via Brevo API
 */
export default async function sendFormEmail({ formData, formType }) {
  // Validate environment variables
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY environment variable is not set');
  }
  if (!ADMIN_EMAIL) {
    throw new Error('ADMIN_EMAIL environment variable is not set');
  }
  if (!BASE_URL) {
    throw new Error('NEXT_PUBLIC_BASE_URL environment variable is not set');
  }

  // Optional CC email configuration
  const CC_EMAILS = process.env.CC_EMAILS
    ?.split(',')
    .map((e) => e.trim())
    .filter((e) => e && isValidEmail(e)) || [];
  
  const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL || ADMIN_EMAIL;

  // Validate reply-to email
  if (!isValidEmail(REPLY_TO_EMAIL)) {
    throw new Error('Invalid REPLY_TO_EMAIL address');
  }

  // Validate form data
  validateFormData(formData, formType);

  // Company branding
  const themeColor = '#3c0366';
  const companyName = 'Robato Systems';

  // Escape user inputs to prevent XSS
  const safeData = {
    firstName: escapeHtml(formData.firstName),
    lastName: escapeHtml(formData.lastName),
    email: escapeHtml(formData.email),
    phone: escapeHtml(formData.phone),
    company: escapeHtml(formData.company || 'N/A'),
    jobTitle: escapeHtml(formData.jobTitle || 'N/A'),
    country: escapeHtml(formData.country || 'N/A'),
    message: escapeHtml(formData.message),
  };

  let userSubject = '';
  let adminSubject = '';
  let htmlWelcome = '';
  let htmlAdmin = '';

  if (formType === 'contact') {
    userSubject = 'Thank you for contacting us';
    adminSubject = `New Contact Form Submission: ${safeData.firstName} ${safeData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333; background:#f4f4f4; padding:40px 20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          <div style="background:${themeColor}; padding:40px 30px; text-align:center;">
            <h1 style="margin:0; font-size:32px; color:#ffffff; font-weight:600; letter-spacing:-0.5px;">${companyName}</h1>
          </div>
          <div style="padding:40px 30px; line-height:1.8; font-size:15px; color:#444;">
            <div style="text-align:center; margin-bottom:25px;">
              <img src="/web-logo.png" alt="${companyName}" style="width:60px; height:60px; border-radius:8px;" />
            </div>
            <p style="margin:0 0 20px 0;">Dear ${safeData.firstName} ${safeData.lastName},</p>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">📧</span> Thank you for contacting <strong>${companyName}</strong>. We have received your inquiry and appreciate you taking the time to reach out to us.
            </p>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">⏱️</span> Our team is currently reviewing your message and will respond within 24-48 business hours. We are committed to providing you with the information and assistance you need.
            </p>
            <div style="background:#f8f8f8; border-left:4px solid ${themeColor}; padding:15px 20px; margin:25px 0; border-radius:4px;">
              <p style="margin:0; font-size:14px; color:#666;"><strong>📋 Reference Information:</strong></p>
              <p style="margin:5px 0 0 0; font-size:14px; color:#666;">Name: ${safeData.firstName} ${safeData.lastName}<br/>Email: ${safeData.email}</p>
            </div>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">💬</span> If you have any urgent concerns or additional information to share, please feel free to reply to this email directly.
            </p>
            <div style="text-align:center; margin:35px 0;">
              <a href="${BASE_URL}" style="background:${themeColor}; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:4px; font-weight:600; font-size:15px; display:inline-block; transition:background 0.3s;">🌐 Visit Our Website</a>
            </div>
            <p style="margin:30px 0 0 0; padding-top:20px; border-top:1px solid #e0e0e0; color:#666; font-size:14px; line-height:1.6;">
              Best regards,<br/>
              <strong>${companyName} Team</strong>
            </p>
          </div>
        </div>
      </div>`;

    htmlAdmin = `
      <div style="font-family: Helvetica, Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor}; padding-bottom:5px;">New Contact Form Submission</h2>
            <ul style="list-style:none; padding:0; margin-top:15px;">
              <li><strong>First Name:</strong> ${safeData.firstName}</li>
              <li><strong>Last Name:</strong> ${safeData.lastName}</li>
              <li><strong>Email:</strong> ${safeData.email}</li>
              <li><strong>Phone:</strong> ${safeData.phone}</li>
              <li><strong>Company:</strong> ${safeData.company}</li>
              <li><strong>Job Title:</strong> ${safeData.jobTitle}</li>
              <li style="margin-top:12px; padding:10px; background:#f0f0f0; border-radius:6px;"><strong>Message:</strong><br/>${safeData.message}</li>
            </ul>
          </div>
        </div>
      </div>`;
  } else if (formType === 'trial') {
    userSubject = 'Thank you for booking a demo';
    adminSubject = `New Trial Form Submission: ${safeData.firstName} ${safeData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#333; background:#f4f4f4; padding:40px 20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          <div style="background:${themeColor}; padding:40px 30px; text-align:center;">
            <h1 style="margin:0; font-size:32px; color:#ffffff; font-weight:600; letter-spacing:-0.5px;">${companyName}</h1>
          </div>
          <div style="padding:40px 30px; line-height:1.8; font-size:15px; color:#444;">
            <div style="text-align:center; margin-bottom:25px;">
              <img src="${BASE_URL}/favicon.ico" alt="${companyName}" style="width:60px; height:60px; border-radius:8px;" />
            </div>
            <p style="margin:0 0 20px 0;">Dear ${safeData.firstName} ${safeData.lastName},</p>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">📧</span> Thank you for your interest in <strong>${companyName}</strong> and for requesting a product demonstration. We are excited to show you how our solutions can benefit your organization.
            </p>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">⏱️</span> Our team will contact you within the next 24 business hours to schedule a convenient time for your personalized demo session.
            </p>
            <div style="background:#f8f8f8; border-left:4px solid ${themeColor}; padding:15px 20px; margin:25px 0; border-radius:4px;">
              <p style="margin:0; font-size:14px; color:#666;"><strong>📋 Reference Information:</strong></p>
              <p style="margin:5px 0 0 0; font-size:14px; color:#666;">Name: ${safeData.firstName} ${safeData.lastName}<br/>Email: ${safeData.email}<br/>Company: ${safeData.company}</p>
            </div>
            <p style="margin:0 0 20px 0;">
              <span style="font-size:18px;">💬</span> In the meantime, feel free to explore our resources or reach out if you have any questions.
            </p>
            <div style="text-align:center; margin:35px 0;">
              <a href="${BASE_URL}" style="background:${themeColor}; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:4px; font-weight:600; font-size:15px; display:inline-block; transition:background 0.3s;">🌐 Visit Our Website</a>
            </div>
            <p style="margin:30px 0 0 0; padding-top:20px; border-top:1px solid #e0e0e0; color:#666; font-size:14px; line-height:1.6;">
              Best regards,<br/>
              <strong>${companyName} Team</strong>
            </p>
          </div>
        </div>
      </div>`;

    htmlAdmin = `
      <div style="font-family: Helvetica, Arial, sans-serif; color:#333; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">${companyName}</h1>
          </div>
          <div style="padding:25px; line-height:1.6; font-size:16px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor}; padding-bottom:5px;">New Trial Form Submission</h2>
            <ul style="list-style:none; padding:0; margin-top:15px;">
              <li><strong>First Name:</strong> ${safeData.firstName}</li>
              <li><strong>Last Name:</strong> ${safeData.lastName}</li>
              <li><strong>Email:</strong> ${safeData.email}</li>
              <li><strong>Phone:</strong> ${safeData.phone}</li>
              <li><strong>Company:</strong> ${safeData.company}</li>
              <li><strong>Job Title:</strong> ${safeData.jobTitle}</li>
              <li><strong>Country:</strong> ${safeData.country}</li>
              <li style="margin-top:12px; padding:10px; background:#f0f0f0; border-radius:6px;"><strong>Message:</strong><br/>${safeData.message}</li>
            </ul>
          </div>
        </div>
      </div>`;
  }

  /**
   * Sends an email via Brevo API
   */
  const sendEmail = async (options) => {
    const {
      to,
      subject,
      html,
      fromEmail,
      fromName,
      cc = [],
      replyTo,
    } = options;

    try {
      // Build email payload - only include cc if it has values
      const emailPayload = {
        sender: { email: fromEmail, name: fromName },
        to: to.map((email) => ({ email })),
        replyTo: { email: replyTo },
        subject,
        htmlContent: html,
      };

      // Only add cc if it has values
      if (cc.length > 0) {
        emailPayload.cc = cc.map((email) => ({ email }));
      }

      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify(emailPayload),
      });

      const json = await res.json();
      
      if (!res.ok) {
        console.error('Brevo API error response:', {
          status: res.status,
          statusText: res.statusText,
          body: json,
        });
        throw new Error(
          `Brevo API returned ${res.status}: ${json.message || JSON.stringify(json)}`
        );
      }

      return json;
    } catch (error) {
      console.error('Error in sendEmail function:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
  };

  try {
    // Send welcome email to user
    await sendEmail({
      to: [formData.email],
      subject: userSubject,
      html: htmlWelcome,
      fromEmail: ADMIN_EMAIL,
      fromName: companyName,
      replyTo: REPLY_TO_EMAIL,
    });

    // Send notification email to admin with CC
    // Reply-To is set to the user's email so admin can reply directly
    await sendEmail({
      to: [ADMIN_EMAIL],
      cc: CC_EMAILS,
      subject: adminSubject,
      html: htmlAdmin,
      fromEmail: ADMIN_EMAIL,
      fromName: companyName,
      replyTo: formData.email, // Reply directly to the user
    });

    return {
      success: true,
      message: 'Emails sent successfully',
    };
  } catch (error) {
    console.error('Error sending form emails:', error);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
}