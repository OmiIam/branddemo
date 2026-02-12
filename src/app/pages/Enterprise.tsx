import { Shield, Users, Globe, Lock, Database, Zap, Clock, HeadphonesIcon } from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with advanced security controls, encryption at rest and in transit, and comprehensive audit logging."
  },
  {
    icon: Users,
    title: "Advanced Permissions",
    description: "Role-based access control with granular permissions, team management, and approval workflows for complete governance."
  },
  {
    icon: Globe,
    title: "Multi-Region Support",
    description: "Deploy infrastructure in your preferred regions for compliance and performance optimization across global teams."
  },
  {
    icon: Lock,
    title: "SSO & Authentication",
    description: "Seamless integration with SAML 2.0 and OIDC providers including Okta, Azure AD, and Google Workspace."
  },
  {
    icon: Database,
    title: "Unlimited Brand Systems",
    description: "Manage an unlimited number of brand systems, sub-brands, and regional variations within a single account."
  },
  {
    icon: Zap,
    title: "Priority Processing",
    description: "Dedicated compute resources ensure your team's assets are generated and processed with guaranteed performance."
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Guaranteed availability with comprehensive monitoring, redundancy, and 24/7 system reliability."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Direct access to our enterprise support team with priority response times and a dedicated customer success manager."
  }
];

const useCases = [
  {
    title: "Global Marketing Teams",
    description: "Coordinate brand consistency across multiple regions, languages, and market segments with centralized control.",
    metric: "40+ Markets"
  },
  {
    title: "Agency Partnerships",
    description: "Enable external partners to create on-brand assets while maintaining approval workflows and brand governance.",
    metric: "15+ Agencies"
  },
  {
    title: "Product Ecosystems",
    description: "Manage visual systems for complex product portfolios with shared and unique brand elements across divisions.",
    metric: "100+ Products"
  }
];

const integrations = [
  "Figma",
  "Adobe Creative Cloud",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Microsoft Teams",
  "Google Workspace",
  "Jira",
  "Asana",
  "Monday.com",
  "Zapier",
  "Custom API"
];

export default function Enterprise() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        style={{
          paddingTop: 'clamp(5rem, 12vw, 8rem)',
          paddingBottom: 'clamp(4rem, 10vw, 6rem)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div 
                className="micro mb-4"
                style={{
                  color: 'var(--color-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Enterprise
              </div>
              
              <h1 
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                  lineHeight: '1.1',
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: 'var(--tracking-tight)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                Built for Organizations Managing Brand at Scale
              </h1>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                  maxWidth: '640px',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Enterprise-grade security, unlimited scalability, and dedicated support for organizations with complex brand ecosystems.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  style={{
                    padding: '16px 48px',
                    backgroundColor: '#0057FF',
                    color: '#FFFFFF',
                    fontWeight: '500',
                    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#003FCC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0057FF';
                  }}
                >
                  Contact Sales
                </button>

                <button
                  style={{
                    padding: '16px 48px',
                    border: '1px solid #111111',
                    fontWeight: '500',
                    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#111111';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#111111';
                  }}
                >
                  Download Security Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
          backgroundColor: 'var(--color-background-subtle)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'clamp(3rem, 8vw, 4rem)',
            }}
          >
            Enterprise Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={{
                    border: '1px solid var(--color-line)',
                    padding: 'var(--space-6)',
                    backgroundColor: 'var(--color-white)',
                  }}
                >
                  <Icon 
                    size={28} 
                    strokeWidth={1.5}
                    style={{ 
                      marginBottom: 'var(--space-4)',
                      color: 'var(--color-black)',
                    }}
                  />
                  
                  <h3 
                    className="h3"
                    style={{ 
                      marginBottom: 'var(--space-3)',
                      fontSize: '1.25rem',
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p 
                    className="caption"
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-body)',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'clamp(3rem, 8vw, 4rem)',
            }}
          >
            Enterprise Use Cases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid var(--color-line)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'var(--color-white)',
                }}
              >
                <div 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {useCase.metric}
                </div>

                <h3 
                  className="h3"
                  style={{ marginBottom: 'var(--space-3)' }}
                >
                  {useCase.title}
                </h3>

                <p 
                  className="caption"
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-body)',
                  }}
                >
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
          backgroundColor: 'var(--color-background-subtle)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  lineHeight: '1.15',
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: 'var(--tracking-tight)',
                  marginBottom: 'var(--space-5)',
                }}
              >
                Integrations
              </h2>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                Connect Brandiseer to your existing workflow tools and enterprise systems. Custom integrations available.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  style={{
                    border: '1px solid var(--color-line)',
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <span className="caption" style={{ fontWeight: '500' }}>
                    {integration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 6rem)',
          paddingBottom: 'clamp(4rem, 10vw, 6rem)',
          backgroundColor: 'var(--color-black)',
          color: 'var(--color-white)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20 text-center"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-5)',
            }}
          >
            Let's Discuss Your Requirements
          </h2>

          <p 
            className="body-large"
            style={{
              color: '#CCCCCC',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
            }}
          >
            Our enterprise team will help you design a solution that meets your organization's specific needs.
          </p>

          <button
            style={{
              padding: '16px 48px',
              backgroundColor: '#FFFFFF',
              color: '#111111',
              fontWeight: '500',
              transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E6E6E6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            Schedule Enterprise Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
