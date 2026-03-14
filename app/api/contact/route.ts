import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'hello@a10v.tech'

    // Without an API key, log locally (useful in development)
    if (!apiKey) {
      console.log('[A10V Contact Form]', { name, email, subject, message })
      return NextResponse.json({ ok: true })
    }

    // Send via Resend — https://resend.com (free tier available)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'A10V Website <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `New message from ${name}${subject ? ` — ${subject}` : ''}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <div style="background:linear-gradient(135deg,#2563eb,#0d9488);padding:24px 32px;border-radius:12px 12px 0 0">
              <h2 style="color:#fff;margin:0;font-size:20px">New contact from A10V website</h2>
            </div>
            <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:100px">Name</td><td style="padding:8px 0;font-weight:600;color:#0f172a">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Email</td><td style="padding:8px 0;color:#2563eb">${email}</td></tr>
                <tr><td style="padding:8px 0;color:#64748b;font-size:13px">Subject</td><td style="padding:8px 0;color:#0f172a">${subject || '—'}</td></tr>
              </table>
              <div style="margin-top:20px;padding:20px;background:#fff;border-radius:8px;border:1px solid #e2e8f0">
                <p style="color:#64748b;margin:0 0 8px;font-size:13px">Message</p>
                <p style="margin:0;color:#0f172a;white-space:pre-wrap;line-height:1.6">${message}</p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email service error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
