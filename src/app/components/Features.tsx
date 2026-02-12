const features = [
  {
    title: "Brand Intelligence Engine",
    description: "Understands typography, spacing, and layout rules from your brand assets."
  },
  {
    title: "Systematic Asset Generation",
    description: "Create consistent visual outputs using mathematical layout logic."
  },
  {
    title: "Enterprise Grade Control",
    description: "Role-based access, approval workflows, structured design governance."
  }
];

export function Features() {
  return (
    <section 
      className="bg-white"
      style={{
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)',
      }}
    >
      <div 
        className="mx-auto px-6 lg:px-20"
        style={{ maxWidth: 'var(--grid-max-width)' }}
      >
        {/* Section Title */}
        <h2 
          className="mb-16"
          style={{ 
            marginBottom: 'clamp(3rem, 8vw, 4rem)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            lineHeight: '1.15',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--tracking-tight)',
          }}
        >
          Built for Brand Consistency
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                border: '1px solid var(--color-line)',
                padding: 'var(--space-6)',
                backgroundColor: 'var(--color-white)',
              }}
            >
              {/* Card number indicator - Swiss style */}
              <div 
                className="micro mb-6"
                style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-4)',
                  letterSpacing: '0.05em',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 
                className="h3 mb-4"
                style={{ marginBottom: 'var(--space-3)' }}
              >
                {feature.title}
              </h3>

              <p 
                className="caption"
                style={{ 
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-body)',
                  maxWidth: '90%',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}