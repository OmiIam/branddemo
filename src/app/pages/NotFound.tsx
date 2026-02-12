import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="bg-white">
      <section 
        style={{
          paddingTop: 'clamp(8rem, 15vw, 12rem)',
          paddingBottom: 'clamp(8rem, 15vw, 12rem)',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20 text-center"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div 
            style={{
              fontSize: 'clamp(6rem, 15vw, 12rem)',
              lineHeight: '1',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--space-5)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            404
          </div>

          <h1 
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: 'var(--space-5)',
            }}
          >
            Page Not Found
          </h1>

          <p 
            className="body-large"
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)',
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/">
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
                Back to Home
              </button>
            </Link>

            <Link to="/resources">
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
                View Resources
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
