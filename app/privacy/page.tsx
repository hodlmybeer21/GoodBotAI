import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GoodBotAI',
  description:
    'How GoodBotAI collects, uses, and protects personal information. We collect as little as possible and never sell data.',
}

export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-white/50 text-sm">
          Last updated: November 26, 2026
        </p>
      </header>

      <section className="space-y-10 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            The short version
          </h2>
          <p>
            GoodBotAI is a personal project run by Tyler Dubuque. It is built
            around an AI agent that helps with research, writing, and
            automation. We collect as little information as possible, we do
            not sell anything to anyone, and we do not use third-party
            advertising or tracking networks.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Information you give us
          </h2>
          <p>
            If you email us, use a contact form, or otherwise correspond with
            us, we receive whatever you send. That may include your name,
            email address, company, and the contents of your message. We use
            it only to reply and to keep a record of the correspondence.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Information the site collects automatically
          </h2>
          <p>
            Our hosting provider (Vercel) keeps standard server logs — IP
            address, timestamp, requested URL, and browser user agent — for
            security and abuse prevention. These logs are retained briefly
            and are not linked to an identity. We do not run Google Analytics,
            Facebook Pixel, or any other advertising tracker.
          </p>
          <p>
            The agent that powers this site may connect to third-party
            services you have explicitly authorized — for example your Google
            Drive or Google Calendar, so it can read the documents you ask it
            to read and place events on your calendar. Each such connection
            is scoped to a specific account, uses only the permissions you
            granted, and can be revoked by you at any time from the
            service&rsquo;s own settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Cookies and local storage
          </h2>
          <p>
            This site does not set advertising or analytics cookies. Where
            functionality requires it (for example remembering a preference),
            we use browser local storage rather than cookies, and we do not
            transmit that data to us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            How we use information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your email or questions.</li>
            <li>To operate, secure, and debug the site and its agent.</li>
            <li>To publish content you have asked us to publish.</li>
          </ul>
          <p className="mt-3">
            We do not use your information for advertising, profiling, or
            automated decision-making. We do not sell or rent personal
            information to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Data retention and deletion
          </h2>
          <p>
            Email correspondence is retained as long as needed to maintain
            the business record and to address any follow-up. Server logs are
            retained for a short operational window and then discarded. You
            can ask us to delete your correspondence at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Sharing
          </h2>
          <p>
            We do not sell personal information. We share information only
            with service providers who process it on our behalf to operate
            the site — for example the hosting provider — and where required
            by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Your choices and rights
          </h2>
          <p>
            You can ask at any time what information we hold about you, ask
            us to correct or delete it, or revoke access you have granted to
            a connected service. You can also object to how we process your
            information. Requests are handled by a human.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy, or a request relating to your
            information, can be sent to{' '}
            <a
              href="mailto:tyler.dubuque@gmail.com"
              className="text-brand-400 underline hover:text-brand-300"
            >
              tyler.dubuque@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Changes</h2>
          <p>
            If this policy changes materially, the date at the top of this
            page is updated and the revised version replaces this one.
          </p>
        </div>
      </section>
    </article>
  )
}
