import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | GoodBotAI',
  description:
    'The terms that govern your use of GoodBotAI, a personal project by Tyler Dubuque featuring an AI agent.',
}

export default function TermsOfService() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Terms of Service
        </h1>
        <p className="text-white/50 text-sm">
          Last updated: November 26, 2026
        </p>
      </header>

      <section className="space-y-10 text-white/70 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Agreement to these terms
          </h2>
          <p>
            By accessing or using GoodBotAI (the &ldquo;Site&rdquo;), or by
            using the AI agent that powers it (the &ldquo;Agent&rdquo;), you
            agree to these Terms of Service. If you do not agree, please do
            not use the Site. The Site is operated by Tyler Dubuque
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            What the Site and Agent are
          </h2>
          <p>
            GoodBotAI is a personal, non-commercial project. The Agent
            performs research, drafting, and automation tasks. It is a tool,
            not a professional advisor, and its output is generated
            automatically.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            No warranty; informational content only
          </h2>
          <p>
            The Site and the Agent are provided &ldquo;as is&rdquo; and
            &ldquo;as available,&rdquo; without warranties of any kind,
            express or implied, including merchantability, fitness for a
            particular purpose, accuracy, and non-infringement.
          </p>
          <p>
            Content published on the Site — including anything produced with
            the Agent — is provided for general informational and
            educational purposes only. It is not legal, tax, medical,
            financial, or investment advice, and it should not be relied upon
            as such. Verify anything important against the primary source
            before you act on it. We are not liable for any loss arising
            from your reliance on Site content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Acceptable use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              Use the Site or Agent in violation of any law or third-party
              right.
            </li>
            <li>
              Attempt to gain unauthorized access to the Site, its
              infrastructure, or any connected account.
            </li>
            <li>
              Introduce malicious code, or interfere with the Site&rsquo;s
              operation.
            </li>
            <li>
              Scrape, resell, or republish substantial portions of the Site
              without our written permission.
            </li>
            <li>
              Use the Agent to send unsolicited bulk communications, or to
              access any third-party account you are not authorized to use.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Connected accounts and your responsibilities
          </h2>
          <p>
            You may authorize the Agent to act on your behalf in third-party
            services such as Google Drive or Google Calendar. You are
            responsible for the permissions you grant and for reviewing
            anything the Agent does with them. Keep your access tokens
            secure, and revoke access you no longer want. We are not
            responsible for actions taken under your authorization.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Intellectual property
          </h2>
          <p>
            The Site&rsquo;s design, code, branding, and original content are
            owned by us and protected by intellectual property law. You may
            view, link to, and quote from the Site with attribution. You may
            not reproduce it wholesale, republish substantial portions, or
            use our marks without permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Third-party links
          </h2>
          <p>
            The Site links to third-party sites we do not control. We are not
            responsible for their content, availability, or practices. Links
            are provided for convenience and do not imply endorsement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, special, consequential, or punitive
            damages, or for any loss of profits, data, goodwill, or business
            opportunity, arising out of your use of the Site or the Agent.
            Our total aggregate liability for all claims relating to the Site
            will not exceed the greater of the amount you paid to use the
            Site (which is $0) or fifty dollars ($50).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Indemnity
          </h2>
          <p>
            You agree to indemnify and hold us harmless from any claim,
            demand, loss, or expense (including reasonable attorneys&rsquo;
            fees) arising out of your use of the Site, your violation of
            these terms, or your infringement of any third-party right.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Changes and termination
          </h2>
          <p>
            We may modify these terms, or change or discontinue any part of
            the Site, at any time. Continued use of the Site after a change
            constitutes acceptance. We may suspend or terminate access if you
            breach these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a
              href="mailto:tyler.dubuque@gmail.com"
              className="text-brand-400 underline hover:text-brand-300"
            >
              tyler.dubuque@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  )
}
