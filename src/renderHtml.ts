export function renderHtml() {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SwimPro Suite | AI-Powered Pool Management Platform</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>
          :root {
            color-scheme: light;
            --brand-primary: #0057ff;
            --brand-secondary: #00c9b7;
            --brand-dark: #082134;
            --brand-muted: #7a8ca6;
            --surface: #ffffff;
            --surface-alt: #f4f7fb;
            --surface-dark: #041321;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: linear-gradient(180deg, #eaf4ff 0%, #f8fbff 25%, #ffffff 100%);
            color: var(--brand-dark);
            line-height: 1.6;
          }

          header {
            position: relative;
            overflow: hidden;
            background: radial-gradient(circle at top left, rgba(0, 87, 255, 0.18), transparent 55%),
              radial-gradient(circle at top right, rgba(0, 201, 183, 0.18), transparent 50%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95));
            padding: 3.5rem clamp(1.5rem, 4vw, 6rem) 4.5rem;
            border-bottom: 1px solid rgba(8, 33, 52, 0.06);
          }

          nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 3rem;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            font-weight: 700;
            font-size: 1.1rem;
          }

          .logo span {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
            border-radius: 14px;
            display: grid;
            place-content: center;
            color: #fff;
            font-weight: 800;
            letter-spacing: -1px;
            font-size: 1.2rem;
          }

          .nav-links {
            display: flex;
            gap: 1.75rem;
            font-weight: 500;
            color: var(--brand-muted);
          }

          .nav-links a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .nav-links a:hover {
            color: var(--brand-dark);
          }

          .hero {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2.5rem;
            align-items: center;
          }

          .hero h1 {
            font-size: clamp(2.5rem, 4vw, 3.8rem);
            line-height: 1.1;
            letter-spacing: -0.04em;
            margin-bottom: 1.5rem;
          }

          .hero p {
            font-size: 1.05rem;
            color: var(--brand-muted);
            margin-bottom: 2rem;
          }

          .hero-cta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem 1.6rem;
            border-radius: 0.95rem;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .btn-primary {
            background: linear-gradient(135deg, var(--brand-primary), #1f78ff);
            color: #fff;
            box-shadow: 0 15px 35px rgba(0, 87, 255, 0.25);
          }

          .btn-secondary {
            background: rgba(255, 255, 255, 0.75);
            color: var(--brand-dark);
            border: 1px solid rgba(8, 33, 52, 0.08);
            backdrop-filter: blur(10px);
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 35px rgba(0, 87, 255, 0.25);
          }

          .hero-media {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 1.75rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
            padding: 2rem;
            box-shadow: 0 25px 60px rgba(13, 57, 85, 0.12);
            position: relative;
          }

          .hero-media::after {
            content: "";
            position: absolute;
            inset: 12% -12% -12% 12%;
            background: radial-gradient(circle at 35% 35%, rgba(0, 201, 183, 0.14), transparent 60%);
            z-index: -1;
            filter: blur(20px);
          }

          .hero-media h2 {
            font-size: 1.15rem;
            margin-bottom: 1rem;
          }

          .hero-metrics {
            display: grid;
            gap: 1.25rem;
            margin-top: 1.5rem;
          }

          .metric-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--surface-alt);
            padding: 1rem 1.35rem;
            border-radius: 1.1rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
          }

          .metric-card strong {
            font-size: 1.4rem;
          }

          section {
            padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 4vw, 6rem);
          }

          .section-heading {
            text-transform: uppercase;
            letter-spacing: 0.24em;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--brand-muted);
            margin-bottom: 0.85rem;
          }

          .section-title {
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            margin-bottom: 1rem;
            letter-spacing: -0.03em;
          }

          .section-subtitle {
            color: var(--brand-muted);
            max-width: 720px;
            margin-bottom: 2.5rem;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.75rem;
          }

          .feature-card {
            background: var(--surface);
            border-radius: 1.5rem;
            padding: 2.1rem 1.8rem;
            border: 1px solid rgba(8, 33, 52, 0.08);
            box-shadow: 0 20px 45px rgba(13, 57, 85, 0.08);
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            position: relative;
            overflow: hidden;
          }

          .feature-card::before {
            content: "";
            position: absolute;
            inset: -40% 60% 65% -15%;
            background: radial-gradient(circle at top, rgba(0, 87, 255, 0.12), transparent 65%);
            pointer-events: none;
          }

          .feature-icon {
            width: 48px;
            height: 48px;
            border-radius: 14px;
            background: rgba(0, 87, 255, 0.12);
            display: grid;
            place-content: center;
            font-size: 1.35rem;
            color: var(--brand-primary);
          }

          .feature-card h3 {
            font-size: 1.2rem;
          }

          .feature-card ul {
            margin-left: 1.1rem;
            color: var(--brand-muted);
            font-size: 0.95rem;
            display: grid;
            gap: 0.45rem;
          }

          .highlight {
            border: 1px solid rgba(0, 87, 255, 0.18);
            box-shadow: 0 30px 55px rgba(0, 87, 255, 0.12);
          }

          .ai-suite {
            background: var(--surface-dark);
            color: #f2fbff;
            border-radius: 2rem;
            padding: clamp(3rem, 6vw, 4.5rem);
            display: grid;
            gap: 2rem;
            margin-top: 2rem;
          }

          .ai-suite h2 {
            font-size: clamp(2.1rem, 3.5vw, 2.8rem);
          }

          .ai-suite p {
            color: rgba(242, 251, 255, 0.78);
          }

          .ai-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.75rem;
          }

          .ai-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1.4rem;
            padding: 1.8rem;
            display: grid;
            gap: 0.65rem;
          }

          .rewards {
            background: linear-gradient(135deg, rgba(0, 201, 183, 0.12), rgba(0, 87, 255, 0.12));
            border-radius: 2rem;
            padding: clamp(3rem, 6vw, 4rem);
            display: grid;
            gap: 1.5rem;
          }

          .rewards h3 {
            font-size: 1.8rem;
          }

          .reward-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
          }

          .reward-card {
            background: rgba(255, 255, 255, 0.75);
            border-radius: 1.2rem;
            padding: 1.5rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
            backdrop-filter: blur(12px);
          }

          .workflow {
            display: grid;
            gap: 1.5rem;
          }

          .workflow-steps {
            display: grid;
            gap: 1.25rem;
          }

          .workflow-step {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
            align-items: start;
          }

          .workflow-step span {
            display: inline-flex;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: rgba(0, 87, 255, 0.12);
            color: var(--brand-primary);
            align-items: center;
            justify-content: center;
            font-weight: 600;
          }

          .stats-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .stat {
            background: var(--surface);
            border-radius: 1.2rem;
            padding: 1.5rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
            text-align: center;
          }

          .stat strong {
            font-size: 2rem;
            display: block;
          }

          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.75rem;
            margin-top: 2rem;
          }

          .pricing-card {
            background: var(--surface);
            border-radius: 1.5rem;
            padding: 2.2rem 1.8rem;
            border: 1px solid rgba(8, 33, 52, 0.08);
            display: grid;
            gap: 1.2rem;
          }

          .pricing-card.highlight {
            background: linear-gradient(155deg, rgba(0, 87, 255, 0.12), rgba(0, 201, 183, 0.08));
            border-color: rgba(0, 87, 255, 0.25);
          }

          .pricing-card ul {
            list-style: none;
            display: grid;
            gap: 0.65rem;
            color: var(--brand-muted);
          }

          .pricing-card ul li::before {
            content: "•";
            color: var(--brand-primary);
            font-weight: bold;
            display: inline-block;
            width: 1rem;
          }

          .testimonials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 1.75rem;
            margin-top: 2.5rem;
          }

          .testimonial {
            background: var(--surface);
            border-radius: 1.3rem;
            padding: 1.8rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
            display: grid;
            gap: 1rem;
          }

          .testimonial strong {
            font-size: 1rem;
          }

          .integrations {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .integration-card {
            background: rgba(255, 255, 255, 0.75);
            border-radius: 1.2rem;
            padding: 1.6rem;
            border: 1px solid rgba(8, 33, 52, 0.06);
            backdrop-filter: blur(12px);
            display: grid;
            gap: 0.6rem;
          }

          .cta {
            background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
            color: #fff;
            border-radius: 2rem;
            padding: clamp(3rem, 6vw, 4.5rem);
            text-align: center;
            display: grid;
            gap: 1.5rem;
          }

          footer {
            padding: 2.5rem clamp(1.5rem, 4vw, 6rem) 3rem;
            background: #010b16;
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            display: grid;
            gap: 0.8rem;
          }

          footer a {
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
          }

          @media (max-width: 720px) {
            .nav-links {
              display: none;
            }

            .hero-cta {
              flex-direction: column;
              align-items: stretch;
            }

            .hero-media {
              padding: 1.6rem;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <nav>
            <div class="logo"><span>SP</span>SwimPro Suite</div>
            <div class="nav-links">
              <a href="#features">Platform</a>
              <a href="#ai">AI Co-Pilot</a>
              <a href="#rewards">Rewards</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Demo</a>
            </div>
          </nav>
          <div class="hero">
            <div>
              <h1>Run your entire pool service empire from one intelligent platform.</h1>
              <p>
                SwimPro Suite is the all-in-one SaaS that fuses route optimization, chemical intelligence, customer engagement,
                team operations, and proactive revenue tools into a single AI-powered workspace. Designed for residential and
                commercial pool professionals ready to outperform the status quo.
              </p>
              <div class="hero-cta">
                <a class="btn btn-primary" href="#contact">Book a Strategy Session</a>
                <a class="btn btn-secondary" href="#platform">Explore the Platform</a>
              </div>
            </div>
            <div class="hero-media">
              <h2>Unified Pool Command Center</h2>
              <p>
                Monitor chemical balances, automate maintenance tasks, and surface upsell opportunities without leaving the
                dashboard.
              </p>
              <div class="hero-metrics">
                <div class="metric-card">
                  <div>
                    <strong>42%</strong>
                    <div>Faster route completion</div>
                  </div>
                  <span>vs. legacy apps</span>
                </div>
                <div class="metric-card">
                  <div>
                    <strong>96%</strong>
                    <div>Customer retention</div>
                  </div>
                  <span>with loyalty automation</span>
                </div>
                <div class="metric-card">
                  <div>
                    <strong>120+</strong>
                    <div>AI playbooks</div>
                  </div>
                  <span>for growth & service</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="features">
          <p class="section-heading">Platform Operating System</p>
          <h2 class="section-title">Everything you need to manage, scale, and delight.</h2>
          <p class="section-subtitle">
            Bring scheduling, water health, field crew coordination, inventory, proposals, invoicing, and customer loyalty under
            one roof. SwimPro Suite is built for high-performing teams that demand clarity, automation, and actionable insights.
          </p>
          <div class="features-grid">
            <div class="feature-card highlight">
              <div class="feature-icon">🧭</div>
              <h3>Adaptive Route Command</h3>
              <p>
                Orchestrate tech schedules with live traffic, heat, and workload predictions. AI reroutes instantly when crews run
                late or customers reschedule.
              </p>
              <ul>
                <li>Predictive service windows with customer SMS updates</li>
                <li>Route grouping by skill, equipment, and proximity</li>
                <li>Technician performance insights with heatmaps</li>
              </ul>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🧪</div>
              <h3>Water Quality Intelligence</h3>
              <p>
                Capture test readings, automate chemical dosing recommendations, and flag anomalies using digital twin modeling for
                every pool you service.
              </p>
              <ul>
                <li>Photo recognition for strip tests & smart device integrations</li>
                <li>AI anomaly detection preventing algae blooms and corrosion</li>
                <li>Inventory sync to reorder chemicals before levels dip</li>
              </ul>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤝</div>
              <h3>Customer Experience Hub</h3>
              <p>
                Provide white-labeled portals, proactive maintenance plans, and automated reviews. Keep every homeowner delighted
                and informed.
              </p>
              <ul>
                <li>Dynamic service reports with before/after galleries</li>
                <li>Smart recommendations for add-ons & upgrades</li>
                <li>Two-way messaging with multilingual translations</li>
              </ul>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📈</div>
              <h3>Financial & Growth Control</h3>
              <p>
                Forecast revenue, manage proposals, sync accounting, and optimize recurring memberships with precision.
              </p>
              <ul>
                <li>Instant proposals with digital signatures & financing</li>
                <li>Revenue dashboards segmented by territory & pool type</li>
                <li>Automated collections, AR reminders, and autopay</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ai">
          <div class="ai-suite">
            <div>
              <h2>The SwimPro AI Co-Pilot</h2>
              <p>
                Augment every team member with contextual intelligence. Our AI models ingest route history, equipment telemetry,
                water chemistry, support tickets, and weather to deliver recommendations that make your crews smarter on day one.
              </p>
            </div>
            <div class="ai-grid">
              <div class="ai-card">
                <strong>Predictive Maintenance</strong>
                <p>
                  Receive proactive alerts on pump failures, heater issues, and chemical drifts with machine learning models trained
                  on millions of data points.
                </p>
              </div>
              <div class="ai-card">
                <strong>Instant Proposal Generator</strong>
                <p>
                  Upload site photos or service notes and let AI create polished upsell proposals, cost breakdowns, and ROI stories
                  in seconds.
                </p>
              </div>
              <div class="ai-card">
                <strong>Field Tech Copilot</strong>
                <p>
                  Voice-enabled assistant that guides techs through complex repairs, with step-by-step AR overlays and auto-logged
                  service notes.
                </p>
              </div>
              <div class="ai-card">
                <strong>Executive Insights</strong>
                <p>
                  Automated executive summaries surface growth opportunities, churn risks, and margin optimizations for every branch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="rewards">
          <div class="rewards">
            <h3>SwimCircle Loyalty & Referral Engine</h3>
            <p>
              Build lifetime value with a gamified customer rewards program. Layer memberships, referrals, milestones, and digital
              wallets that sync with your service schedule.
            </p>
            <div class="reward-grid">
              <div class="reward-card">
                <strong>Tiered Memberships</strong>
                <p>Offer bronze to platinum plans with perks like priority booking, seasonal openings, and on-demand cleanings.</p>
              </div>
              <div class="reward-card">
                <strong>Points Marketplace</strong>
                <p>Customers redeem points for upgrades, chemical bundles, partner spa services, or donate to local swim programs.</p>
              </div>
              <div class="reward-card">
                <strong>Referral Automation</strong>
                <p>Track referrals, auto-send rewards, and celebrate advocates with shareable highlight reels and social badges.</p>
              </div>
              <div class="reward-card">
                <strong>Smart Retention</strong>
                <p>Identify churn signals early and launch targeted save campaigns with tailored offers and concierge outreach.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow">
          <p class="section-heading">Operational Clarity</p>
          <h2 class="section-title">From lead to lifelong client in five effortless steps.</h2>
          <p class="section-subtitle">
            SwimPro Suite removes the friction at every phase of the pool lifecycle so your teams can focus on delivering pristine
            experiences, not paperwork.
          </p>
          <div class="workflow">
            <div class="workflow-steps">
              <div class="workflow-step">
                <span>1</span>
                <div>
                  <strong>Capture & qualify leads automatically</strong>
                  <p>
                    Use AI concierge chat, QR signage, or referral links. Leads sync to your CRM with instant scoring and next-best
                    action prompts.
                  </p>
                </div>
              </div>
              <div class="workflow-step">
                <span>2</span>
                <div>
                  <strong>Digitize every visit</strong>
                  <p>
                    Mobile work orders, offline photo capture, and smart equipment checklists ensure consistent service delivery and
                    audit-ready documentation.
                  </p>
                </div>
              </div>
              <div class="workflow-step">
                <span>3</span>
                <div>
                  <strong>Automate communication</strong>
                  <p>
                    Send branded visit summaries, proactive maintenance plans, and personalized upsells triggered by AI insights and
                    customer behavior.
                  </p>
                </div>
              </div>
              <div class="workflow-step">
                <span>4</span>
                <div>
                  <strong>Get paid instantly</strong>
                  <p>
                    Integrated payment links, autopay, and financing ensure cash flow while keeping accounting synced in real time.
                  </p>
                </div>
              </div>
              <div class="workflow-step">
                <span>5</span>
                <div>
                  <strong>Delight for life</strong>
                  <p>
                    Loyalty milestones, surprise-and-delight campaigns, and AI retention playbooks convert customers into raving
                    fans.
                  </p>
                </div>
              </div>
            </div>
            <div class="stats-bar">
              <div class="stat">
                <strong>4.9★</strong>
                <span>Average customer rating after automation</span>
              </div>
              <div class="stat">
                <strong>28%</strong>
                <span>Increase in chemical margin</span>
              </div>
              <div class="stat">
                <strong>18 hrs</strong>
                <span>Time saved weekly per dispatcher</span>
              </div>
              <div class="stat">
                <strong>3.2x</strong>
                <span>Referral lift vs. manual programs</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <p class="section-heading">Pricing built for expansion</p>
          <h2 class="section-title">Flexible plans that scale with your territory.</h2>
          <p class="section-subtitle">
            Start with a single crew or roll out across franchises. Every plan includes core scheduling, invoicing, and analytics
            with optional AI modules as you grow.
          </p>
          <div class="pricing-grid">
            <div class="pricing-card">
              <div>
                <h3>Launch</h3>
                <p>$199 / month</p>
              </div>
              <ul>
                <li>Up to 3 field techs</li>
                <li>Route optimization & visit reports</li>
                <li>Chemical logging & inventory alerts</li>
                <li>Email & SMS notifications</li>
              </ul>
              <a class="btn btn-secondary" href="#contact">Start Free Trial</a>
            </div>
            <div class="pricing-card highlight">
              <div>
                <h3>Growth</h3>
                <p>$449 / month</p>
              </div>
              <ul>
                <li>Unlimited techs across territories</li>
                <li>AI Co-Pilot & predictive maintenance</li>
                <li>SwimCircle loyalty & referral automation</li>
                <li>Advanced analytics & revenue forecasting</li>
              </ul>
              <a class="btn btn-primary" href="#contact">Request Custom Demo</a>
            </div>
            <div class="pricing-card">
              <div>
                <h3>Enterprise</h3>
                <p>Talk to sales</p>
              </div>
              <ul>
                <li>Multi-brand franchise controls</li>
                <li>Dedicated success architect & SLAs</li>
                <li>Open API, data warehouse sync</li>
                <li>Field service marketplace integrations</li>
              </ul>
              <a class="btn btn-secondary" href="#contact">Speak with Sales</a>
            </div>
          </div>
        </section>

        <section>
          <p class="section-heading">Loved by elite pool professionals</p>
          <h2 class="section-title">Why teams switch to SwimPro Suite.</h2>
          <div class="testimonials">
            <div class="testimonial">
              <p>
                “We replaced three different systems with SwimPro Suite. Dispatch runs on autopilot, AI flags equipment issues before
                they happen, and our customers rave about the loyalty program.”
              </p>
              <strong>Jamie C. — CEO, BlueWave Pools (18 crews)</strong>
            </div>
            <div class="testimonial">
              <p>
                “The instant proposal generator and financing integrations helped us close $250k in renovations last quarter. We’ve
                never seen growth like this.”
              </p>
              <strong>Elena R. — Director of Sales, Suncrest Aquatics</strong>
            </div>
            <div class="testimonial">
              <p>
                “SwimPro Suite is the first platform that understands commercial and residential needs. Reporting, compliance, and
                crew management finally live together.”
              </p>
              <strong>Marcus L. — VP Operations, HydroSphere Facilities</strong>
            </div>
          </div>
        </section>

        <section>
          <p class="section-heading">Seamless integrations</p>
          <h2 class="section-title">Connect your favorite tools in minutes.</h2>
          <p class="section-subtitle">
            SwimPro Suite connects with the systems your back office already trusts — or use our open APIs to bring custom
            workflows to life.
          </p>
          <div class="integrations">
            <div class="integration-card">
              <strong>Accounting & ERP</strong>
              <p>QuickBooks, Xero, NetSuite, Sage Intacct, Microsoft Business Central.</p>
            </div>
            <div class="integration-card">
              <strong>Payments & Finance</strong>
              <p>Stripe, Square, Affirm, Wisetack, Fleet fuel cards, ACH gateways.</p>
            </div>
            <div class="integration-card">
              <strong>Smart Devices & IoT</strong>
              <p>Pentair, Hayward, Fluidra, Sutro, WaterGuru, custom Modbus & BACnet.</p>
            </div>
            <div class="integration-card">
              <strong>Productivity & BI</strong>
              <p>HubSpot, Salesforce, Slack, Monday.com, PowerBI, Looker, Snowflake.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="cta">
            <h2>Ready to deliver luxury-level pool service at scale?</h2>
            <p>
              Join thousands of forward-thinking pool professionals upgrading from legacy tools. Our specialists will craft a launch
              roadmap tailored to your markets, crews, and growth goals.
            </p>
            <div>
              <a class="btn btn-primary" href="mailto:hello@swimprosuite.com">Schedule Your Demo</a>
            </div>
            <small>Average onboarding time: 10 days. White-glove migration included.</small>
          </div>
        </section>

        <footer>
          <div>© ${new Date().getFullYear()} SwimPro Suite. Engineered for modern pool professionals.</div>
          <div>
            <a href="#privacy">Privacy</a> ·
            <a href="#terms">Terms</a> ·
            <a href="mailto:careers@swimprosuite.com">Careers</a>
          </div>
        </footer>
      </body>
    </html>
  `;
}
