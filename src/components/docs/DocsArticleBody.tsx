import type { ReactNode } from "react";
import Link from "next/link";

export function Introduction() {
  return (
    <DocSection
      id="introduction"
      title="1. Introduction"
      body={
        <>
          <p>
            Elementa Protocol is a unified digital infrastructure ecosystem designed to power the
            next generation of decentralized financial systems, blockchain applications, and exchange
            technologies. It is deliberately <strong>not</strong> marketed as a single app with a
            feature list: it is a <strong>layered architecture</strong> in which wallet, chain, and
            trading surfaces share design language, security assumptions, and upgrade paths.
          </p>
          <p>
            At its foundation, Elementa Protocol acts as a <strong>development and coordination hub</strong>{" "}
            for decentralized products. That means common standards for how users move assets, how
            modules authenticate to one another, and how new capabilities roll out without breaking
            self-custody or user trust.
          </p>
          <h3>How the stack comes together</h3>
          <p>
            The ecosystem is structured to grow into a full <strong>Web3 stack</strong> over time. The
            first live product is <strong>Elementa Wallet</strong>, the primary place users hold keys,
            sign transactions, and access ecosystem features. On the horizon, <strong>Elementa Blockchain</strong>{" "}
            provides dedicated execution and settlement infrastructure, while <strong>Elementa DEX</strong>{" "}
            focuses on trading and liquidity with deep wallet integration (routing, approvals, and
            safety checks users already understand from the wallet).
          </p>
          <p>
            Elementa Wallet is the <strong>entry gateway</strong>: it is where most people first
            experience the brand, where security is proven in production, and where future modules
            (chain interaction, DEX, governance) can be introduced as optional, consent-based layers
            rather than one-off siloed apps.
          </p>
          <h3>Who this documentation is for</h3>
          <ul>
            <li>
              <strong>Users and partners</strong> who want a clear picture of what exists today, what
              is on the roadmap, and how components relate.
            </li>
            <li>
              <strong>Builders and integrators</strong> who need a stable mental model of the ecosystem
              before SDKs and public infrastructure mature.
            </li>
            <li>
              <strong>Internal teams</strong> aligning product, design, and security around the same
              north star: unified, self-custodial, scalable infrastructure.
            </li>
          </ul>
        </>
      }
    />
  );
}

export function VisionAndPurpose() {
  return (
    <DocSection
      id="vision-and-purpose"
      title="2. Vision and Purpose"
      body={
        <>
          <p>
            The core vision of Elementa Protocol is to <strong>simplify and unify</strong> decentralized
            technologies into a structured, accessible, and scalable ecosystem. In practice, that means
            fewer one-off flows, fewer opaque trust assumptions, and a user experience that feels
            intentional end-to-end, from first download to advanced trading or chain operations.
          </p>
          <p>
            Today&apos;s environment still forces people through <strong>fragmented stacks</strong>:
            one wallet brand for custody, another site for swaps, yet another explorer or bridge UI,
            each with different wording and risk models. Elementa addresses this by investing in a
            single ecosystem framework where navigation, terminology, and safety patterns stay aligned.
          </p>
          <h3>Key objectives</h3>
          <ul>
            <li>Create a unified ecosystem for wallet, blockchain, and exchange systems.</li>
            <li>Reduce complexity in decentralized finance interactions without hiding material risk.</li>
            <li>Enable scalable and interoperable blockchain infrastructure purpose-built for the stack.</li>
            <li>Build a research-driven environment for continuous innovation and measured shipping.</li>
            <li>Bridge the gap between real-world usability and decentralized, user-owned custody.</li>
          </ul>
          <h3>What success looks like</h3>
          <p>
            Success is not only “more features.” It is measured by whether users can predict what will
            happen when they tap Send, Swap, or Connect, because <strong>the same mental model</strong>{" "}
            carries across surfaces. Elementa is designed to participate in Web3 while pushing toward a
            clearer, more coherent definition of how decentralized systems should feel at scale.
          </p>
        </>
      }
    />
  );
}

export function EcosystemHierarchy() {
  return (
    <DocSection
      id="ecosystem-hierarchy"
      title="3. Ecosystem Hierarchy"
      body={
        <>
          <p>
            The Elementa ecosystem is built as a <strong>hierarchy of layers</strong>, where each layer
            depends on the guarantees of the one below. Lower layers define trust boundaries and
            standards; upper layers deliver user-facing capability without re-inventing fundamentals
            on every release.
          </p>
          <h3>3.1 Elementa Protocol (core layer)</h3>
          <p>
            The protocol layer defines <strong>architectural principles</strong>, shared interfaces, and
            long-term direction. It is where research priorities meet governance of design decisions
            (for example, how signing prompts are framed, or how third-party modules may request
            capabilities). It functions as:
          </p>
          <ul>
            <li>A research and development engine for decentralized systems.</li>
            <li>A governance and design layer for ecosystem products.</li>
            <li>A standardization framework so tools remain compatible as the stack grows.</li>
          </ul>
          <p>
            This layer is intentionally <strong>not</strong> “just branding”: it is the place where
            cross-product consistency is enforced so users are not exposed to contradictory security or
            UX patterns between Wallet, Chain, and DEX.
          </p>
          <h3>3.2 Elementa Wallet (first product layer)</h3>
          <p>
            Elementa Wallet is the first <strong>production implementation</strong> of the vision. It is
            the primary access point for keys, balances, and approvals, and the natural home for
            ecosystem modules as they appear (e.g. deeper chain controls or trading surfaces that reuse
            the same approval flows users already trust).
          </p>
          <p>Core capabilities include:</p>
          <ul>
            <li>Self-custody wallet infrastructure.</li>
            <li>Multi-chain asset management.</li>
            <li>Send/receive and address hygiene.</li>
            <li>Token swapping where supported.</li>
            <li>Portfolio tracking and activity history.</li>
            <li>Hooks for future ecosystem modules (governance, analytics, developer tools).</li>
          </ul>
          <p>
            The wallet is explicitly a <strong>gateway product</strong>: it should deepen integration
            over time rather than remain a static utility.
          </p>
          <h3>3.3 Upcoming ecosystem products</h3>
          <h4 className="mt-4">Elementa Blockchain (in development)</h4>
          <p>
            A dedicated infrastructure layer for scalable decentralized applications, with native
            consideration for how Wallet signs transactions and how DEX liquidity and settlement may
            attach to the same security model.
          </p>
          <ul>
            <li>High-performance transaction processing.</li>
            <li>Developer-friendly architecture and clear boundaries for apps.</li>
            <li>Ecosystem-native integration with Elementa Wallet and DEX.</li>
            <li>Scalable consensus and execution environment suitable for real workloads.</li>
          </ul>
          <h4 className="mt-6">Elementa DEX (in development)</h4>
          <p>
            Trading infrastructure that treats the wallet as the <strong>control plane</strong> for
            approvals, limits, and safety messaging, reducing the historical gap between “where you
            hold assets” and “where you trade.”
          </p>
          <ul>
            <li>Efficient on-chain and cross-chain trading patterns where applicable.</li>
            <li>Reduced friction in decentralized swaps through predictable UX.</li>
            <li>Deep integration with Elementa Wallet for signing and policy.</li>
            <li>Liquidity routing and execution quality as first-class concerns.</li>
          </ul>
        </>
      }
    />
  );
}

export function ElementaWalletOverview() {
  return (
    <DocSection
      id="elementa-wallet-overview"
      title="4. Elementa Wallet Overview"
      body={
        <>
          <p>
            Elementa Wallet is a <strong>self-custody</strong> digital asset system for both newcomers
            and power users. You keep control of keys and recovery material; the software&apos;s job is
            to make that responsibility understandable, with clear confirmations, readable transaction
            summaries, and consistent navigation.
          </p>
          <p>
            Unlike custodial models, there is <strong>no back-office reset</strong> of your seed phrase.
            That trade-off is fundamental: higher sovereignty paired with user education and tooling that
            minimizes mistakes without taking custody away from the user.
          </p>
          <h3>Core features</h3>
          <ul>
            <li>Secure asset storage and portfolio visibility.</li>
            <li>Multi-chain support within the product&apos;s connectivity roadmap.</li>
            <li>Send and receive with strong address and network hygiene.</li>
            <li>Integrated swap flows where supported by integrations.</li>
            <li>Real-time portfolio tracking and transaction history.</li>
            <li>Foundation for ecosystem tools (future modules and deep links).</li>
          </ul>
          <h3>Platform availability</h3>
          <p>
            Clients are offered across <strong>desktop</strong>, <strong>Android</strong>, and{" "}
            <strong>iOS</strong> so users can choose the device model that fits their risk profile
            (e.g. hardware-enclave preferences on mobile vs. extended workflows on desktop). Layout
            and density adapt, but navigation patterns and safety language remain aligned.
          </p>
          <ul>
            <li>Desktop, richer dashboards and multi-step workflows.</li>
            <li>Android, mobile-first usage with hardware-backed options where available.</li>
            <li>iOS, platform-native patterns with the same core custody model.</li>
          </ul>
          <h3>Experience principles in the UI</h3>
          <p>
            The interface prioritizes <strong>scannability</strong> (what am I signing?),{" "}
            <strong>recoverability</strong> (how do I restore safely?), and <strong>progressive depth</strong>{" "}
            (advanced features available without cluttering the default path). Those principles mirror the
            ecosystem philosophy: powerful when needed, approachable by default.
          </p>
        </>
      }
    />
  );
}

export function ProductPhilosophy() {
  return (
    <DocSection
      id="product-philosophy"
      title="5. Product Philosophy"
      body={
        <>
          <p>
            Elementa Wallet is organized around <strong>three pillars</strong> that remain stable even as
            individual features ship or pivot: security, simplicity, and ecosystem integration. Shipping
            decisions are weighed against all three, not only velocity or short-term engagement.
          </p>
          <h3>5.1 Security first</h3>
          <p>
            Security is treated as a <strong>system property</strong>, not a marketing bullet.
            Self-custody means the product must surface risks honestly, avoid dark patterns that rush
            signing, and keep sensitive operations where users expect them (e.g. recovery phrase
            handling and export flows).
          </p>
          <ul>
            <li>Users retain full ownership of assets and keys.</li>
            <li>Secret Recovery Phrase supports independent recovery without our custody.</li>
            <li>Local encryption and device protections reduce exposure at rest.</li>
            <li>Optional biometrics add convenience without replacing cryptographic fundamentals.</li>
          </ul>
          <p>
            The objective is simple to state and hard to execute: <strong>no external party</strong>,{" "}
            including Elementa, should be able to move user funds without user action through the
            wallet&apos;s trust model.
          </p>
          <h3>5.2 Simplicity in design</h3>
          <p>
            Decentralized systems often overwhelm users with jargon and irreversible actions. The wallet
            reduces unnecessary complexity by structuring flows into clear steps, reusing components,
            and keeping language consistent across platforms.
          </p>
          <ul>
            <li>Fewer one-off screens; more reusable patterns.</li>
            <li>Guided flows for high-risk operations.</li>
            <li>Consistent navigation between desktop and mobile.</li>
            <li>Defaults that protect users who will never open “advanced” panels.</li>
          </ul>
          <p>
            Simplicity here is not “dumbing down” risk, it is <strong>making risk legible</strong> so
            users can consent with understanding.
          </p>
          <h3>5.3 Ecosystem integration</h3>
          <p>
            The wallet is the natural surface where users approve capabilities that belong to the broader
            stack, chain operations, trading, governance, and eventually developer-facing tooling.
            Integration is approached so that new modules feel like <strong>extensions of the same
            product</strong>, not random external sites with separate accounts and contradictory prompts.
          </p>
          <ul>
            <li>Blockchain interaction layers as they mature.</li>
            <li>Decentralized exchange and liquidity experiences.</li>
            <li>Governance and analytics where applicable.</li>
            <li>Future SDK-driven experiences for builders.</li>
          </ul>
        </>
      }
    />
  );
}

export function ResearchAndDevelopment() {
  return (
    <DocSection
      id="research-and-development"
      title="6. Research & Development (R&D)"
      body={
        <>
          <p>
            Elementa Protocol operates as a <strong>continuous research and delivery loop</strong>.
            Instead of treating documentation as static, the ecosystem expects iteration: discover gaps,
            design mitigations, ship in slices, measure outcomes, repeat.
          </p>
          <p>
            Research inputs include both <strong>technical reality</strong> (latency, finality, bridge
            risks, client constraints) and <strong>human reality</strong> (where users get confused, what
            they skim, what causes preventable loss).
          </p>
          <ul>
            <li>Market inefficiencies in existing blockchain systems.</li>
            <li>User experience challenges across wallets and DeFi.</li>
            <li>Scalability and interoperability limits that block adoption.</li>
            <li>Security lessons from industry incidents and threat models.</li>
          </ul>
          <h3>R&D focus areas</h3>
          <ul>
            <li>Cross-chain interoperability models and trust assumptions.</li>
            <li>Transaction efficiency and cost predictability for users.</li>
            <li>Scalable blockchain architecture aligned with wallet and DEX needs.</li>
            <li>UX simplification without hiding irreversible actions.</li>
            <li>Decentralized financial system design grounded in self-custody.</li>
          </ul>
          <p>
            Each release should be traceable to a hypothesis: what user or builder problem is smaller
            after this ships, and how will we know?
          </p>
        </>
      }
    />
  );
}

export function MarketPositioning() {
  return (
    <DocSection
      id="market-positioning"
      title="7. Market Positioning"
      body={
        <>
          <p>
            Elementa Protocol competes for attention in a crowded space of wallets, chains, and
            exchanges, but it is not positioning as only one of those categories. The narrative is
            intentionally <strong>multi-layer</strong>: a coherent stack where each layer reinforces the
            others.
          </p>
          <p>Distinct positioning statements:</p>
          <ul>
            <li>Not merely a wallet provider shipping isolated features.</li>
            <li>Not merely a blockchain project disconnected from daily user workflows.</li>
            <li>Not merely a DEX that treats custody as someone else&apos;s problem.</li>
          </ul>
          <h3>Target areas</h3>
          <ul>
            <li>Multi-chain asset ecosystems requiring clarity and safety.</li>
            <li>Self-custody financial systems for users who refuse opaque custody.</li>
            <li>Decentralized trading infrastructure that respects wallet-native approvals.</li>
            <li>Scalable blockchain platforms built with application realities in mind.</li>
          </ul>
          <p>
            Audiences span <strong>end users</strong> who want understandable security and{" "}
            <strong>builders</strong> who need dependable interfaces and honest boundaries as SDKs and
            infrastructure mature.
          </p>
        </>
      }
    />
  );
}

export function ProblemStatement() {
  return (
    <DocSection
      id="problem-statement"
      title="8. Problem Statement"
      body={
        <>
          <p>
            The industry has shipped enormous innovation, yet users still experience Web3 as a patchwork:
            different terminology for the same risk, different recovery stories, and integrations that
            behave like separate products bolted together.
          </p>
          <p>Structural limitations users and builders still hit:</p>
          <ul>
            <li>Fragmented user experiences across wallets, sites, and networks.</li>
            <li>Complex onboarding and weak mental models for key custody.</li>
            <li>Lack of unified ecosystem standards for prompts, policies, and upgrades.</li>
            <li>Security incidents amplified by confusing UX rather than only by malice.</li>
            <li>Limited interoperability without fragile glue scripts and one-off bridges.</li>
          </ul>
          <p>
            Elementa Protocol responds by building a <strong>unified, structured ecosystem</strong> that
            reduces fragmentation and improves usability without pretending custody can be “outsourced”
            away. The goal is confidence: users know what layer they are interacting with and what
            guarantees apply.
          </p>
        </>
      }
    />
  );
}

export function SecurityArchitecture() {
  return (
    <DocSection
      id="security-architecture"
      title="9. Security Architecture"
      body={
        <>
          <p>
            Security is treated as a <strong>requirement traceable through architecture</strong>, not a
            checkbox after UI polish. The wallet&apos;s threat model assumes motivated attackers, confused
            users, and hostile integrations attempting to abuse approvals, so defenses are layered.
          </p>
          <h3>Security model includes</h3>
          <ul>
            <li>Non-custodial design, we do not hold user funds or seed phrases.</li>
            <li>Encrypted local storage appropriate to each client platform.</li>
            <li>Recovery phrase workflow that reinforces user responsibility.</li>
            <li>Transaction verification surfaces that resist rushed approvals.</li>
            <li>Optional biometrics as an accelerator, not a replacement for cryptographic roots.</li>
          </ul>
          <p>
            Users maintain <strong>ownership and responsibility</strong> consistent with self-custody.
            No external party, including Elementa, should be able to unilaterally access user funds
            through the product&apos;s intended trust boundaries.
          </p>
          <h3>Operational discipline</h3>
          <p>
            Architecture also depends on process: secure release practices, dependency hygiene, incident
            response readiness, and clear communication when risk changes. Documentation like this exists
            partly so security expectations are explicit and reviewable.
          </p>
        </>
      }
    />
  );
}

export function CurrentStatus() {
  return (
    <DocSection
      id="current-status"
      title="10. Current Status"
      body={
        <>
          <p>
            Elementa Protocol is in <strong>active development</strong>. The ecosystem is real, but not
            every layer is live simultaneously, transparency about status helps users and partners align
            expectations with what is shipping today versus what is being built next.
          </p>
          <h3>Live product</h3>
          <ul>
            <li>
              <strong>Elementa Wallet</strong> (operational), product detail and download context live on
              the{" "}
              <Link href="/wallet" className="text-[#24bace] hover:underline">
                Wallet
              </Link>{" "}
              page.
            </li>
          </ul>
          <h3>In development</h3>
          <ul>
            <li>
              <strong>Elementa Blockchain</strong>, infrastructure and integration milestones tracked
              against protocol goals above.
            </li>
            <li>
              <strong>Elementa DEX</strong>, trading experiences designed around wallet-native approvals.
            </li>
          </ul>
          <p>
            Delivery is intentionally <strong>phased</strong>: deepen wallet reliability and ecosystem
            hooks first, then expand interoperable infrastructure so later layers inherit trustworthy UX
            patterns rather than reinventing them under pressure.
          </p>
        </>
      }
    />
  );
}

export function Roadmap() {
  return (
    <DocSection
      id="roadmap"
      title="11. Roadmap"
      body={
        <>
          <p>
            Roadmapping here is <strong>directional</strong>: sequencing matters more than fixed dates in a
            fast-moving space. The intent is to show how initiatives compound, wallet depth, chain
            launch, DEX expansion, then governance and developer surfaces, rather than a disconnected
            checklist.
          </p>
          <h3>Planned development stages</h3>
          <ul>
            <li>Continued expansion of Elementa Wallet features and integrations.</li>
            <li>Launch of Elementa Blockchain infrastructure aligned with wallet security assumptions.</li>
            <li>Launch of Elementa DEX capabilities with deep wallet integration.</li>
            <li>Introduction of governance mechanisms appropriate to decentralization goals.</li>
            <li>Developer SDK and tooling for ecosystem builders.</li>
            <li>Full ecosystem interoperability layer, fewer seams between modules for end users.</li>
          </ul>
          <p>
            Each stage is meant to <strong>strengthen the whole</strong>. A DEX launch is materially easier
            to trust when signing, policy, and incident expectations already match what users learned in
            the wallet.
          </p>
        </>
      }
    />
  );
}

export function Conclusion() {
  return (
    <DocSection
      id="conclusion"
      title="12. Conclusion"
      body={
        <>
          <p>
            Elementa Protocol is a long-term effort to reshape how decentralized systems are structured,
            accessed, and scaled. It starts from a live wallet product because that is where custody and
            trust are proven daily, then extends into chain and trading layers that inherit the same
            clarity and discipline.
          </p>
          <p>
            The ambition is not incremental polish alone; it is a <strong>coherent ecosystem
            architecture</strong> that users can learn once and apply across modules, backed by research,
            security engineering, and transparent delivery phases.
          </p>
          <p>
            If you are evaluating Elementa as a user, partner, or builder, use this guide as the shared
            map: what exists now, what is coming next, and how every layer connects back to self-custody
            and unified infrastructure.
          </p>
          <div className="mt-8 rounded-[16px] border border-white/10 bg-white/[0.04] px-5 py-6 text-center sm:px-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/70 md:text-base">
              Elementa Protocol, building unified decentralized infrastructure for the next era of digital
              systems.
            </p>
          </div>
        </>
      }
    />
  );
}

export function DocsArticleBody({ activeId }: { activeId?: string }) {
  let Content: ReactNode;

  switch (activeId) {
    case "introduction":
      Content = <Introduction />;
      break;
    case "vision-and-purpose":
      Content = <VisionAndPurpose />;
      break;
    case "ecosystem-hierarchy":
      Content = <EcosystemHierarchy />;
      break;
    case "elementa-wallet-overview":
      Content = <ElementaWalletOverview />;
      break;
    case "product-philosophy":
      Content = <ProductPhilosophy />;
      break;
    case "research-and-development":
      Content = <ResearchAndDevelopment />;
      break;
    case "market-positioning":
      Content = <MarketPositioning />;
      break;
    case "problem-statement":
      Content = <ProblemStatement />;
      break;
    case "security-architecture":
      Content = <SecurityArchitecture />;
      break;
    case "current-status":
      Content = <CurrentStatus />;
      break;
    case "roadmap":
      Content = <Roadmap />;
      break;
    case "conclusion":
      Content = <Conclusion />;
      break;
    default:
      Content = <Introduction />;
  }

  return (
    <div className="prose-docs flex flex-col gap-14 md:gap-16">
      {Content}
    </div>
  );
}

function DocSection({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-white/[0.06] pb-14 last:border-0 last:pb-0 md:pb-16"
    >
      <h2 className="mb-4 font-display text-xl font-semibold tracking-normal text-[var(--btn-primary-bg)] md:text-2xl md:leading-tight">
        {title.replace(/^\d+\.\s*/, "")}
      </h2>
      <div className="flex flex-col gap-4">{body}</div>
    </section>
  );
}
