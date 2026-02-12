import { Check, Zap, Layers, Grid3x3, Palette, FileCode } from 'lucide-react';

const capabilities = [
  {
    icon: Grid3x3,
    title: "Grid-Based Layout Engine",
    description: "Automatically generates layouts following your brand's mathematical spacing system and grid principles."
  },
  {
    icon: Palette,
    title: "Color System Intelligence",
    description: "Analyzes brand guidelines to apply consistent color hierarchies across all generated assets."
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Pre-configured design elements that maintain visual consistency across all brand touchpoints."
  },
  {
    icon: FileCode,
    title: "Export Standards",
    description: "Output assets in multiple formats optimized for web, print, and social media platforms."
  },
  {
    icon: Zap,
    title: "Real-Time Generation",
    description: "Create thousands of on-brand variations in seconds with intelligent automation."
  },
  {
    icon: Check,
    title: "Brand Compliance",
    description: "Built-in validation ensures every asset adheres to your established design guidelines."
  }
];

const features = [
  "AI-powered brand analysis",
  "Typography system extraction",
  "Automatic asset generation",
  "Multi-format export",
  "Batch processing",
  "Version control",
  "Template management",
  "Design approval workflows"
];

export default function Product() {
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
                Product
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
                Brand Intelligence.<br />
                Systematic Design.
              </h1>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                  maxWidth: '640px',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Brandiseer transforms your visual identity into an intelligent system that generates perfectly consistent brand assets at scale.
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
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
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
            Core Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
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
                    size={32} 
                    strokeWidth={1.5}
                    style={{ 
                      marginBottom: 'var(--space-4)',
                      color: 'var(--color-black)',
                    }}
                  />
                  
                  <h3 
                    className="h3"
                    style={{ marginBottom: 'var(--space-3)' }}
                  >
                    {capability.title}
                  </h3>

                  <p 
                    className="caption"
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-body)',
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature List */}
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
                Everything You Need
              </h2>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
              >
                A complete toolkit for maintaining brand consistency across every channel and format.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-3)',
                  }}
                >
                  <div 
                    style={{
                      width: '20px',
                      height: '20px',
                      border: '1px solid var(--color-black)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={14} strokeWidth={2} />
                  </div>
                  <span className="caption">{feature}</span>
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
            Ready to Transform Your Brand Process?
          </h2>

          <p 
            className="body-large mb-8"
            style={{
              color: '#CCCCCC',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
            }}
          >
            See how Brandiseer can help your team maintain perfect brand consistency.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
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
              Start Free Trial
            </button>

            <button
              style={{
                padding: '16px 48px',
                border: '1px solid #FFFFFF',
                color: '#FFFFFF',
                fontWeight: '500',
                transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#111111';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
