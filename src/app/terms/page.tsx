import React from "react";
import Link from "next/link";
import { DocReaderLayout } from "@/components/docs/DocReaderLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import { termsToc } from "@/data/legalToc";
import { sectionAnchorFromTitle } from "@/utils/sectionAnchor";

export const metadata = {
  title: "Terms and Conditions | Elementa Protocol",
  description:
    "Terms of use for Elementa Wallet, on-chain activity, third-party protocols, and the Elementa website.",
};

const termsNavGroups = [
  {
    group: "Terms & conditions",
    items: termsToc.map((t) => ({
      id: t.id,
      label: t.label,
      href: `#${t.id}`,
    })),
  },
] as const;

export default function TermsPage() {
  const sections = [
    <LegalSection key="1" title="1. Agreement to Terms">
      <p>
        By accessing or using Elementa, including the Elementa website, Elementa Wallet, documentation, and any related products, features, or services (collectively, the &quot;Services&quot;), you agree to these Terms and Conditions (these &quot;Terms&quot;).
      </p>
      <p>If you do not agree, you must not access or use the Services.</p>
      <p>
        If you use the Services on behalf of an organization, you represent that you have authority to bind that organization, and &quot;you&quot; includes that entity.
      </p>
      <p className="mt-4">
        The Services may include downloadable or browser-based wallet software that interacts with public blockchain networks. Your relationship with validators, miners, bridges, decentralized exchanges, lending protocols, or other on-chain systems is governed by those networks&apos; rules and smart contracts—not by Elementa as operator of those protocols.
      </p>
      <p>
        We may update these Terms from time to time; see Section 12. Continued use after changes become effective constitutes acceptance of the revised Terms, except where prohibited by law.
      </p>
    </LegalSection>,
    <LegalSection key="2" title="2. Eligibility">
      <p>You may use the Services only if:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>You are at least 18 years old (or the age of legal majority where you live).</li>
        <li>You can lawfully hold and transfer digital assets and use wallet software in your jurisdiction.</li>
        <li>You are not located in, ordinarily resident in, or accessing the Services from a jurisdiction where such use is prohibited or requires registration Elementa has not obtained.</li>
        <li>You are not identified on any sanctions, denied-party, or restricted-person list, and you will not use the Services to benefit such persons.</li>
      </ul>
      <p className="mt-4">
        Cryptocurrency and stablecoin rules vary worldwide. You alone are responsible for determining whether your activity (including staking, lending, privacy coins, or wrapped assets) complies with local law, tax, licensing, securities, derivatives, or gambling regulations.
      </p>
    </LegalSection>,
    <LegalSection key="3" title="3. Self-Custody Wallet Responsibility">
      <p>Elementa Wallet is a non-custodial (self-custody) wallet interface. You—not Elementa—control the cryptographic keys that authorize movement of assets.</p>
      <ul className="list-disc pl-6 flex flex-col gap-2 mt-3">
        <li>You are solely responsible for your device password, PIN, biometrics, private keys, and Secret Recovery Phrase.</li>
        <li>Elementa does not receive or store your recovery phrase or private keys in a form that allows us to recover your wallet on your behalf.</li>
        <li>If you lose your phrase or keys, or they are stolen, funds may be permanently unrecoverable or stolen—with no recourse through Elementa.</li>
        <li>You must never share your Secret Recovery Phrase or private keys with anyone, including anyone claiming to be Elementa support.</li>
        <li>You should maintain offline, redundant backups of your recovery phrase in a secure location; digital screenshots and cloud sync increase leak risk.</li>
      </ul>
      <p className="mt-4">
        When you connect to dApps or sign transactions, you authorize smart-contract calls and token transfers. Review every prompt: malicious sites may request unlimited token approvals, incorrect chains, or disguised contract addresses.
      </p>
    </LegalSection>,
    <LegalSection key="4" title="4. Blockchain Risks">
      <p>
        Public blockchains are experimental, volatile, and subject to congestion, forks, reorganizations, oracle failures, MEV, front-running, and smart-contract vulnerabilities. Digital assets may lose value entirely.
      </p>
      <p className="mt-3">Before you confirm any transaction or signature, you are responsible for verifying:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Recipient address and any contract you interact with</li>
        <li>Correct chain/network (mainnet vs testnet vs L2)</li>
        <li>Asset type (native coin vs ERC-20 / SPL / other standards)</li>
        <li>Amounts, decimals, slippage limits, and deadline parameters on swaps</li>
        <li>Gas or priority fees and likely confirmation time</li>
        <li>Token allowances (approvals) you grant to contracts—persistent approvals can drain wallets if misused</li>
      </ul>
      <p className="mt-4">
        Bridges, wrapped tokens, liquidity pools, and lending protocols carry additional risks (smart-contract exploit, rug pulls, depeg, liquidity withdrawal). Elementa does not audit third-party code you choose to use through the wallet.
      </p>
      <p>
        Elementa cannot reverse, cancel, or refund confirmed on-chain transactions. Losses from user error, phishing, clipboard malware, network outages, or validator behavior are solely yours.
      </p>
    </LegalSection>,
    <LegalSection key="5" title="5. Acceptable Use">
      <p>You agree not to use the Services to:</p>
      <ul className="list-disc pl-6 flex flex-col gap-2">
        <li>Violate applicable law or infringe others&apos; rights</li>
        <li>Commit fraud, impersonate others, or operate phishing or drain schemes</li>
        <li>Launder proceeds of crime, evade sanctions, or facilitate terrorism financing</li>
        <li>Distribute malware, exploit vulnerabilities, or attack Elementa or third-party infrastructure</li>
        <li>Circumvent security, rate limits, or access controls</li>
        <li>Misrepresent tokens, NFTs, or yields to third parties</li>
      </ul>
      <p className="mt-4">
        We may suspend or terminate access to hosted portions of the Services, investigate abuse, or cooperate with law enforcement where permitted. On-chain activity is public; misuse may be traceable by regulators and analytics firms regardless of wallet brand.
      </p>
    </LegalSection>,
    <LegalSection key="6" title="6. Limitation of Liability">
      <p>
        To the maximum extent permitted by law, the Services are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, title, and non-infringement.
      </p>
      <p className="mt-4">
        Elementa and its contributors will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, data, goodwill, or digital assets, even if advised of the possibility, including losses from protocol hacks, network upgrades, user error, phishing, or third-party services you connect through the wallet.
      </p>
      <p>
        To the extent liability is not excluded, total aggregate liability arising out of these Terms or the Services shall not exceed the greater of (a) one hundred U.S. dollars (USD $100), or (b) the amounts you paid Elementa directly for the Services in the twelve (12) months before the claim (if any such fees exist).
      </p>
      <p className="mt-4 text-sm opacity-85">
        Some jurisdictions do not allow certain limitations; in those cases, our liability is limited to the fullest extent permitted.
      </p>
    </LegalSection>,
    <LegalSection key="7" title="7. Governing Law">
      <p>
        These Terms are governed by the laws applicable to Elementa Protocol&apos;s operating entity, excluding conflict-of-law rules that would require another jurisdiction&apos;s law.
      </p>
      <p className="mt-4">
        Except where prohibited, exclusive venue for disputes shall lie in the courts of that jurisdiction. You waive any objection to inconvenient forum unless mandatory consumer protections in your country say otherwise.
      </p>
    </LegalSection>,
    <LegalSection key="8" title="8. Contact">
      <p>
        For general questions about these Terms, licensing, or partnerships, email us using the contact channel below. Do not send Secret Recovery Phrases, private keys, or screenshots of seed backups—support staff will never request them.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <Link href="/contact" className="text-[#24bace] hover:underline transition-colors">
          info@elementaprotocol.com
        </Link>
      </p>
      <p className="mt-4">
        Response times depend on volume and complexity. Urgent security issues affecting Elementa-operated infrastructure should be labeled clearly in the subject line; we cannot intervene in third-party protocol exploits or recover funds lost on-chain.
      </p>
    </LegalSection>,
    <LegalSection key="9" title="9. Third-Party Networks, dApps, and Integrations">
      <p>
        The wallet may display links, QR flows, WalletConnect-style sessions, browser-extension prompts, or embedded browsers that route you to independent websites and protocols. Those third parties are not controlled by Elementa; your legal relationship is with each protocol&apos;s developers, DAO, or corporate sponsor as applicable.
      </p>
      <p className="mt-4">You acknowledge that:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3">
        <li>
          <strong className="text-white/90">Infrastructure dependence:</strong> RPC endpoints, indexers, block explorers, fiat ramps, and swap aggregators may charge fees, suffer outages, deprecate APIs, or return stale prices; Elementa does not guarantee availability or accuracy of third-party data feeds.
        </li>
        <li>
          <strong className="text-white/90">Smart-contract evolution:</strong> upgradeable proxies, multisigs, timelocks, or governance votes may alter withdrawal rules, fees, or collateral factors after your first deposit—monitor announcements from each protocol.
        </li>
        <li>
          <strong className="text-white/90">Bridges and wrapped assets:</strong> custodial bridges, liquidity networks, and canonical wrappers introduce timing, peg, censorship, and smart-contract risks; exploits may isolate funds on destination chains.
        </li>
        <li>
          <strong className="text-white/90">Malicious UI:</strong> phishing sites can imitate legitimate dApps; always verify domain names, contract addresses on multiple explorers, and hardware-wallet screens before approving high-risk transactions.
        </li>
      </ul>
      <p className="mt-4">
        Elementa does not endorse any token, NFT collection, yield farm, or airdrop. Labels such as &quot;verified&quot; or curated lists are convenience features only—they are not investment advice, audits, or guarantees that code is bug-free or founders are trustworthy.
      </p>
    </LegalSection>,
    <LegalSection key="10" title="10. Taxes, Reporting, and Regulatory Compliance">
      <p>
        Digital asset transactions may trigger income, capital gains, sales, VAT, withholding, or information-reporting obligations depending on your residency, entity type, and how local regulators classify crypto activity (property, currency, security-like instruments, or gambling proceeds).
      </p>
      <p className="mt-4">
        You are solely responsible for determining what you owe, maintaining documentation (purchase invoices, bridge receipts, staking statements), and filing with the appropriate authorities. Elementa does not act as your withholding agent or broker for most self-custody flows.
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-3 mt-4">
        <li>The wallet does not automatically compute cost basis, unrealized P&amp;L, or localized tax forms unless we explicitly ship such a feature and you opt in.</li>
        <li>Airdrops, forks, and governance distributions may be taxable upon receipt in some jurisdictions—consult a tax advisor.</li>
        <li>Privacy-enhancing transfers or mixers may themselves be regulated or prohibited where you live.</li>
      </ul>
      <p className="mt-4">
        Elementa does not provide tax, legal, or investment advice. If authorities lawfully require Elementa (as operator of websites or support channels) to retain or produce limited business records unrelated to your seed phrase, we may comply to the extent required by law after reviewing requests with counsel.
      </p>
    </LegalSection>,
    <LegalSection key="11" title="11. Intellectual Property and Limited License">
      <p>
        Elementa names, logos, documentation, UI assets, and wallet software (excluding components licensed under separate open-source licenses, such as MIT or Apache, where those licenses govern) are owned by Elementa or its licensors.
      </p>
      <p className="mt-4">
        Subject to these Terms, Elementa grants you a personal, non-exclusive, non-transferable, revocable license to download and run official wallet binaries or web builds solely for lawful self-custody and interaction with supported networks.
      </p>
      <p>You may not:</p>
      <ul className="list-disc pl-6 flex flex-col gap-3 mt-3">
        <li>Remove proprietary notices, circumvent technical restrictions, or distribute modified builds that imply endorsement</li>
        <li>Use Elementa trademarks in domain names, social handles, or merchandise that suggests affiliation without written consent</li>
        <li>Reverse engineer the Services except where mandatory national law permits interoperability testing</li>
        <li>Scrape documentation or APIs at rates that degrade infrastructure or violate robots.txt / integration terms</li>
      </ul>
      <p className="mt-4">
        Open-source components remain under their respective licenses; nothing in these Terms restricts rights granted by those licenses for the covered code only.
      </p>
    </LegalSection>,
    <LegalSection key="12" title="12. Amendments to These Terms">
      <p>
        We may modify these Terms by posting an updated version on this page and revising the &quot;Last Updated&quot; date. Archived copies may be retained internally for compliance but are not guaranteed publicly unless required by law.
      </p>
      <p className="mt-4">
        For material changes—especially those affecting dispute resolution, liability limits, or acceptable use—we may provide additional notice through the website banner, release notes, or in-app modal where technically feasible and legally required.
      </p>
      <ul className="list-disc pl-6 flex flex-col gap-3 mt-4">
        <li>Continued use of the Services after the stated effective date constitutes acceptance of the revised Terms if your jurisdiction permits browse-wrap or similar mechanisms.</li>
        <li>If you reject updated Terms, you must cease access immediately; uninstall wallet clients only after exporting addresses or records you need and securing your recovery phrase offline.</li>
        <li>Some jurisdictions grant consumers non-waivable rights—nothing here limits those mandatory protections.</li>
      </ul>
    </LegalSection>,
  ];

  const contentMap = Object.fromEntries(
    sections.filter(React.isValidElement).map((section) => {
      const t = (section.props as { title: string }).title;
      return [sectionAnchorFromTitle(t), section] as const;
    }),
  );

  return (
    <DocReaderLayout
      title="Terms and Conditions"
      subtitle="Rules that govern your use of Elementa websites, wallet, and related services."
      lastUpdated="May 2026"
      breadcrumb={[{ label: "Home", href: "/" }]}
      navGroups={termsNavGroups}
      tocItems={termsToc}
      contentMap={contentMap}
      enableNavSearch={false}
    />
  );
}
