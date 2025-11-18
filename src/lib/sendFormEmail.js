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
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!BREVO_API_KEY) throw new Error('BREVO_API_KEY environment variable is not set');
  if (!ADMIN_EMAIL) throw new Error('ADMIN_EMAIL environment variable is not set');
  if (!BASE_URL) throw new Error('NEXT_PUBLIC_BASE_URL environment variable is not set');

  const CC_EMAILS = process.env.CC_EMAILS
    ?.split(',')
    .map((e) => e.trim())
    .filter((e) => e && isValidEmail(e)) || [];
  
  const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL || ADMIN_EMAIL;

  if (!isValidEmail(REPLY_TO_EMAIL)) {
    throw new Error('Invalid REPLY_TO_EMAIL address');
  }

  validateFormData(formData, formType);

  const themeColor = '#3c0366';
  const companyName = 'Robato Systems';

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

  const logoHTML = `
    <!-- LOGO ADDED HERE -->
    <div style="text-align:center; margin-bottom:20px;">
      <img src="${BASE_URL}/web-logo.png" alt="Company Logo" style="max-width:160px; height:auto;" />
    </div>
  `;

  if (formType === 'contact') {
    userSubject = 'Thank you for contacting us';
    adminSubject = `New Contact Form Submission: ${safeData.firstName} ${safeData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Segoe UI', sans-serif; color:#333; background:#f4f4f4; padding:40px 20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px;">
          
          ${logoHTML}

          <div style="background:${themeColor}; padding:40px 30px; text-align:center;">
            <h1 style="margin:0; font-size:32px; color:#ffffff;">${companyName}</h1>
          </div>

          <div style="padding:40px 30px; font-size:15px;">
            <p>Dear ${safeData.firstName} ${safeData.lastName},</p>
            <p>Thank you for contacting <strong>${companyName}</strong>. We have received your inquiry.</p>
            <p>Our team will respond within 24–48 business hours.</p>

            <div style="background:#f8f8f8; padding:15px; border-left:4px solid ${themeColor}; margin:25px 0;">
              <p><strong>Reference:</strong><br>Name: ${safeData.firstName} ${safeData.lastName}<br>Email: ${safeData.email}</p>
            </div>

            <div style="text-align:center;">
              <a href="${BASE_URL}" style="background:${themeColor}; color:#fff; padding:14px 32px; border-radius:4px; text-decoration:none;">Visit Website</a>
            </div>

            <p style="margin-top:30px;">Best regards,<br><strong>${companyName} Team</strong></p>
          </div>
        </div>
      </div>
    `;

    htmlAdmin = `
      <div style="font-family: Helvetica, Arial, sans-serif; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px;">
          
          ${logoHTML}

          <div style="background:${themeColor}; color:#fff; padding:20px; text-align:center;">
            <h1>${companyName}</h1>
          </div>

          <div style="padding:25px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor};">New Contact Form Submission</h2>
            <ul style="list-style:none; padding:0;">
              <li><strong>First Name:</strong> ${safeData.firstName}</li>
              <li><strong>Last Name:</strong> ${safeData.lastName}</li>
              <li><strong>Email:</strong> ${safeData.email}</li>
              <li><strong>Phone:</strong> ${safeData.phone}</li>
              <li><strong>Company:</strong> ${safeData.company}</li>
              <li><strong>Job Title:</strong> ${safeData.jobTitle}</li>
              <li style="margin-top:12px;"><strong>Message:</strong><br>${safeData.message}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  else if (formType === 'trial') {
    userSubject = 'Thank you for booking a demo';
    adminSubject = `New Trial Form Submission: ${safeData.firstName} ${safeData.lastName}`;

    htmlWelcome = `
      <div style="font-family: 'Segoe UI', sans-serif; background:#f4f4f4; padding:40px 20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px;">

          ${logoHTML}

          <div style="background:${themeColor}; padding:40px 30px; text-align:center;">
            <h1 style="color:white;">${companyName}</h1>
          </div>

          <div style="padding:40px 30px;">
            <p>Dear ${safeData.firstName} ${safeData.lastName},</p>
            <p>Thank you for requesting a demo. Our team will contact you within 24 business hours.</p>

            <div style="background:#f8f8f8; padding:15px; border-left:4px solid ${themeColor}; margin:25px 0;">
              <p><strong>Reference Info:</strong><br>Name: ${safeData.firstName} ${safeData.lastName}<br>Email: ${safeData.email}<br>Company: ${safeData.company}</p>
            </div>

            <div style="text-align:center;">
              <a href="${BASE_URL}" style="background:${themeColor}; color:white; padding:14px 32px; border-radius:4px; text-decoration:none;">Visit Website</a>
            </div>

            <p style="margin-top:30px;">Best regards,<br><strong>${companyName} Team</strong></p>
          </div>
        </div>
      </div>
    `;

    htmlAdmin = `
      <div style="font-family: Helvetica, Arial, sans-serif; background:#f7f7f7; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px;">

          ${logoHTML}

          <div style="background:${themeColor}; color:white; padding:20px; text-align:center;">
            <h1>${companyName}</h1>
          </div>

          <div style="padding:25px;">
            <h2 style="color:${themeColor}; border-bottom:2px solid ${themeColor};">New Trial Request</h2>
            <ul style="list-style:none; padding:0;">
              <li><strong>First Name:</strong> ${safeData.firstName}</li>
              <li><strong>Last Name:</strong> ${safeData.lastName}</li>
              <li><strong>Email:</strong> ${safeData.email}</li>
              <li><strong>Phone:</strong> ${safeData.phone}</li>
              <li><strong>Company:</strong> ${safeData.company}</li>
              <li><strong>Job Title:</strong> ${safeData.jobTitle}</li>
              <li><strong>Country:</strong> ${safeData.country}</li>
              <li style="margin-top:12px;"><strong>Message:</strong><br>${safeData.message}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Sends an email via Brevo API
   */
  const sendEmail = async (options) => {
    const { to, subject, html, fromEmail, fromName, cc = [], replyTo } = options;

    const emailPayload = {
      sender: { email: fromEmail, name: fromName },
      to: to.map((email) => ({ email })),
      replyTo: { email: replyTo },
      subject,
      htmlContent: html,
    };

    if (cc.length > 0) emailPayload.cc = cc.map((email) => ({ email }));

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
      throw new Error(`Brevo Error ${res.status}: ${json.message}`);
    }

    return json;
  };

  try {
    await sendEmail({
      to: [formData.email],
      subject: userSubject,
      html: htmlWelcome,
      fromEmail: ADMIN_EMAIL,
      fromName: companyName,
      replyTo: REPLY_TO_EMAIL,
    });

    await sendEmail({
      to: [ADMIN_EMAIL],
      cc: CC_EMAILS,
      subject: adminSubject,
      html: htmlAdmin,
      fromEmail: ADMIN_EMAIL,
      fromName: companyName,
      replyTo: formData.email,
    });

    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    throw new Error(`Email delivery failed: ${error.message}`);
  }
}
