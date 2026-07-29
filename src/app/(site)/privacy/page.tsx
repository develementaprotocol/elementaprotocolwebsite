import { ContactEmailLink } from "@/components/ui/ContactEmailLink";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata = {
  title: "Privacy Policy | Elementa Protocol",
  description:
    "How Elementa Protocol collects, uses, stores, protects, and discloses information in connection with the Elementa ecosystem.",
};

export default function PrivacyPage() {
  const sections = [
    <LegalSection key="intro" title="Introduction">
      <p>
        This Privacy Policy (&quot;Privacy Policy&quot;) explains how Elementa Protocol
        (&quot;Elementa,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, protects, and
        discloses information in connection with the Elementa ecosystem, including
        the Elementa Wallet application, website, desktop applications, mobile
        applications, software, APIs, interfaces, and related services
        (collectively, the &quot;Services&quot;).
      </p>
      <p>
        This Privacy Policy applies to information processed through the Services
        and explains your rights and choices regarding your personal information.
      </p>
      <p>
        By accessing or using the Services, you acknowledge that you have read and
        understood this Privacy Policy.
      </p>
      <p>
        If you do not agree with this Privacy Policy, you should not access or use
        the Services.
      </p>
    </LegalSection>,

    <LegalSection key="1" title="1. Our Commitment to Your Privacy">
      <p>Elementa respects the privacy and security of its users.</p>
      <p>We are committed to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>collecting only information reasonably necessary for legitimate purposes;</li>
        <li>using personal information in accordance with applicable law;</li>
        <li>implementing reasonable technical and organizational safeguards;</li>
        <li>
          limiting access to personal information to authorized personnel and service
          providers;
        </li>
        <li>being transparent about how information is collected and used;</li>
        <li>
          protecting information against unauthorized access, loss, misuse, alteration,
          and disclosure; and
        </li>
        <li>respecting applicable privacy rights.</li>
      </ul>
      <p className="mt-4">We do not sell your personal information for money.</p>
      <p>
        We do not intentionally collect information that is not reasonably necessary
        for operating, securing, improving, supporting, or legally complying with the
        Services.
      </p>
      <p>
        However, no internet-based service, software system, digital storage system,
        or transmission method can be guaranteed to be completely secure.
      </p>
      <p>
        Accordingly, while we use reasonable safeguards to protect your information,
        we cannot guarantee absolute security.
      </p>
    </LegalSection>,

    <LegalSection key="2" title="2. Important Information About the Non-Custodial Wallet">
      <p>Elementa provides non-custodial wallet software.</p>
      <p>
        This means that Elementa does not generally take custody or control of your
        Digital Assets or private cryptographic keys.
      </p>
      <p>
        Your blockchain transactions may be publicly visible on the applicable
        blockchain network.
      </p>
      <p>
        A blockchain address may be publicly associated with transaction history and
        other blockchain data.
      </p>
      <p>
        Although blockchain addresses may not directly contain your legal name,
        blockchain data may potentially be linked with other information in certain
        circumstances.
      </p>
      <p>
        You should therefore carefully consider what information you connect, submit,
        or associate with your Wallet.
      </p>
      <p>
        The non-custodial nature of the Wallet does not mean that Elementa collects no
        information.
      </p>
      <p>
        Depending on how you use the Services, Elementa may process information such
        as account information, device information, technical information, wallet
        addresses, transaction-related information, support communications, analytics
        data, and information received from third-party providers.
      </p>
    </LegalSection>,

    <LegalSection key="3" title="3. Information We Collect">
      <p>
        The information we collect depends on how you use the Services. We may collect
        the following categories of information.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.1 Account and Authentication Information</h3>
        <p>
          If you create or access an Elementa account, we may collect information such
          as:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>email address;</li>
          <li>username;</li>
          <li>account identifier;</li>
          <li>authentication provider identifier;</li>
          <li>OAuth account identifier;</li>
          <li>authentication metadata;</li>
          <li>account creation date;</li>
          <li>login and authentication activity; and</li>
          <li>information necessary to maintain account security.</li>
        </ul>
        <p className="mt-2">
          If you use a third-party authentication provider, such as an OAuth provider,
          we may receive information permitted by that provider and authorized by you.
        </p>
        <p>
          We do not necessarily receive or store your third-party account password.
          Authentication providers may process your information according to their own
          privacy policies.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.2 Wallet Information</h3>
        <p>
          Depending on the Wallet architecture and features you use, we may process:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>public blockchain addresses;</li>
          <li>wallet identifiers;</li>
          <li>supported blockchain networks;</li>
          <li>transaction-related information;</li>
          <li>wallet configuration information;</li>
          <li>encrypted wallet-related data;</li>
          <li>encrypted recovery information, where applicable;</li>
          <li>device associations;</li>
          <li>wallet activity metadata; and</li>
          <li>technical information required to provide wallet functionality.</li>
        </ul>
        <p className="mt-2">
          <strong>Private Keys and Recovery Credentials</strong>
        </p>
        <p>Elementa is designed to operate as a non-custodial wallet provider.</p>
        <p>
          Elementa does not intentionally collect or store user private keys or
          recovery phrases in plaintext.
        </p>
        <p>
          Where an encrypted backup or recovery mechanism is provided, certain
          encrypted data may be stored by Elementa or its infrastructure providers.
        </p>
        <p>
          The ability of Elementa to access or decrypt such information depends on the
          technical architecture of the applicable feature.
        </p>
        <p>
          You are responsible for understanding and securing your own Wallet access
          mechanisms.
        </p>
        <p>
          You should never voluntarily provide your private key or recovery phrase to
          Elementa personnel or any unauthorized person.
        </p>
        <p>
          Elementa will not request your private key or recovery phrase through
          ordinary customer support communications.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.3 Blockchain Information</h3>
        <p>
          When you use the Services to interact with a blockchain network, we may
          process or receive information such as:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>public wallet addresses;</li>
          <li>transaction hashes;</li>
          <li>transaction amounts;</li>
          <li>token or Digital Asset information;</li>
          <li>blockchain network information;</li>
          <li>smart contract addresses;</li>
          <li>transaction status;</li>
          <li>network fees;</li>
          <li>timestamps; and</li>
          <li>other publicly available blockchain information.</li>
        </ul>
        <p className="mt-2">
          Blockchain networks are decentralized public systems. Information recorded
          on a blockchain may be permanently public and may not be capable of being
          deleted, modified, or removed by Elementa. Elementa does not control the
          data retention practices of blockchain networks.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.4 Device and Technical Information</h3>
        <p>When you access the Services, we may collect technical information such as:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>device type;</li>
          <li>operating system;</li>
          <li>operating system version;</li>
          <li>application version;</li>
          <li>browser type;</li>
          <li>language settings;</li>
          <li>time zone;</li>
          <li>device identifiers;</li>
          <li>mobile advertising identifiers, where applicable and permitted;</li>
          <li>IP address;</li>
          <li>approximate location derived from IP address;</li>
          <li>network information;</li>
          <li>internet service provider information;</li>
          <li>crash logs;</li>
          <li>diagnostic information;</li>
          <li>performance information; and</li>
          <li>security-related information.</li>
        </ul>
        <p className="mt-2">
          We use this information to operate, secure, troubleshoot, and improve the
          Services.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.5 Log Information</h3>
        <p>
          Our systems may automatically record information about your interaction with
          the Services, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>access times;</li>
          <li>pages or features accessed;</li>
          <li>application events;</li>
          <li>error logs;</li>
          <li>system events;</li>
          <li>authentication events;</li>
          <li>security events;</li>
          <li>IP addresses; and</li>
          <li>other technical logs.</li>
        </ul>
        <p className="mt-2">Logs may be used for:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>security;</li>
          <li>fraud prevention;</li>
          <li>troubleshooting;</li>
          <li>system monitoring;</li>
          <li>service improvement;</li>
          <li>legal compliance; and</li>
          <li>incident investigation.</li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.6 Information You Provide to Customer Support</h3>
        <p>If you contact us, we may collect:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>your name;</li>
          <li>email address;</li>
          <li>account identifier;</li>
          <li>support request;</li>
          <li>communications with us;</li>
          <li>screenshots;</li>
          <li>documents or attachments you voluntarily submit; and</li>
          <li>other information you provide.</li>
        </ul>
        <p className="mt-2">
          You should not send private keys, recovery phrases, passwords, or other
          sensitive wallet credentials to customer support. Elementa will never require
          your private key or recovery phrase for ordinary support.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>3.7 KYC and Identity Verification Information</h3>
        <p>
          Certain services available through the Elementa ecosystem may be provided by
          third parties and may require identity verification.
        </p>
        <p>Where applicable, a third-party provider may collect information such as:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>full name;</li>
          <li>date of birth;</li>
          <li>nationality;</li>
          <li>residential information;</li>
          <li>government identification documents;</li>
          <li>selfie or biometric verification information;</li>
          <li>source-of-funds information;</li>
          <li>tax information;</li>
          <li>sanctions screening information; and</li>
          <li>other information required for regulatory compliance.</li>
        </ul>
        <p className="mt-2">
          Where KYC or identity verification is provided by a third-party provider, the
          provider may independently process your personal information under its own
          privacy policy.
        </p>
        <p>Elementa may receive limited information from the provider, such as:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>verification status;</li>
          <li>compliance status;</li>
          <li>transaction eligibility;</li>
          <li>rejection status;</li>
          <li>risk signals; or</li>
          <li>other information necessary to provide the relevant service.</li>
        </ul>
        <p className="mt-2">
          The exact information shared with Elementa depends on the applicable
          third-party provider and integration.
        </p>
      </div>
    </LegalSection>,

    <LegalSection key="4" title="4. Information Collected Through Third-Party Services">
      <p>Elementa may integrate with third-party service providers. These may include:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>authentication providers;</li>
        <li>blockchain infrastructure providers;</li>
        <li>RPC providers;</li>
        <li>on-ramp providers;</li>
        <li>off-ramp providers;</li>
        <li>KYC providers;</li>
        <li>payment processors;</li>
        <li>analytics providers;</li>
        <li>application performance providers;</li>
        <li>cloud infrastructure providers;</li>
        <li>customer support platforms;</li>
        <li>security providers; and</li>
        <li>other technology providers.</li>
      </ul>
      <p className="mt-4">
        Third-party providers may independently collect information from you. Their
        processing of personal information may be governed by their own privacy
        policies and terms. You should review the privacy policies of third-party
        services before using them.
      </p>
    </LegalSection>,

    <LegalSection key="5" title="5. How We Use Information">
      <p>We may use information for the following purposes.</p>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.1 Providing the Services</h3>
        <p>We may use information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>create and manage accounts;</li>
          <li>authenticate users;</li>
          <li>provide Wallet functionality;</li>
          <li>facilitate application functionality;</li>
          <li>connect users to blockchain networks;</li>
          <li>display transaction information;</li>
          <li>provide support;</li>
          <li>provide requested features; and</li>
          <li>operate the Services.</li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.2 Security and Fraud Prevention</h3>
        <p>We may use information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>detect suspicious activity;</li>
          <li>prevent fraud;</li>
          <li>detect unauthorized access;</li>
          <li>protect accounts;</li>
          <li>protect infrastructure;</li>
          <li>investigate security incidents;</li>
          <li>identify abuse;</li>
          <li>enforce security controls; and</li>
          <li>protect users and the Services.</li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.3 Legal and Regulatory Compliance</h3>
        <p>We may process information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>comply with applicable laws;</li>
          <li>respond to lawful requests;</li>
          <li>comply with court orders;</li>
          <li>comply with subpoenas;</li>
          <li>respond to regulators;</li>
          <li>respond to law enforcement;</li>
          <li>comply with sanctions requirements;</li>
          <li>prevent unlawful activity;</li>
          <li>investigate suspected violations; and</li>
          <li>protect our legal rights.</li>
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.4 Service Improvement</h3>
        <p>We may use technical and usage information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>improve performance;</li>
          <li>understand feature usage;</li>
          <li>diagnose problems;</li>
          <li>develop new features;</li>
          <li>improve user experience;</li>
          <li>monitor application reliability; and</li>
          <li>improve security.</li>
        </ul>
        <p className="mt-2">
          Where possible, we may use aggregated, statistical, or de-identified
          information for these purposes.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.5 Communications</h3>
        <p>We may use contact information to:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>respond to support requests;</li>
          <li>provide service communications;</li>
          <li>provide security alerts;</li>
          <li>notify users of material changes;</li>
          <li>send administrative messages; and</li>
          <li>provide information related to the Services.</li>
        </ul>
        <p className="mt-2">
          Where required by law, marketing communications will be subject to
          applicable consent and opt-out requirements.
        </p>
      </div>
    </LegalSection>,

    <LegalSection key="6" title="6. Legal Bases for Processing">
      <p>
        Where applicable privacy laws require a legal basis for processing personal
        information, we may process information based on one or more of the following:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong>Consent</strong> — Where you have provided
          consent.
        </li>
        <li>
          <strong>Contractual Necessity</strong> — Where
          processing is necessary to provide requested Services or perform an agreement
          with you.
        </li>
        <li>
          <strong>Legal Obligation</strong> — Where processing
          is required to comply with applicable law.
        </li>
        <li>
          <strong>Legitimate Interests</strong> — Where
          processing is reasonably necessary for legitimate business purposes,
          including: security; fraud prevention; service improvement; technical
          operations; business administration; protecting legal rights; and preventing
          misuse.
        </li>
        <li>
          <strong>Protection of Vital Interests</strong> —
          Where necessary to protect the vital interests of an individual or another
          person, where legally permitted.
        </li>
      </ul>
      <p className="mt-4">
        The applicable legal basis depends on the specific processing activity and
        applicable law.
      </p>
    </LegalSection>,

    <LegalSection key="7" title="7. How We Share Information">
      <p>We may share information in the following circumstances.</p>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.1 Service Providers</h3>
        <p>
          We may share information with service providers that help us operate the
          Services. These may include providers of:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>cloud hosting;</li>
          <li>databases;</li>
          <li>authentication;</li>
          <li>security;</li>
          <li>analytics;</li>
          <li>customer support;</li>
          <li>infrastructure;</li>
          <li>monitoring;</li>
          <li>communications;</li>
          <li>payment processing;</li>
          <li>KYC;</li>
          <li>compliance;</li>
          <li>fraud prevention; and</li>
          <li>technical services.</li>
        </ul>
        <p className="mt-2">
          Service providers may process information only as necessary to provide
          services to us or as otherwise permitted by applicable law.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.2 Blockchain Networks</h3>
        <p>
          When you initiate a blockchain transaction, information necessary to process
          that transaction may be transmitted to the relevant blockchain network.
          Blockchain transactions may become publicly visible. Elementa cannot control
          or delete information permanently recorded on a public blockchain.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.3 On-Ramp and Off-Ramp Providers</h3>
        <p>
          If you use an on-ramp or off-ramp service, information may be shared with the
          relevant provider to process the requested transaction. The provider may
          require:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>identity verification;</li>
          <li>payment information;</li>
          <li>transaction information;</li>
          <li>compliance screening; and</li>
          <li>other information.</li>
        </ul>
        <p className="mt-2">
          The provider&apos;s own privacy policy applies to its processing of your
          information.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.4 KYC and Compliance Providers</h3>
        <p>
          Where required, information may be shared with identity verification, KYC,
          AML, fraud prevention, and sanctions screening providers. These providers may
          process information according to applicable laws and their own privacy
          policies.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.5 Legal and Government Requests</h3>
        <p>
          We may disclose information where we reasonably believe disclosure is
          necessary to:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>comply with applicable law;</li>
          <li>comply with a court order;</li>
          <li>respond to a subpoena;</li>
          <li>respond to lawful law enforcement requests;</li>
          <li>respond to regulators;</li>
          <li>protect the rights, property, or safety of Elementa;</li>
          <li>protect users or the public;</li>
          <li>investigate fraud;</li>
          <li>investigate security incidents; or</li>
          <li>enforce our legal agreements.</li>
        </ul>
        <p className="mt-2">
          We may disclose information where legally required or legally permitted.
          Where legally permitted, we may attempt to provide notice before disclosure.
          However, we may not be able to provide notice where: prohibited by law;
          prohibited by a legal order; doing so could interfere with an investigation;
          there is an urgent safety concern; or notification is otherwise impractical.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.6 Business Transfers</h3>
        <p>
          If Elementa is involved in a merger, acquisition, restructuring, financing,
          sale of assets, bankruptcy, reorganization, or similar transaction, personal
          information may be transferred as part of that transaction, subject to
          applicable law.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>7.7 With Your Direction</h3>
        <p>We may share information when you direct or authorize us to do so.</p>
      </div>
    </LegalSection>,

    <LegalSection key="8" title="8. Data Security">
      <p>
        Elementa takes reasonable technical and organizational measures designed to
        protect personal information. Depending on the nature of the information and
        the risks involved, safeguards may include:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>encryption in transit;</li>
        <li>encryption at rest where appropriate;</li>
        <li>access controls;</li>
        <li>authentication controls;</li>
        <li>least-privilege access;</li>
        <li>security monitoring;</li>
        <li>logging;</li>
        <li>infrastructure security;</li>
        <li>vulnerability management;</li>
        <li>backup controls;</li>
        <li>incident response procedures; and</li>
        <li>internal security practices.</li>
      </ul>
      <p className="mt-4">
        Access to personal information is limited to personnel and service providers
        who require access for legitimate purposes.
      </p>
      <p>However, no security system is completely secure. We cannot guarantee that:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>unauthorized access will never occur;</li>
        <li>data transmission will always be secure;</li>
        <li>the Services will never be attacked;</li>
        <li>information will never be lost; or</li>
        <li>a security incident will never occur.</li>
      </ul>
      <p className="mt-4">
        You are also responsible for protecting your own credentials and devices. You
        should:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>use strong passwords;</li>
        <li>protect authentication credentials;</li>
        <li>enable available security features;</li>
        <li>avoid sharing account access;</li>
        <li>keep devices updated;</li>
        <li>avoid suspicious links;</li>
        <li>protect recovery credentials; and</li>
        <li>immediately report suspected unauthorized activity.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="9" title="9. Data Retention">
      <p>
        We retain personal information only for as long as reasonably necessary for the
        purposes described in this Privacy Policy, including:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>providing the Services;</li>
        <li>maintaining business records;</li>
        <li>fulfilling legal obligations;</li>
        <li>resolving disputes;</li>
        <li>enforcing agreements;</li>
        <li>preventing fraud;</li>
        <li>maintaining security; and</li>
        <li>protecting legal rights.</li>
      </ul>
      <p className="mt-4">Retention periods may vary depending on:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>the type of information;</li>
        <li>the purpose of processing;</li>
        <li>legal requirements;</li>
        <li>regulatory requirements;</li>
        <li>security considerations; and</li>
        <li>operational requirements.</li>
      </ul>
      <p className="mt-4">
        Some information may be retained for longer periods where required by law.
        Information permanently recorded on public blockchains may not be capable of
        deletion by Elementa.
      </p>
    </LegalSection>,

    <LegalSection key="10" title="10. International Data Transfers">
      <p>
        Elementa and its service providers may process information in countries other
        than the country where you reside. Those countries may have privacy laws that
        differ from the laws of your country.
      </p>
      <p>
        Where applicable law requires safeguards for international transfers, we will
        seek to implement appropriate safeguards.
      </p>
      <p>
        By using the Services, you acknowledge that information may be processed
        internationally, subject to applicable law.
      </p>
    </LegalSection>,

    <LegalSection key="11" title="11. Your Privacy Rights">
      <p>
        Depending on your jurisdiction, you may have rights regarding your personal
        information. These rights may include the right to:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>request access to personal information;</li>
        <li>request correction of inaccurate information;</li>
        <li>request deletion of information;</li>
        <li>request restriction of processing;</li>
        <li>object to certain processing;</li>
        <li>request data portability;</li>
        <li>withdraw consent where processing is based on consent; and</li>
        <li>lodge a complaint with a relevant data protection authority.</li>
      </ul>
      <p className="mt-4">
        These rights are not absolute. We may be required to retain certain information
        to:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>comply with legal obligations;</li>
        <li>prevent fraud;</li>
        <li>maintain security;</li>
        <li>establish or defend legal claims;</li>
        <li>comply with regulatory requirements; or</li>
        <li>fulfill other lawful purposes.</li>
      </ul>
      <p className="mt-4">
        To exercise applicable privacy rights, contact us at <ContactEmailLink />. We
        may need to verify your identity before processing a privacy request.
      </p>
    </LegalSection>,

    <LegalSection key="12" title="12. Account Deletion">
      <p>Where available, you may request deletion of your Elementa account.</p>
      <p>
        Account deletion may not result in the deletion of all information. We may
        retain information where reasonably necessary or legally required for:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>legal compliance;</li>
        <li>fraud prevention;</li>
        <li>security;</li>
        <li>dispute resolution;</li>
        <li>recordkeeping;</li>
        <li>tax or accounting purposes;</li>
        <li>regulatory obligations; or</li>
        <li>
          the establishment, exercise, or defense of legal claims.
        </li>
      </ul>
      <p className="mt-4">
        Information recorded on public blockchains cannot generally be deleted or
        modified by Elementa.
      </p>
    </LegalSection>,

    <LegalSection key="13" title="13. Cookies and Similar Technologies">
      <p>
        The Elementa website and certain Services may use cookies and similar
        technologies. These technologies may be used for:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>essential functionality;</li>
        <li>security;</li>
        <li>authentication;</li>
        <li>analytics;</li>
        <li>performance;</li>
        <li>preferences; and</li>
        <li>marketing, where applicable and legally permitted.</li>
      </ul>
      <p className="mt-4">
        You may be able to control cookies through your browser settings. Disabling
        certain cookies may affect the functionality of the Services.
      </p>
    </LegalSection>,

    <LegalSection key="14" title="14. Analytics and Product Improvement">
      <p>
        Elementa may use analytics and application monitoring tools to understand how
        users interact with the Services. These tools may collect information such as:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>device information;</li>
        <li>application events;</li>
        <li>usage patterns;</li>
        <li>crash information;</li>
        <li>technical information;</li>
        <li>IP address information;</li>
        <li>approximate location; and</li>
        <li>other analytics information.</li>
      </ul>
      <p className="mt-4">
        Where third-party analytics providers are used, those providers may process
        information according to their own privacy policies. Elementa may use
        aggregated or de-identified information to understand trends and improve the
        Services.
      </p>
    </LegalSection>,

    <LegalSection key="15" title="15. Children's Privacy">
      <p>
        The Services are not intended for individuals who are not legally permitted to
        use them under applicable law.
      </p>
      <p>
        We do not knowingly collect personal information from children in violation of
        applicable law.
      </p>
      <p>
        If you believe that a child has provided personal information to us
        inappropriately, contact us. If we learn that we have collected personal
        information from a child in circumstances where collection was not permitted,
        we will take reasonable steps to address the situation as required by
        applicable law.
      </p>
    </LegalSection>,

    <LegalSection key="16" title="16. Third-Party Websites and Services">
      <p>
        The Services may contain links to third-party websites, applications, services,
        or platforms. Elementa is not responsible for the privacy practices of third
        parties.
      </p>
      <p>
        Your use of third-party services is governed by their own terms and privacy
        policies. You should review those policies before providing information to
        third parties.
      </p>
    </LegalSection>,

    <LegalSection key="17" title="17. Data Breaches and Security Incidents">
      <p>
        If Elementa becomes aware of a security incident involving personal
        information, we will assess the incident and take reasonable steps as required
        by applicable law. Depending on the circumstances, this may include:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>investigating the incident;</li>
        <li>containing the incident;</li>
        <li>taking corrective action;</li>
        <li>notifying relevant authorities;</li>
        <li>notifying affected users where legally required; and</li>
        <li>implementing measures to prevent recurrence.</li>
      </ul>
      <p className="mt-4">
        We cannot guarantee that every security incident can be prevented.
      </p>
    </LegalSection>,

    <LegalSection key="18" title="18. Privacy of Blockchain Transactions">
      <p>
        You acknowledge that blockchain networks are generally decentralized and
        transparent. Transactions may reveal information such as:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>wallet addresses;</li>
        <li>transaction amounts;</li>
        <li>token types;</li>
        <li>timestamps;</li>
        <li>transaction history; and</li>
        <li>smart contract interactions.</li>
      </ul>
      <p className="mt-4">
        Once information is recorded on a public blockchain, it may be permanently
        available to the public. Elementa cannot guarantee the anonymity or
        confidentiality of blockchain transactions. You should not assume that
        blockchain transactions are private.
      </p>
    </LegalSection>,

    <LegalSection key="19" title="19. Information Security and Non-Custodial Architecture">
      <p>
        Elementa&apos;s non-custodial architecture is intended to reduce the risk that
        Elementa itself can directly control or transfer user Digital Assets. However,
        non-custodial architecture does not eliminate all security risks.
      </p>
      <p>Users remain responsible for:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>securing devices;</li>
        <li>securing credentials;</li>
        <li>protecting recovery mechanisms;</li>
        <li>reviewing transactions;</li>
        <li>verifying addresses; and</li>
        <li>protecting Wallet access.</li>
      </ul>
      <p className="mt-4">
        Elementa is not responsible for losses resulting from the compromise or misuse
        of user credentials or access mechanisms, except to the extent liability cannot
        legally be excluded.
      </p>
    </LegalSection>,

    <LegalSection key="20" title="20. Do Not Send Sensitive Wallet Credentials">
      <p>Elementa will not ordinarily require you to provide:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>private keys;</li>
        <li>seed phrases;</li>
        <li>recovery phrases;</li>
        <li>Wallet passwords; or</li>
        <li>
          other credentials capable of directly controlling your Digital Assets.
        </li>
      </ul>
      <p className="mt-4">You should never send these credentials to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Elementa employees;</li>
        <li>customer support;</li>
        <li>third-party websites;</li>
        <li>individuals claiming to represent Elementa; or</li>
        <li>
          any other person unless you fully understand the security consequences.
        </li>
      </ul>
      <p className="mt-4">
        If someone asks for your recovery phrase or private key while claiming to
        represent Elementa, treat the request as suspicious.
      </p>
    </LegalSection>,

    <LegalSection key="21" title="21. Privacy of Communications">
      <p>
        Communications with Elementa may be stored or retained for purposes including:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>customer support;</li>
        <li>quality assurance;</li>
        <li>security;</li>
        <li>dispute resolution;</li>
        <li>training and service improvement, where legally permitted; and</li>
        <li>legal compliance.</li>
      </ul>
      <p className="mt-4">
        Do not include sensitive credentials in support communications.
      </p>
    </LegalSection>,

    <LegalSection key="22" title="22. Changes to This Privacy Policy">
      <p>
        We may update this Privacy Policy from time to time. When we make material
        changes, we may provide notice through:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>the Services;</li>
        <li>our website;</li>
        <li>email;</li>
        <li>application notifications; or</li>
        <li>other legally appropriate methods.</li>
      </ul>
      <p className="mt-4">
        The &quot;Last Updated&quot; date at the beginning of this Privacy Policy indicates when
        it was most recently updated. Your continued use of the Services after the
        effective date of an updated Privacy Policy constitutes acceptance of the
        updated Privacy Policy to the extent permitted by law.
      </p>
    </LegalSection>,

    <LegalSection key="23" title="23. Contact Us">
      <p>
        If you have questions, concerns, or requests regarding this Privacy Policy or
        the processing of your personal information, contact us at:
      </p>
      <p>
        <strong>Elementa Protocol</strong>
      </p>
      <p>
        <strong>Email:</strong> <ContactEmailLink />
      </p>
      <p className="mt-4">
        For privacy-related requests, please include sufficient information for us to
        understand and process your request.
      </p>
    </LegalSection>,

    <LegalSection key="24" title="24. Important Privacy Notice">
      <p>
        By using the Elementa Services, you acknowledge and understand that:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Elementa is a non-custodial software provider;</li>
        <li>
          Elementa does not generally custody or control your Digital Assets;
        </li>
        <li>blockchain transactions may be publicly visible and permanent;</li>
        <li>
          Elementa may process personal information necessary to provide, secure,
          improve, and legally operate the Services;
        </li>
        <li>third-party providers may independently process your information;</li>
        <li>
          KYC and on-ramp/off-ramp providers may process information under their own
          privacy policies;
        </li>
        <li>
          Elementa may disclose information where legally required or legally
          permitted;
        </li>
        <li>
          no internet or technology system can guarantee absolute security;
        </li>
        <li>
          you are responsible for protecting your own Wallet credentials and devices;
          and
        </li>
        <li>
          your privacy rights are protected in accordance with applicable law.
        </li>
      </ul>
      <p className="mt-4">
        Elementa is committed to handling personal information responsibly, securely,
        and transparently. We will not sell your personal information for money, and we
        will use and disclose personal information only for legitimate business
        purposes, service provision, security, legal compliance, and other purposes
        described in this Privacy Policy or otherwise permitted by applicable law.
      </p>
      <p className="mt-4">
        BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS
        PRIVACY POLICY.
      </p>
    </LegalSection>,
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
