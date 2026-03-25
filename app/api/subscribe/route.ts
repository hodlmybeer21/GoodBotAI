import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // TODO: Integrate Resend when domain is verified
    // RESEND_API_KEY = process.env.RESEND_API_KEY
    // const resend = new Resend(RESEND_API_KEY)
    // await resend.contacts.create({
    //   audienceId: process.env.RESEND_AUDIENCE_ID,
    //   email,
    //   unsubscribed: false,
    // })

    console.log('Newsletter signup (demo):', email)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
