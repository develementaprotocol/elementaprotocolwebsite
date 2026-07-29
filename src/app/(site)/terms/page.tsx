import { ContactEmailLink } from "@/components/ui/ContactEmailLink";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";

export const metadata = {
  title: "Terms and Conditions | Elementa Protocol",
  description:
    "Terms of Use and Conditions governing your access to and use of the Elementa Protocol ecosystem.",
};

export default function TermsPage() {
  const sections = [
    <LegalSection key="intro" title="Introduction">
      <p>
        These Terms of Use and Conditions (&quot;Terms&quot;) govern your access to and use of
        the Elementa Protocol ecosystem, including the Elementa Wallet application,
        website, software, interfaces, APIs, services, features, and related products
        (collectively, the &quot;Services&quot;).
      </p>
      <p>
        The Services are provided by Elementa Protocol (&quot;Elementa,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;).
      </p>
      <p>
        By downloading, accessing, connecting to, or using any part of the Services,
        you acknowledge that you have read, understood, and agreed to be bound by
        these Terms, our Privacy Policy, and any other applicable policies
        incorporated into these Terms.
      </p>
      <p>
        IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICES.
      </p>
    </LegalSection>,

    <LegalSection key="1" title="1. Important Notice">
      <p>PLEASE READ THESE TERMS CAREFULLY.</p>
      <p>
        ELEMENTA PROVIDES SOFTWARE AND TECHNOLOGY THAT ENABLES USERS TO INTERACT WITH
        DIGITAL ASSETS AND BLOCKCHAIN NETWORKS.
      </p>
      <p>
        ELEMENTA IS NOT A BANK, FINANCIAL INSTITUTION, BROKER, INVESTMENT ADVISER,
        ASSET MANAGER, TRUSTEE, CUSTODIAN, PAYMENT INSTITUTION, MONEY TRANSMITTER, OR
        FINANCIAL ADVISER UNLESS EXPRESSLY STATED OTHERWISE IN A SEPARATE AGREEMENT.
      </p>
      <p>
        Elementa does not take possession, custody, control, or ownership of your
        digital assets, private keys, recovery phrases, passwords, authentication
        credentials, or other wallet-access credentials.
      </p>
      <p>
        You are solely responsible for securing and maintaining access to your wallet
        and digital assets.
      </p>
      <p>
        IF YOU LOSE ACCESS TO YOUR WALLET OR LOSE THE INFORMATION NECESSARY TO RECOVER
        IT, ELEMENTA MAY BE COMPLETELY UNABLE TO RECOVER, RESTORE, REVERSE, OR RECREATE
        YOUR WALLET OR ASSETS.
      </p>
      <p>
        Blockchain transactions are generally irreversible. Elementa cannot reverse,
        cancel, modify, recover, or refund transactions that have been submitted to or
        confirmed on a blockchain network.
      </p>
    </LegalSection>,

    <LegalSection key="2" title="2. Definitions">
      <p>For purposes of these Terms:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong>2.1 &quot;Digital Assets&quot;</strong> — Means
          cryptocurrencies, virtual currencies, tokens, stablecoins, NFTs,
          blockchain-based assets, and other digital representations of value or
          rights.
        </li>
        <li>
          <strong>2.2 &quot;Blockchain Network&quot;</strong> — Means
          any decentralized blockchain, distributed ledger, protocol, network, or
          related infrastructure with which the Services may interact.
        </li>
        <li>
          <strong>2.3 &quot;Wallet&quot;</strong> — Means the
          software-based digital asset wallet functionality made available through the
          Services.
        </li>
        <li>
          <strong>2.4 &quot;Private Keys&quot;</strong> — Means
          cryptographic keys or credentials capable of authorizing transactions
          involving a blockchain address or Digital Assets.
        </li>
        <li>
          <strong>2.5 &quot;Recovery Credentials&quot;</strong> — Means
          any seed phrase, recovery phrase, mnemonic phrase, private key, password,
          backup, authentication method, encrypted recovery data, or other information
          that may enable access to a Wallet.
        </li>
        <li>
          <strong>2.6 &quot;Third-Party Services&quot;</strong> — Means
          services, protocols, blockchain networks, liquidity providers, exchanges,
          on-ramp providers, off-ramp providers, payment providers, KYC providers,
          analytics providers, infrastructure providers, decentralized applications,
          and other third-party services integrated with or accessible through the
          Services.
        </li>
      </ul>
    </LegalSection>,

    <LegalSection key="3" title="3. Eligibility">
      <p>You may use the Services only if:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>You are legally capable of entering into a binding agreement;</li>
        <li>You meet the minimum legal age required in your jurisdiction;</li>
        <li>Your use of the Services is lawful in your jurisdiction;</li>
        <li>
          You are not located in, ordinarily resident in, or acting on behalf of a
          person or entity located in a jurisdiction where use of the Services is
          prohibited;
        </li>
        <li>
          You are not subject to applicable sanctions, restrictions, or prohibitions
          that would make your use of the Services unlawful; and
        </li>
        <li>You comply with all applicable laws and regulations.</li>
      </ul>
      <p className="mt-4">
        You are responsible for determining whether you may lawfully use the Services
        in your jurisdiction. Elementa does not guarantee that the Services are
        available, appropriate, or lawful in every jurisdiction.
      </p>
    </LegalSection>,

    <LegalSection key="4" title="4. Non-Custodial Wallet">
      <div className="flex flex-col gap-2">
        <h3>4.1 Non-Custodial Nature</h3>
        <p>The Elementa Wallet is designed to be non-custodial.</p>
        <p>
          This means that, except where expressly stated otherwise in connection with
          a specific third-party service:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>Elementa does not hold your Digital Assets;</li>
          <li>Elementa does not control your Digital Assets;</li>
          <li>Elementa does not possess your Private Keys;</li>
          <li>Elementa does not act as custodian of your Digital Assets;</li>
          <li>Elementa does not have unilateral access to your Wallet;</li>
          <li>Elementa cannot independently authorize transactions on your behalf;</li>
          <li>Elementa cannot guarantee access to your Wallet;</li>
          <li>Elementa cannot reverse blockchain transactions; and</li>
          <li>
            Elementa cannot recover lost Wallet access where the required recovery
            mechanisms are unavailable.
          </li>
        </ul>
        <p className="mt-2">
          You retain responsibility for your Wallet and Digital Assets at all times.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>4.2 Wallet Access Is Your Responsibility</h3>
        <p>
          Depending on the applicable Wallet configuration, access may involve one or
          more methods, including:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>passwords;</li>
          <li>PINs;</li>
          <li>device authentication;</li>
          <li>biometric authentication;</li>
          <li>recovery phrases;</li>
          <li>private keys;</li>
          <li>encrypted backups;</li>
          <li>cloud or account-based recovery mechanisms;</li>
          <li>authentication credentials; or</li>
          <li>other access mechanisms.</li>
        </ul>
        <p className="mt-2">
          You are solely responsible for understanding and securely maintaining every
          method through which your Wallet may be accessed or recovered.
        </p>
        <p>
          You acknowledge that failure to maintain access to all relevant access
          mechanisms may result in permanent and irreversible loss of access to your
          Wallet and Digital Assets.
        </p>
      </div>
    </LegalSection>,

    <LegalSection key="5" title="5. Loss of Wallet Access and Recovery">
      <div className="flex flex-col gap-2">
        <h3>5.1 No Guarantee of Recovery</h3>
        <p>
          ELEMENTA DOES NOT GUARANTEE THAT A LOST, DELETED, DAMAGED, CORRUPTED,
          COMPROMISED, OR INACCESSIBLE WALLET CAN BE RECOVERED.
        </p>
        <p>If you lose access to your Wallet, including by:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>losing your recovery phrase;</li>
          <li>losing your Private Keys;</li>
          <li>forgetting passwords or credentials;</li>
          <li>losing access to an authentication account;</li>
          <li>losing access to an email account;</li>
          <li>losing access to a device;</li>
          <li>deleting the application;</li>
          <li>losing or damaging a device;</li>
          <li>losing access to a cloud backup;</li>
          <li>losing access to a social or third-party authentication provider;</li>
          <li>failing to complete an available recovery process; or</li>
          <li>forgetting or losing any other access mechanism,</li>
        </ul>
        <p className="mt-2">Elementa may be unable to restore your Wallet.</p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3>5.2 No Liability for Lost Assets</h3>
        <p>
          To the maximum extent permitted by applicable law, Elementa shall not be
          liable for any loss of Digital Assets, loss of Wallet access, loss of Private
          Keys, loss of Recovery Credentials, loss of passwords, or any other loss
          resulting from your failure to properly secure and maintain access to your
          Wallet.
        </p>
        <p>
          You acknowledge that Elementa may have no technical ability to recover assets
          or access that has been permanently lost.
        </p>
      </div>
    </LegalSection>,

    <LegalSection key="6" title="6. Your Sole Responsibility for Wallet Activity">
      <p>You are solely responsible for all activity conducted through your Wallet.</p>
      <p>This includes, without limitation:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Digital Assets sent from your Wallet;</li>
        <li>Digital Assets received by your Wallet;</li>
        <li>transactions initiated by you;</li>
        <li>transactions initiated by anyone who gains access to your Wallet;</li>
        <li>swaps;</li>
        <li>transfers;</li>
        <li>purchases;</li>
        <li>sales;</li>
        <li>deposits;</li>
        <li>withdrawals;</li>
        <li>interactions with decentralized applications;</li>
        <li>smart contract interactions;</li>
        <li>staking;</li>
        <li>governance participation;</li>
        <li>bridge transactions;</li>
        <li>NFT transactions;</li>
        <li>on-ramp and off-ramp transactions;</li>
        <li>fees;</li>
        <li>taxes; and</li>
        <li>other activity associated with your Wallet.</li>
      </ul>
      <p className="mt-4">
        You are responsible for reviewing and verifying transaction details before
        authorizing any transaction. Elementa is not responsible for transactions that
        you authorize or that are authorized using your Wallet credentials.
      </p>
    </LegalSection>,

    <LegalSection key="7" title="7. Blockchain Transactions">
      <div className="flex flex-col gap-2">
        <h3>7.1 Irreversible Transactions</h3>
        <p>Blockchain transactions may be irreversible once submitted or confirmed.</p>
        <p>Elementa generally cannot:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>cancel a transaction;</li>
          <li>reverse a transaction;</li>
          <li>modify a transaction;</li>
          <li>recover Digital Assets sent to an incorrect address;</li>
          <li>recover Digital Assets sent on an unsupported network;</li>
          <li>recover Digital Assets sent using an incorrect token standard;</li>
          <li>recover Digital Assets sent through an incorrect contract;</li>
          <li>recover Digital Assets lost due to user error; or</li>
          <li>force a blockchain network to reverse a confirmed transaction.</li>
        </ul>
        <p className="mt-2">You are solely responsible for verifying:</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>the recipient address;</li>
          <li>the blockchain network;</li>
          <li>the token or Digital Asset;</li>
          <li>the amount;</li>
          <li>applicable fees;</li>
          <li>smart contract addresses; and</li>
          <li>all other transaction information.</li>
        </ul>
      </div>
    </LegalSection>,

    <LegalSection key="8" title="8. Elementa Is Not Responsible for Your Transactions">
      <p>Elementa is not responsible for any Digital Assets:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>sent;</li>
        <li>received;</li>
        <li>exchanged;</li>
        <li>deposited;</li>
        <li>withdrawn;</li>
        <li>purchased;</li>
        <li>sold;</li>
        <li>bridged;</li>
        <li>staked;</li>
        <li>locked;</li>
        <li>transferred; or</li>
        <li>otherwise interacted with</li>
      </ul>
      <p className="mt-2">
        through your Wallet or through any Third-Party Service.
      </p>
      <p className="mt-4">Elementa shall not be liable for:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>unauthorized transactions resulting from compromised credentials;</li>
        <li>transactions initiated by you;</li>
        <li>transactions initiated by a person who obtains access to your Wallet;</li>
        <li>incorrect recipient addresses;</li>
        <li>incorrect networks;</li>
        <li>smart contract failures;</li>
        <li>blockchain congestion;</li>
        <li>transaction delays;</li>
        <li>failed transactions;</li>
        <li>transaction reordering;</li>
        <li>network forks;</li>
        <li>blockchain reorganizations;</li>
        <li>token contract errors;</li>
        <li>malicious smart contracts; or</li>
        <li>any other blockchain-related event.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="9" title="9. Prohibited Use">
      <p>You may not use the Services to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Violate any applicable law or regulation;</li>
        <li>Commit, facilitate, finance, or promote fraud;</li>
        <li>Launder money or conceal proceeds of crime;</li>
        <li>Finance terrorism or sanctioned activities;</li>
        <li>Facilitate trafficking in illegal goods or services;</li>
        <li>Conduct unauthorized gambling where prohibited;</li>
        <li>Commit theft, extortion, fraud, or deception;</li>
        <li>
          Facilitate cybercrime, hacking, malware distribution, or unauthorized access;
        </li>
        <li>Exploit, attack, or manipulate blockchain networks;</li>
        <li>Use stolen, hacked, or unlawfully obtained Digital Assets;</li>
        <li>Evade sanctions or legal restrictions;</li>
        <li>Engage in market manipulation or other unlawful financial activity;</li>
        <li>Impersonate another person or entity;</li>
        <li>Use the Services to deceive other users;</li>
        <li>Interfere with the security or operation of the Services;</li>
        <li>
          Reverse engineer or exploit the Services except where permitted by law;
        </li>
        <li>Use automated systems to abuse or overload the Services; or</li>
        <li>Use the Services for any unlawful purpose.</li>
      </ul>
      <p className="mt-4">You are solely responsible for your conduct and activity.</p>
    </LegalSection>,

    <LegalSection key="10" title="10. Elementa Is Not Responsible for Illegal Activity">
      <p>
        Elementa provides software and technological infrastructure. Elementa does not
        control how users choose to use their Wallets or blockchain networks.
      </p>
      <p>
        YOU ARE SOLELY RESPONSIBLE FOR ENSURING THAT YOUR USE OF THE SERVICES AND ALL
        ACTIVITY ASSOCIATED WITH YOUR WALLET COMPLIES WITH APPLICABLE LAW.
      </p>
      <p>
        Elementa does not authorize, endorse, encourage, facilitate, or participate in
        illegal activity conducted by users.
      </p>
      <p>
        If you use the Services to conduct unlawful activity, you do so entirely at
        your own risk and responsibility.
      </p>
      <p>
        Nothing in these Terms transfers responsibility for unlawful conduct from the
        person who committed, directed, facilitated, or benefited from that conduct to
        Elementa.
      </p>
    </LegalSection>,

    <LegalSection key="11" title="11. Legal and Law Enforcement Requests">
      <p>
        Elementa may cooperate with courts, regulators, law enforcement agencies,
        government authorities, and other legally authorized bodies.
      </p>
      <p>
        Where required or permitted by applicable law, Elementa may:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>provide information in its possession;</li>
        <li>disclose account or user information;</li>
        <li>provide technical information;</li>
        <li>preserve records;</li>
        <li>
          respond to subpoenas, court orders, warrants, regulatory requests, or other
          lawful requests;
        </li>
        <li>restrict or suspend access where legally required;</li>
        <li>comply with sanctions and other legal obligations; and</li>
        <li>take other actions required by applicable law.</li>
      </ul>
      <p className="mt-4">
        Elementa may disclose information where it reasonably believes that disclosure
        is necessary to:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>comply with legal obligations;</li>
        <li>respond to lawful governmental requests;</li>
        <li>protect the rights, property, or safety of Elementa;</li>
        <li>protect users or the public;</li>
        <li>investigate suspected fraud or illegal activity; or</li>
        <li>enforce these Terms.</li>
      </ul>
      <p className="mt-4">
        Elementa does not guarantee that it will notify you before making a disclosure
        where notification is prohibited, impractical, or legally restricted.
      </p>
    </LegalSection>,

    <LegalSection key="12" title="12. Data and Privacy">
      <p>
        Your use of the Services may involve the collection, processing, storage, and
        disclosure of certain information.
      </p>
      <p>
        The collection and processing of information are governed by the Elementa
        Privacy Policy.
      </p>
      <p>
        You acknowledge that certain information may be retained and disclosed where
        required by applicable law or lawful legal process.
      </p>
      <p>
        You should not assume that information submitted to or generated through the
        Services can never be disclosed to authorities.
      </p>
    </LegalSection>,

    <LegalSection key="13" title="13. Third-Party Services">
      <p>
        The Services may integrate with or provide access to Third-Party Services.
        These may include:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>blockchain networks;</li>
        <li>decentralized applications;</li>
        <li>payment providers;</li>
        <li>on-ramp providers;</li>
        <li>off-ramp providers;</li>
        <li>KYC and identity verification providers;</li>
        <li>exchanges;</li>
        <li>liquidity providers;</li>
        <li>analytics services;</li>
        <li>authentication providers;</li>
        <li>cloud infrastructure providers;</li>
        <li>wallet infrastructure providers; and</li>
        <li>other external providers.</li>
      </ul>
      <p className="mt-4">
        Third-Party Services are governed by their own terms and policies. Elementa
        does not control and is not responsible for:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Third-Party Services;</li>
        <li>their availability;</li>
        <li>their security;</li>
        <li>their terms;</li>
        <li>their fees;</li>
        <li>their decisions;</li>
        <li>their compliance procedures;</li>
        <li>their KYC requirements;</li>
        <li>their transaction processing;</li>
        <li>their services;</li>
        <li>their errors;</li>
        <li>their failures; or</li>
        <li>their actions or omissions.</li>
      </ul>
      <p className="mt-4">
        A third-party provider may reject, delay, suspend, cancel, restrict, or refuse
        a transaction or service. You are responsible for reviewing the applicable
        terms of each Third-Party Service you use.
      </p>
    </LegalSection>,

    <LegalSection key="14" title="14. KYC, AML, and Compliance">
      <p>
        Certain features may be provided by third parties that require identity
        verification, Know Your Customer (&quot;KYC&quot;), Anti-Money Laundering (&quot;AML&quot;)
        screening, sanctions screening, transaction monitoring, or other compliance
        procedures.
      </p>
      <p>
        Elementa may rely on third-party providers to perform such processes. You may
        be required to provide accurate and complete information.
      </p>
      <p>You agree not to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>provide false information;</li>
        <li>impersonate another person;</li>
        <li>submit fraudulent documents;</li>
        <li>evade compliance screening; or</li>
        <li>
          assist another person in evading legal or regulatory requirements.
        </li>
      </ul>
      <p className="mt-4">
        A third-party provider may reject or restrict your access based on its own
        compliance policies or legal obligations.
      </p>
    </LegalSection>,

    <LegalSection key="15" title="15. Digital Asset Risks">
      <p>
        Digital Assets involve substantial risks. You acknowledge that Digital Assets
        may:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>lose some or all of their value;</li>
        <li>experience extreme price volatility;</li>
        <li>become illiquid;</li>
        <li>become unavailable;</li>
        <li>be affected by regulation;</li>
        <li>be affected by technological failures;</li>
        <li>be affected by network attacks;</li>
        <li>be affected by smart contract vulnerabilities;</li>
        <li>be affected by protocol changes;</li>
        <li>be affected by forks;</li>
        <li>be affected by scams or fraud;</li>
        <li>be affected by market manipulation; or</li>
        <li>become permanently inaccessible.</li>
      </ul>
      <p className="mt-4">
        Elementa does not guarantee the value, stability, legality, liquidity,
        availability, or future performance of any Digital Asset.
      </p>
      <p>Nothing provided through the Services constitutes:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>investment advice;</li>
        <li>financial advice;</li>
        <li>tax advice;</li>
        <li>legal advice;</li>
        <li>accounting advice;</li>
        <li>trading advice; or</li>
        <li>
          a recommendation to purchase, sell, hold, or transact in any Digital Asset.
        </li>
      </ul>
      <p className="mt-4">
        You are solely responsible for obtaining independent professional advice where
        appropriate.
      </p>
    </LegalSection>,

    <LegalSection key="16" title="16. No Investment or Financial Advice">
      <p>
        Information displayed through the Services is provided for general
        informational purposes only.
      </p>
      <p>Elementa does not:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>recommend investments;</li>
        <li>manage portfolios;</li>
        <li>provide personalized financial advice;</li>
        <li>guarantee investment returns;</li>
        <li>guarantee profits;</li>
        <li>predict market movements; or</li>
        <li>
          guarantee that any Digital Asset will retain or increase in value.
        </li>
      </ul>
      <p className="mt-4">
        You make all investment and transaction decisions independently and at your own
        risk.
      </p>
    </LegalSection>,

    <LegalSection key="17" title="17. Security">
      <p>You are responsible for maintaining the security of:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>your devices;</li>
        <li>passwords;</li>
        <li>PINs;</li>
        <li>recovery credentials;</li>
        <li>private keys;</li>
        <li>authentication accounts;</li>
        <li>email accounts;</li>
        <li>backup mechanisms; and</li>
        <li>other Wallet access methods.</li>
      </ul>
      <p className="mt-4">
        You must immediately take reasonable steps if you believe that your Wallet or
        credentials have been compromised.
      </p>
      <p>Elementa does not guarantee that the Services will be free from:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>vulnerabilities;</li>
        <li>malware;</li>
        <li>hacking;</li>
        <li>attacks;</li>
        <li>security breaches;</li>
        <li>unauthorized access;</li>
        <li>technical failures; or</li>
        <li>other security risks.</li>
      </ul>
      <p className="mt-4">No system can be guaranteed to be completely secure.</p>
    </LegalSection>,

    <LegalSection key="18" title="18. Software and Service Availability">
      <p>
        The Services may be modified, suspended, interrupted, restricted, or
        discontinued at any time. Elementa may:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>update the Services;</li>
        <li>add or remove features;</li>
        <li>modify functionality;</li>
        <li>suspend access;</li>
        <li>restrict certain jurisdictions;</li>
        <li>discontinue integrations; or</li>
        <li>discontinue all or part of the Services.</li>
      </ul>
      <p className="mt-4">
        Elementa does not guarantee uninterrupted or continuous availability. The
        Services may be unavailable because of:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>maintenance;</li>
        <li>technical failures;</li>
        <li>blockchain network issues;</li>
        <li>cyberattacks;</li>
        <li>infrastructure failures;</li>
        <li>internet outages;</li>
        <li>regulatory requirements;</li>
        <li>third-party failures;</li>
        <li>force majeure events; or</li>
        <li>other circumstances beyond Elementa&apos;s reasonable control.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="19" title="19. Fees">
      <p>Certain Services may involve fees. Fees may include:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>blockchain network fees;</li>
        <li>transaction fees;</li>
        <li>third-party provider fees;</li>
        <li>exchange fees;</li>
        <li>payment processing fees;</li>
        <li>service fees; and</li>
        <li>other applicable charges.</li>
      </ul>
      <p className="mt-4">
        Blockchain network fees are generally paid to the relevant blockchain network
        and are not controlled by Elementa. Fees may change without prior notice where
        reasonably necessary. You are responsible for reviewing applicable fees before
        completing a transaction.
      </p>
    </LegalSection>,

    <LegalSection key="20" title="20. Tax Responsibility">
      <p>
        You are solely responsible for determining and satisfying all tax obligations
        arising from your use of the Services and your Digital Asset activity. This may
        include taxes relating to:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>purchases;</li>
        <li>sales;</li>
        <li>swaps;</li>
        <li>transfers;</li>
        <li>staking;</li>
        <li>rewards;</li>
        <li>airdrops;</li>
        <li>mining;</li>
        <li>income;</li>
        <li>capital gains; or</li>
        <li>other Digital Asset activity.</li>
      </ul>
      <p className="mt-4">
        Elementa does not provide tax advice and is not responsible for determining or
        paying your taxes.
      </p>
    </LegalSection>,

    <LegalSection key="21" title="21. Intellectual Property">
      <p>
        All rights, title, and interest in the Services, including software, interfaces,
        branding, trademarks, logos, designs, text, graphics, and other materials,
        belong to Elementa or its licensors unless otherwise stated.
      </p>
      <p className="mt-4">
        Subject to your compliance with these Terms, Elementa grants you a limited,
        non-exclusive, non-transferable, revocable license to access and use the
        Services for their intended purpose.
      </p>
      <p>You may not:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>copy;</li>
        <li>modify;</li>
        <li>distribute;</li>
        <li>sell;</li>
        <li>sublicense;</li>
        <li>reverse engineer;</li>
        <li>decompile;</li>
        <li>disassemble;</li>
        <li>exploit; or</li>
        <li>create derivative works from</li>
      </ul>
      <p className="mt-2">
        the Services except where expressly permitted by applicable law.
      </p>
    </LegalSection>,

    <LegalSection key="22" title="22. User Content and Feedback">
      <p>
        If you submit feedback, suggestions, ideas, or other materials to Elementa, you
        grant Elementa a worldwide, royalty-free, perpetual, irrevocable, transferable,
        and sublicensable right to use, reproduce, modify, adapt, publish, distribute,
        and otherwise use such feedback for lawful business purposes.
      </p>
      <p>You represent that you have the right to submit such material.</p>
    </LegalSection>,

    <LegalSection key="23" title="23. Disclaimers">
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED
        &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
      </p>
      <p>
        ELEMENTA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>MERCHANTABILITY;</li>
        <li>FITNESS FOR A PARTICULAR PURPOSE;</li>
        <li>NON-INFRINGEMENT;</li>
        <li>ACCURACY;</li>
        <li>RELIABILITY;</li>
        <li>AVAILABILITY;</li>
        <li>SECURITY; AND</li>
        <li>CONTINUOUS OPERATION.</li>
      </ul>
      <p className="mt-4">ELEMENTA DOES NOT WARRANT THAT:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>THE SERVICES WILL ALWAYS BE AVAILABLE;</li>
        <li>THE SERVICES WILL BE ERROR-FREE;</li>
        <li>TRANSACTIONS WILL BE SUCCESSFUL;</li>
        <li>TRANSACTIONS WILL BE PROCESSED WITHIN A PARTICULAR TIME;</li>
        <li>DIGITAL ASSETS WILL BE RECOVERABLE;</li>
        <li>WALLET ACCESS WILL ALWAYS BE AVAILABLE;</li>
        <li>THE SERVICES WILL BE SECURE FROM ALL THREATS;</li>
        <li>THIRD-PARTY SERVICES WILL OPERATE PROPERLY;</li>
        <li>
          INFORMATION PROVIDED THROUGH THE SERVICES WILL ALWAYS BE ACCURATE; OR
        </li>
        <li>THE SERVICES WILL BE AVAILABLE IN YOUR JURISDICTION.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="24" title="24. Limitation of Liability">
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ELEMENTA AND ITS AFFILIATES,
        OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, SERVICE PROVIDERS, LICENSORS, AND
        REPRESENTATIVES SHALL NOT BE LIABLE FOR ANY:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>LOSS OF DIGITAL ASSETS;</li>
        <li>LOSS OF PROFITS;</li>
        <li>LOSS OF REVENUE;</li>
        <li>LOSS OF BUSINESS;</li>
        <li>LOSS OF DATA;</li>
        <li>LOSS OF WALLET ACCESS;</li>
        <li>LOSS OF PRIVATE KEYS;</li>
        <li>LOSS OF RECOVERY CREDENTIALS;</li>
        <li>LOSS OF OPPORTUNITY;</li>
        <li>BUSINESS INTERRUPTION;</li>
        <li>INDIRECT LOSS;</li>
        <li>INCIDENTAL LOSS;</li>
        <li>SPECIAL LOSS;</li>
        <li>CONSEQUENTIAL LOSS;</li>
        <li>PUNITIVE DAMAGES; or</li>
        <li>OTHER DAMAGES</li>
      </ul>
      <p className="mt-2">
        arising from or relating to your use of, or inability to use, the Services.
      </p>
      <p className="mt-4">
        This limitation applies regardless of the legal theory of liability, including
        contract, tort, negligence, strict liability, statute, or otherwise.
      </p>
      <p>Elementa shall not be liable for any loss arising from:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>user error;</li>
        <li>lost credentials;</li>
        <li>compromised credentials;</li>
        <li>incorrect addresses;</li>
        <li>incorrect networks;</li>
        <li>blockchain failures;</li>
        <li>smart contract vulnerabilities;</li>
        <li>third-party services;</li>
        <li>unauthorized access;</li>
        <li>malicious attacks;</li>
        <li>regulatory changes;</li>
        <li>market conditions;</li>
        <li>transaction failures;</li>
        <li>network congestion;</li>
        <li>forks;</li>
        <li>airdrops;</li>
        <li>protocol changes; or</li>
        <li>events beyond Elementa&apos;s reasonable control.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="25" title="25. Maximum Liability">
      <p>
        To the maximum extent permitted by applicable law, the total aggregate liability
        of Elementa arising out of or relating to the Services or these Terms shall not
        exceed the greater of:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>
          the amount of fees you directly paid to Elementa for the specific Services
          giving rise to the claim during the twelve (12) months preceding the event
          giving rise to the claim; or
        </li>
        <li>
          one hundred U.S. dollars (USD $100), where no such fees were paid.
        </li>
      </ul>
      <p className="mt-4">
        Nothing in these Terms shall exclude or limit liability that cannot legally be
        excluded or limited under applicable law.
      </p>
    </LegalSection>,

    <LegalSection key="26" title="26. Indemnification">
      <p>
        You agree to defend, indemnify, and hold harmless Elementa and its affiliates,
        officers, directors, employees, contractors, service providers, licensors, and
        representatives from and against any claims, demands, damages, losses,
        liabilities, costs, and expenses, including reasonable legal fees, arising from
        or relating to:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Your use of the Services;</li>
        <li>Your violation of these Terms;</li>
        <li>Your violation of applicable law;</li>
        <li>Your Digital Asset activity;</li>
        <li>Your Wallet activity;</li>
        <li>Your breach of another person&apos;s rights;</li>
        <li>Fraudulent, unlawful, or abusive conduct;</li>
        <li>Your use of Third-Party Services; or</li>
        <li>Any dispute arising from your transactions.</li>
      </ul>
    </LegalSection>,

    <LegalSection
      key="27"
      title="27. No Use of Elementa as a Legal Defendant or Representative"
    >
      <p>
        You acknowledge that Elementa is not responsible for your personal conduct,
        transactions, agreements, debts, obligations, disputes, or unlawful activities.
      </p>
      <p>You may not represent that:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Elementa authorized your conduct;</li>
        <li>Elementa guaranteed your transaction;</li>
        <li>Elementa is a party to your personal transaction;</li>
        <li>Elementa is responsible for your Digital Assets; or</li>
        <li>
          Elementa is your agent, partner, fiduciary, trustee, or representative.
        </li>
      </ul>
      <p className="mt-4">
        Nothing in these Terms creates an agency, partnership, joint venture,
        fiduciary, employment, or trust relationship between you and Elementa.
      </p>
      <p>
        Where a dispute concerns your conduct, transaction, or relationship with another
        person or entity, you acknowledge that Elementa is generally not a party to
        that dispute.
      </p>
      <p>
        However, nothing in these Terms prevents a court, regulator, law enforcement
        authority, or other legally authorized body from requiring Elementa to
        participate in a legal or regulatory matter where legally required.
      </p>
    </LegalSection>,

    <LegalSection key="28" title="28. Suspension and Termination">
      <p>
        Elementa may suspend or terminate access to the Services where it reasonably
        believes that:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>you have violated these Terms;</li>
        <li>your activity may violate applicable law;</li>
        <li>your account or Wallet is associated with fraud;</li>
        <li>your activity creates security risks;</li>
        <li>a legal or regulatory requirement requires action;</li>
        <li>a third-party provider has restricted access; or</li>
        <li>
          suspension is necessary to protect Elementa, users, or the public.
        </li>
      </ul>
      <p className="mt-4">
        Termination of access does not necessarily affect Digital Assets held at
        blockchain addresses controlled by you. Because Elementa is non-custodial,
        termination of access to the interface may not mean that Elementa has custody
        or control of your Digital Assets. You remain responsible for securing and
        accessing your Wallet through any available lawful method.
      </p>
    </LegalSection>,

    <LegalSection key="29" title="29. Changes to These Terms">
      <p>
        Elementa may update these Terms from time to time. Updated Terms may be
        published through the Services or website.
      </p>
      <p>
        Your continued use of the Services after updated Terms become effective
        constitutes acceptance of the updated Terms.
      </p>
      <p>
        If you do not agree to updated Terms, you must stop using the Services.
      </p>
    </LegalSection>,

    <LegalSection key="30" title="30. Governing Law">
      <p>
        These Terms shall be governed by the laws applicable to Elementa Protocol&apos;s
        operating entity, without regard to conflict-of-law principles.
      </p>
      <p className="mt-4">
        Any dispute arising from or relating to these Terms or the Services shall be
        subject to the exclusive jurisdiction of the courts located in that
        jurisdiction, unless applicable law requires otherwise.
      </p>
    </LegalSection>,

    <LegalSection key="31" title="31. Dispute Resolution">
      <p>
        Before initiating formal legal proceedings, the parties should attempt in good
        faith to resolve any dispute through written notice and reasonable discussions.
      </p>
      <p>Where legally permitted, disputes may be subject to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>negotiation;</li>
        <li>mediation;</li>
        <li>arbitration; or</li>
        <li>the courts specified in the governing law section.</li>
      </ul>
    </LegalSection>,

    <LegalSection key="32" title="32. Severability">
      <p>
        If any provision of these Terms is determined to be invalid, illegal, or
        unenforceable, that provision shall be modified to the minimum extent necessary
        to make it enforceable. The remaining provisions shall remain in full force and
        effect.
      </p>
    </LegalSection>,

    <LegalSection key="33" title="33. Waiver">
      <p>
        Failure by Elementa to enforce any provision of these Terms shall not constitute
        a waiver of its right to enforce that provision in the future.
      </p>
    </LegalSection>,

    <LegalSection key="34" title="34. Assignment">
      <p>
        You may not assign or transfer your rights or obligations under these Terms
        without Elementa&apos;s prior written consent.
      </p>
      <p>
        Elementa may assign or transfer its rights and obligations in connection with a
        merger, acquisition, restructuring, sale of assets, or other corporate
        transaction.
      </p>
    </LegalSection>,

    <LegalSection key="35" title="35. Entire Agreement">
      <p>
        These Terms, together with any policies expressly incorporated into them,
        constitute the entire agreement between you and Elementa concerning your use of
        the Services.
      </p>
      <p>
        They supersede prior agreements, representations, and understandings relating
        to the subject matter of these Terms, except where expressly stated otherwise.
      </p>
    </LegalSection>,

    <LegalSection key="36" title="36. Contact">
      <p>Questions regarding these Terms may be directed to:</p>
      <p>
        <strong>Elementa Protocol</strong>
      </p>
      <p>
        <strong>Email:</strong> <ContactEmailLink />
      </p>
    </LegalSection>,

    <LegalSection key="ack" title="Acknowledgement">
      <p>
        BY ACCESSING OR USING THE ELEMENTA WALLET OR ANY ELEMENTA SERVICE, YOU
        ACKNOWLEDGE THAT:
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>ELEMENTA IS A NON-CUSTODIAL SOFTWARE PROVIDER;</li>
        <li>YOU ARE RESPONSIBLE FOR YOUR WALLET AND DIGITAL ASSETS;</li>
        <li>YOU ARE RESPONSIBLE FOR YOUR WALLET ACCESS CREDENTIALS;</li>
        <li>
          LOST ACCESS MAY RESULT IN PERMANENT LOSS OF DIGITAL ASSETS;
        </li>
        <li>BLOCKCHAIN TRANSACTIONS MAY BE IRREVERSIBLE;</li>
        <li>ELEMENTA DOES NOT CONTROL YOUR TRANSACTIONS;</li>
        <li>YOU ARE RESPONSIBLE FOR YOUR OWN LEGAL AND TAX OBLIGATIONS;</li>
        <li>YOU MUST NOT USE THE SERVICES FOR ILLEGAL ACTIVITIES;</li>
        <li>
          ELEMENTA MAY COMPLY WITH LAWFUL REQUESTS FROM AUTHORITIES; AND
        </li>
        <li>
          YOU HAVE READ, UNDERSTOOD, AND AGREED TO THESE TERMS.
        </li>
      </ul>
      <p className="mt-4">
        BY CLICKING &quot;I AGREE,&quot; DOWNLOADING THE APPLICATION, CONNECTING A WALLET, OR
        USING THE SERVICES, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS.
      </p>
    </LegalSection>,
  ];

  return (
    <LegalPageLayout
      title="Terms &"
      titleAccent="Conditions"
      subtitle="Rules that govern your use of Elementa websites, wallet, and related services."
      lastUpdated="May 2026"
    >
      {sections}
    </LegalPageLayout>
  );
}
