import { GridIllustration } from './GridIllustration';

export function Hero() {
  return (
    <section className="relative bg-white">
      {/* Subtle background grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-line) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          opacity: 0.05,
        }}
      />

      <div 
        className="mx-auto px-6 lg:px-20 relative"
        style={{ 
          maxWidth: 'var(--grid-max-width)',
          paddingTop: 'var(--space-7)',
          paddingBottom: 'var(--space-7)',
        }}
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-6">
          {/* Left Content - 7 columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <h1 
              className="mb-6"
              style={{ 
                maxWidth: '640px',
                marginBottom: 'var(--space-4)',
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                lineHeight: '1.1',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Generate Visual Systems. Not Just Designs.
            </h1>
            
            <p 
              className="mb-8"
              style={{ 
                color: 'var(--color-text-secondary)',
                maxWidth: '560px',
                marginBottom: 'var(--space-6)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.6',
              }}
            >
              Create logos, ads, social content and brand assets with systematic brand intelligence.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="primary-button"
                style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(32px, 5vw, 48px)',
                  backgroundColor: '#0057FF',
                  color: '#FFFFFF',
                  fontWeight: '500',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#003FCC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0057FF';
                }}
              >
                Start Free
              </button>

              <button
                className="outlined-button"
                style={{
                  padding: 'clamp(12px, 2vw, 16px) clamp(32px, 5vw, 48px)',
                  border: '1px solid #111111',
                  fontWeight: '500',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
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
                View Product
              </button>
            </div>
          </div>

          {/* Right Visual - 5 columns */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <GridIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}