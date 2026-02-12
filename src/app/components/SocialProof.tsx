const metrics = [
  { value: "12K+", label: "Active Teams" },
  { value: "2.4M", label: "Assets Generated" },
  { value: "99.9%", label: "Brand Consistency" },
];

export function SocialProof() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Testimonial Side */}
          <div className="relative">
            {/* Large quotation mark - Swiss style */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-8"
              style={{ marginBottom: 'var(--space-5)' }}
            >
              <path
                d="M20 60V40C20 28.954 28.954 20 40 20H44V28H40C33.373 28 28 33.373 28 40V44H44V60H20Z"
                stroke="#111111"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <blockquote>
              <p 
                className="h3 mb-6"
                style={{ 
                  marginBottom: 'var(--space-5)',
                  lineHeight: '1.5',
                }}
              >
                Brandiseer transformed how we maintain visual coherence across 40+ markets. The systematic approach to design generation is unprecedented.
              </p>

              <footer className="flex flex-col gap-1">
                <cite 
                  className="caption"
                  style={{ 
                    fontStyle: 'normal',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  Sarah Chen
                </cite>
                <span 
                  className="caption"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  VP of Brand, TechCorp
                </span>
              </footer>
            </blockquote>
          </div>

          {/* Metrics Side */}
          <div className="flex flex-col justify-center gap-12">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="flex flex-col"
                style={{
                  borderTop: '1px solid var(--color-line)',
                  paddingTop: 'var(--space-4)',
                }}
              >
                <div 
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: 'var(--tracking-tight)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {metric.value}
                </div>
                <div 
                  className="caption"
                  style={{ 
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}