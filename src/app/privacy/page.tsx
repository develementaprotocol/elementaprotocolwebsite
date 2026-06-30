import { ContactEmailLink } from "@/components/ui/ContactEmailLink";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata = {
  title: "Privacy Policy | Elementa Protocol",
  description:
    "How Elementa handles data for Elementa Wallet, self-custody keys, blockchain activity, dApp connections, and the website.",
};

export default function PrivacyPage() {
  const sections = [
    <LegalSection key="1" title="Introduction">
      <p>
        This Privacy Policy explains how Elementa Protocol (&quot;Elementa,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and protects information when you use our website, Elementa Wallet (including mobile or browser-based interfaces), and any related products or services (collectively, the &quot;Services&quot;).
      </p>
      <p>
        Elementa Wallet is built around self-custody: cryptographic keys that control your assets are generated and stored under your control, typically on your device, and are not sent to Elementa in a recoverable form. That design affects what data we have access to and what remains solely with you or on public networks.
      </p>
      <p>
        Elementa provides decentralized ecosystem infrastructure so users can view balances, prepare transactions, connect to networks, and interact with smart contracts and decentralized applications (&quot;dApps&quot;). Using crypto assets involves public blockchain activity; this policy describes both typical web/app analytics and data flows that are unique to wallets (such as chain queries and transaction broadcasting).
      </p>
      <p>This policy is intended for general informational purposes and is not legal advice.</p>
    </LegalSection>,
    <LegalSection key="2" title="Who We Are">
      <p>Elementa operates under the name Elementa Protocol.</p>
      <p>
        We develop and operate client software and interfaces (such as Elementa Wallet) that let you generate wallets, sign transactions and messages, and interact with third-party blockchains and protocols. We are not the operator of those underlying networks and do not custody user funds on your behalf when you use the wallet in self-custody mode.
      </p>
      <p><strong>Contact Email:</strong> <ContactEmailLink /></p>
    </LegalSection>,
    <LegalSection key="3" title="Self-Custody Wallet Model">
      <p>Elementa Wallet is a self-custody wallet. This means:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>You control your wallet, private keys, and Secret Recovery Phrase (seed phrase).</li>
        <li>We do not store, access, or recover your recovery phrase or private keys in ordinary operation.</li>
        <li>We cannot reset or restore lost wallet credentials if you lose your backup.</li>
        <li>You are solely responsible for securing your wallet, device, backups, and any hardware or extension you use.</li>
        <li>Never share your Secret Recovery Phrase or private keys with anyone, including Elementa representatives, legitimate support will never ask for them.</li>
        <li>
          Signing transactions or messages authorizes movements of assets or permissions on-chain (for example token approvals). Those actions are irreversible once confirmed on a blockchain; Elementa cannot undo them.
        </li>
      </ul>
      <p className="mt-4">
        Where the wallet offers connections to dApps (for example via deep links, browser extensions, or WalletConnect-style flows), you choose which sites or apps to trust. Elementa does not control third-party front ends and is not responsible for how they request signatures or process data, review connection prompts and contract details carefully.
      </p>
    </LegalSection>,
    <LegalSection key="4" title="Information We Collect">
      <p>We collect limited categories of information depending on your interaction with the Services.</p>
      
      <div className="mt-4 flex flex-col gap-2">
        <h3>Information You Provide</h3>
        <p>
          You choose what you send us directly. We treat voluntary submissions as personal data only where they identify or relate to an individual or device.
        </p>
        <p>You may provide information such as:</p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>
            <strong className="text-white/90">Contact and support:</strong> email address, name or handle if you include them, and the contents of messages when you contact us, report a bug, or request help. Keep wallet secrets out of email, support will not ask for seed phrases.
          </li>
          <li>
            <strong className="text-white/90">Newsletter or waitlists:</strong> if offered, an email address or communication preferences you submit through forms on our website.
          </li>
          <li>
            <strong className="text-white/90">Surveys and feedback:</strong> optional responses about product experience; may include coarse demographics if you choose to provide them.
          </li>
          <li>
            <strong className="text-white/90">Fiat or regulated flows:</strong> if you use an integrated on-ramp or partner that performs KYC, that partner, not Elementa, typically collects identity documents under its own policy; we may receive limited confirmation or reference IDs needed to complete the flow.
          </li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>Blockchain and Wallet Data</h3>
        <p>
          To show balances, transaction history, NFT or token metadata, and network status, the Services query blockchain nodes and indexers (often via remote procedure call &quot;RPC&quot; endpoints) using your public address(es) and may cache responses locally on your device.
        </p>
        <p>Depending on how you use Elementa Wallet, we or our subprocessors may process:</p>
        <ul className="list-disc pl-6 flex flex-col gap-1">
          <li>Public wallet addresses you add or generate in the app</li>
          <li>Public transaction hashes, block references, and chain identifiers</li>
          <li>Token, contract, and asset metadata returned by networks or third-party APIs (names, symbols, icons, subject to availability)</li>
          <li>Fee estimates, nonce information, and confirmation status needed to construct or track transactions</li>
          <li>Logs or diagnostics related to failed broadcasts or connectivity (which may include partial technical detail but not your private keys)</li>
        </ul>
        <p className="text-sm italic opacity-80 mt-1">
          Blockchain data is inherently public and generally cannot be deleted or altered once confirmed on-chain. Analytics providers or third parties may also correlate public addresses across applications, this is outside Elementa&apos;s control.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>Device and Usage Information</h3>
        <p>
          Like most applications, we collect technical telemetry so the Services can operate securely and so we can diagnose crashes. This category generally does not include the contents of your recovery phrase or private keys when the wallet is implemented as self-custody.
        </p>
        <p>When you use our website or wallet interface, we may collect:</p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>
            <strong className="text-white/90">Device and client identifiers:</strong> device type, operating system version, app build version, browser user-agent, language, and screen characteristics where useful for layout and compatibility.
          </li>
          <li>
            <strong className="text-white/90">Network identifiers:</strong> IP address, request timestamps, and coarse geolocation inferred from IP (e.g. country or region level), used for abuse prevention, rate limiting, and aggregated analytics.
          </li>
          <li>
            <strong className="text-white/90">Usage events:</strong> pages or screens viewed, button interactions at an aggregated level, session duration, and referral URLs, used to improve UX and funnel health.
          </li>
          <li>
            <strong className="text-white/90">Diagnostics:</strong> crash logs, stack traces, and performance traces that may be tied to a pseudonymous installation ID rather than your name.
          </li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>Third-Party Information</h3>
        <p>
          When you connect optional integrations, such as portfolio trackers, identity checks, or swap APIs, those providers may send us tokens or identifiers needed to complete the integration (for example a session token or attestation result).
        </p>
        <p>We may receive limited data from third-party services you choose to connect, such as:</p>
        <ul className="list-disc pl-6 flex flex-col gap-3">
          <li>Identity or fraud-prevention vendors when you complete their flows</li>
          <li>Blockchain indexers and APIs that resolve ENS-like names, token prices, or NFT metadata</li>
          <li>Analytics and security vendors that score traffic or detect bots</li>
        </ul>
        <p className="text-sm italic opacity-80 mt-2">
          Each third party is governed by its own privacy policy; read those notices before connecting wallet or identity to external sites.
        </p>
      </div>
    </LegalSection>,
    <LegalSection key="5" title="How We Use Information">
      <p>We use collected information to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Provide and maintain the website and wallet software</li>
        <li>Display balances, token/NFT information, and blockchain activity consistent with your addresses</li>
        <li>Route transaction submissions to networks and show confirmation status</li>
        <li>Improve performance, reliability, and user experience (including crash analytics where enabled)</li>
        <li>Provide customer support when you contact us</li>
        <li>Detect abuse, protect infrastructure, and investigate security incidents</li>
        <li>Comply with legal obligations and respond to lawful requests</li>
        <li>Develop and improve ecosystem features and documentation</li>
      </ul>
      <p>
        We do not use your private keys or Secret Recovery Phrase for marketing or profiling, because those secrets should remain only on your devices or in your physical backup, never transmitted to Elementa in recoverable form as part of normal self-custody operation.
      </p>
    </LegalSection>,
    <LegalSection key="6" title="Cookies and Tracking Technologies">
      <p>
        Our website may store small text files (cookies) or use similar storage (such as localStorage) to remember preferences, maintain sessions, or measure traffic. Wallet-specific flows may use strictly necessary storage on your device to keep UI state or security settings.
      </p>
      <p>Typical purposes include:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong className="text-white/90">Strictly necessary:</strong> load balancing, CSRF protection, cookie consent records, or authentication to secured areas of the site (if any).
        </li>
        <li>
          <strong className="text-white/90">Functional:</strong> remembered language, theme, or dismissed announcements.
        </li>
        <li>
          <strong className="text-white/90">Analytics or performance:</strong> aggregated statistics on which documentation pages are read or where users drop off, usually configured to minimize personal data.
        </li>
        <li>
          <strong className="text-white/90">Security:</strong> detecting repeated failed requests or bot traffic.
        </li>
      </ul>
      <p className="mt-4">
        You may disable non-essential cookies through our consent tool where provided, or through browser settings. Blocking all storage may break parts of the website or prevent optional features from working.
      </p>
    </LegalSection>,
    <LegalSection key="7" title="Analytics">
      <p>
        We may use first-party or third-party analytics to understand aggregate usage, for example which wallet features load slowly or which documentation sections are most viewed. Where feasible we configure tools to use pseudonymous identifiers rather than real names, and we avoid sending recovery phrases or private keys to analytics endpoints by design.
      </p>
      <p>This helps us improve:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>Performance and stability (crash rates, latency hotspots)</li>
        <li>Security monitoring (unusual traffic spikes or geographic anomalies)</li>
        <li>User experience (navigation paths, confusing flows)</li>
        <li>Roadmap prioritization for wallet and protocol documentation</li>
      </ul>
      <p className="mt-4">
        Depending on implementation, analytics events may include coarse device or app version metadata. They generally do not directly identify you unless you also submit identifying information through forms or support channels, which we may link under separate bases of processing.
      </p>
    </LegalSection>,
    <LegalSection key="8" title="How We Share Information">
      <p>
        We disclose information only where needed to run the Services, comply with law, or protect users. We do not sell your Secret Recovery Phrase or private keys, and in standard self-custody configurations we do not possess them in recoverable form.
      </p>
      <p>We may share information with:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong className="text-white/90">Infrastructure and hosting:</strong> cloud or CDN vendors that host website assets, API gateways, or logging pipelines under contractual confidentiality terms.
        </li>
        <li>
          <strong className="text-white/90">Blockchain networks:</strong> when you broadcast a signed transaction, nodes and validators receive it by design, this is public dissemination required for settlement, not a discretionary “sale” of personal data.
        </li>
        <li>
          <strong className="text-white/90">Analytics and security vendors:</strong> subprocessors that process pseudonymous event streams or scan for malware/phishing patterns.
        </li>
        <li>
          <strong className="text-white/90">Professional advisors:</strong> lawyers, accountants, or auditors bound by professional obligations.
        </li>
        <li>
          <strong className="text-white/90">Authorities:</strong> courts, regulators, or law enforcement when we believe in good faith that disclosure is required by law, subpoena, or to protect vital interests.
        </li>
      </ul>
      <p className="mt-4">
        If Elementa ever engages in a merger, financing, or acquisition, customer information may transfer as a business asset subject to safeguards and notice consistent with applicable law.
      </p>
    </LegalSection>,
    <LegalSection key="9" title="Public Blockchain Transparency">
      <p>Blockchain networks are public by design. This means:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Wallet addresses and transactions are visible on-chain</li>
        <li>Transaction history cannot be deleted or modified</li>
        <li>Anyone may view blockchain activity using public tools</li>
      </ul>
      <p>Elementa does not control or remove blockchain data.</p>
    </LegalSection>,
    <LegalSection key="9b" title="Wallet Connections, dApps, and Signing">
      <p>
        When you connect Elementa Wallet to a website, mobile app, or browser extension flow, you may be asked to approve a session or to sign messages or transactions. Those requests are initiated by third parties; Elementa surfaces information to help you decide, but you are responsible for verifying counterparties, contract addresses, amounts, token approvals, and network selection.
      </p>
      <p>Depending on the integration, we may process:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Connection identifiers, session metadata, or pairing codes used to establish a secure channel between your wallet and a dApp</li>
        <li>Typed data or human-readable summaries shown in signing prompts (so you can review what you authorize)</li>
        <li>Technical telemetry necessary to complete signing or relay operations (without exposing your seed phrase)</li>
      </ul>
      <p>
        Signed payloads are broadcast to supported networks according to your instructions. Neither Elementa nor any wallet can guarantee the behavior of smart contracts you interact with, only the terms encoded on-chain and the signatures you provide apply.
      </p>
    </LegalSection>,
    <LegalSection key="10" title="Data Retention">
      <p>
        For personal data we control (such as email in a support mailbox), we keep it only as long as needed for the purposes described in this policy, plus reasonable backup and audit windows.
      </p>
      <p>Typical drivers of retention include:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong className="text-white/90">Providing Services:</strong> active accounts, open tickets, or unresolved integration errors.
        </li>
        <li>
          <strong className="text-white/90">Security and fraud prevention:</strong> short rolling logs of abusive IPs or device fingerprints.
        </li>
        <li>
          <strong className="text-white/90">Legal compliance:</strong> statutory limitation periods, tax, or regulatory holds.
        </li>
        <li>
          <strong className="text-white/90">Legitimate interests:</strong> aggregated datasets that no longer identify individuals.
        </li>
      </ul>
      <p className="mt-4">
        On-chain activity is retained indefinitely on public ledgers by thousands of independent operators; Elementa cannot erase history there. Off-chain copies you request us to delete (where applicable) may persist in encrypted backups for a limited period before rotation.
      </p>
    </LegalSection>,
    <LegalSection key="11" title="Security">
      <p>We implement reasonable technical and organizational safeguards to protect information handled by our websites and infrastructure. However:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>No system is 100% secure</li>
        <li>Crypto wallets are high-value targets for phishing, malware, clipboard hijacking, and fake support scams</li>
        <li>You are responsible for securing your devices, OS updates, antivirus posture (where applicable), and physical access to backups</li>
        <li>Malicious browser extensions or compromised apps may attempt to substitute addresses or trick you into signing harmful transactions</li>
      </ul>
      <p>
        Always verify recipient addresses, contract names, token approvals, and network names before confirming. If you suspect unauthorized access or that your seed phrase has been exposed, move assets to a newly generated wallet with a fresh seed phrase and discontinue use of the compromised credentials.
      </p>
    </LegalSection>,
    <LegalSection key="12" title="Your Rights and Choices">
      <p>Depending on your jurisdiction, you may have rights to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Object to certain processing</li>
        <li>Withdraw consent where applicable</li>
      </ul>
      <p>To exercise any rights, contact us at <ContactEmailLink />.</p>
      <p>We may require verification before fulfilling requests.</p>
      <p className="text-sm italic opacity-80 mt-1">Note: We cannot delete or alter blockchain transactions.</p>
    </LegalSection>,
    <LegalSection key="13" title="International Data Transfers">
      <p>
        Elementa and its service providers may process information in the European Economic Area, United Kingdom, United States, or other regions where we or our vendors operate data centers. Those countries may not be deemed “adequate” by your local regulator.
      </p>
      <p>
        Where GDPR, UK GDPR, or similar frameworks apply, we rely on appropriate safeguards such as Standard Contractual Clauses, supplementary technical measures (encryption in transit), and data minimization. You may request a summary of relevant mechanisms by contacting us.
      </p>
      <p>
        Blockchain networks themselves are global: transaction data you broadcast may be replicated worldwide regardless of where Elementa servers sit.
      </p>
    </LegalSection>,
    <LegalSection key="14" title="Children's Privacy">
      <p>
        The Services, including self-custody wallet software, are not directed at children under 13 (U.S.) or under the digital-consent age defined in your jurisdiction (often 16 for GDPR-related activities).
      </p>
      <p>
        We do not knowingly collect personal information from children for marketing purposes. If you believe a minor has provided us personal data (for example via a support email), contact us and we will delete or anonymize it where required by law, unless we must retain a minimal record for legal reasons.
      </p>
      <p>
        Parents and guardians are responsible for supervising minors&apos; use of financial or cryptographic tools; self-custody wallets can move irreversible value and should be handled with age-appropriate care.
      </p>
    </LegalSection>,
    <LegalSection key="15" title="Third-Party Services">
      <p>Elementa may interact with third-party services such as:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Public blockchain networks and their validators or miners</li>
        <li>RPC providers, indexers, explorers, and oracle or price feeds</li>
        <li>Wallet connectors, deep-link handlers, and pairing relay services</li>
        <li>Decentralized and centralized exchanges, bridges, aggregators, or swap routers you choose to use</li>
        <li>Fiat on/off-ramp, KYC, or compliance vendors where you opt in</li>
        <li>Analytics, crash reporting, and security vendors that assist our infrastructure</li>
      </ul>
      <p>
        Each third party has its own privacy policy and may collect data independently (for example when you visit their website or complete KYC). Elementa does not control on-chain protocols; smart-contract logic and liquidity pools are governed by their respective code and communities.
      </p>
    </LegalSection>,
    <LegalSection key="16" title="Changes to This Policy">
      <p>
        We may update this Privacy Policy to reflect new features (such as additional chains), legal requirements, or organizational changes. Material updates will be posted on this page with a revised &quot;Last Updated&quot; date and, where appropriate, a short notice on our website or inside the app.
      </p>
      <p>When updates are made:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>The &quot;Last Updated&quot; date at the top of the policy will change</li>
        <li>Significant reductions to privacy rights or new disclosures may include extra prominence or email notice where we have your address and the law requires</li>
        <li>Continued use of the Services after the effective date constitutes acceptance of the revised policy, except where your explicit consent is required</li>
      </ul>
      <p className="mt-4">
        If you disagree with material changes, stop using the Services and uninstall wallet clients after exporting any data you are legally entitled to retain.
      </p>
    </LegalSection>,
    <LegalSection key="17" title="Contact Us">
      <p>For privacy-related requests, including questions about this policy, data access or deletion (where applicable), or complaints, contact:</p>
      <p>
        <strong>Email:</strong>{" "}
        <ContactEmailLink />
      </p>
      <p className="mt-4">
        Please include enough detail for us to verify your request without asking for sensitive wallet secrets. We may ask for additional information to confirm identity and prevent unauthorized disclosure.
      </p>
      <p>
        If you reside in the EEA, UK, or certain U.S. states, you may also have the right to lodge a complaint with your local data protection authority, however we encourage you to reach out to us first so we can resolve issues promptly.
      </p>
    </LegalSection>
  ];

  return (
    <LegalPageLayout
      title="Privacy"
      titleAccent="Policy"
      subtitle="How Elementa collects, uses, and protects your information when you use our services."
      lastUpdated="May 2026"
    >
      {sections}
    </LegalPageLayout>
  );
}
