import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 bg-white z-50" style={{ borderBottom: '1px solid var(--color-line)' }}>
      <div 
        className="mx-auto px-6 lg:px-20"
        style={{ maxWidth: 'var(--grid-max-width)', height: '72px' }}
      >
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="micro uppercase tracking-wide" style={{ letterSpacing: '0.1em' }}>
                Brandiseer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link to="/product" className={`nav-link caption ${isActive('/product') ? 'active' : ''}`}>Product</Link>
            <Link to="/pricing" className={`nav-link caption ${isActive('/pricing') ? 'active' : ''}`}>Pricing</Link>
            <Link to="/enterprise" className={`nav-link caption ${isActive('/enterprise') ? 'active' : ''}`}>Enterprise</Link>
            <Link to="/resources" className={`nav-link caption ${isActive('/resources') ? 'active' : ''}`}>Resources</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              className="outlined-button caption"
              style={{
                padding: '10px 24px',
                border: '1px solid #111111',
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
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-50 md:hidden"
          style={{ top: '72px' }}
        >
          <div className="px-6 py-8 flex flex-col gap-8">
            <Link 
              to="/product" 
              className="h3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/pricing" 
              className="h3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/enterprise" 
              className="h3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enterprise
            </Link>
            <Link 
              to="/resources" 
              className="h3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <button 
              className="outlined-button mt-8"
              style={{
                padding: '12px 32px',
                border: '1px solid var(--color-black)',
                textAlign: 'left',
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          position: relative;
          color: var(--color-text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-black);
          transition: width var(--transition-base);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}