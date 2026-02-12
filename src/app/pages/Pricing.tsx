import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "per month",
    description: "Perfect for small teams and startups exploring brand consistency.",
    features: [
      "Up to 500 assets/month",
      "2 brand systems",
      "Basic templates",
      "Standard export formats",
      "Email support",
      "7-day asset history"
    ]
  },
  {
    name: "Professional",
    price: "199",
    period: "per month",
    description: "Built for growing teams with serious brand requirements.",
    features: [
      "Up to 5,000 assets/month",
      "10 brand systems",
      "Advanced templates",
      "All export formats",
      "Priority support",
      "30-day asset history",
      "Custom workflows",
      "API access"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "Unlimited power for organizations managing complex brand ecosystems.",
    features: [
      "Unlimited assets",
      "Unlimited brand systems",
      "Custom templates",
      "White-label exports",
      "Dedicated support",
      "Unlimited history",
      "Advanced workflows",
      "SSO & security",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "What happens if I exceed my asset limit?",
    answer: "You'll receive a notification when approaching your limit. You can purchase additional assets or upgrade to a higher tier."
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes. Annual billing includes a 20% discount. Contact sales for details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and can accommodate purchase orders for Enterprise customers."
  }
];

export default function Pricing() {
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
          className="mx-auto px-6 lg:px-20 text-center"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div 
            className="micro mb-4"
            style={{
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 'var(--space-4)',
            }}
          >
            Pricing
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
            Simple, Transparent Pricing
          </h1>

          <p 
            className="body-large"
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Choose the plan that fits your team's needs. All plans include core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section 
        style={{
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                style={{
                  border: plan.highlighted ? '2px solid var(--color-black)' : '1px solid var(--color-line)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'var(--color-white)',
                  position: 'relative',
                }}
              >
                {plan.highlighted && (
                  <div 
                    className="micro"
                    style={{
                      position: 'absolute',
                      top: 'var(--space-4)',
                      right: 'var(--space-4)',
                      backgroundColor: 'var(--color-black)',
                      color: 'var(--color-white)',
                      padding: '4px 12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Popular
                  </div>
                )}

                <div 
                  className="micro mb-6"
                  style={{
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {plan.name}
                </div>

                <div 
                  style={{
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <span 
                    style={{
                      fontSize: '3rem',
                      lineHeight: '1',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                  >
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span 
                      className="caption"
                      style={{ 
                        color: 'var(--color-text-secondary)',
                        marginLeft: 'var(--space-2)',
                      }}
                    >
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p 
                  className="caption mb-8"
                  style={{
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-6)',
                    minHeight: '60px',
                  }}
                >
                  {plan.description}
                </p>

                <button
                  style={{
                    width: '100%',
                    padding: '14px 32px',
                    marginBottom: 'var(--space-6)',
                    backgroundColor: plan.highlighted ? '#0057FF' : 'transparent',
                    color: plan.highlighted ? '#FFFFFF' : '#111111',
                    border: plan.highlighted ? 'none' : '1px solid #111111',
                    fontWeight: '500',
                    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.backgroundColor = '#003FCC';
                    } else {
                      e.currentTarget.style.backgroundColor = '#111111';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.backgroundColor = '#0057FF';
                    } else {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#111111';
                    }
                  }}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>

                <div 
                  style={{
                    borderTop: '1px solid var(--color-line)',
                    paddingTop: 'var(--space-5)',
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--space-3)',
                        }}
                      >
                        <Check 
                          size={16} 
                          strokeWidth={2}
                          style={{ 
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        />
                        <span className="caption">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 
                  className="h3"
                  style={{ marginBottom: 'var(--space-3)' }}
                >
                  {faq.question}
                </h3>
                <p 
                  className="caption"
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-body)',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 6rem)',
          paddingBottom: 'clamp(4rem, 10vw, 6rem)',
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
            Need a Custom Solution?
          </h2>

          <p 
            className="body-large"
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
            }}
          >
            Talk to our team about custom integrations, dedicated infrastructure, and tailored pricing.
          </p>

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
        </div>
      </section>
    </div>
  );
}
