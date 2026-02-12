const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Changelog", href: "#" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ]
  }
};

export function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-background-subtle)',
        borderTop: '1px solid var(--color-line)',
        paddingTop: 'clamp(3rem, 8vw, 4rem)',
        paddingBottom: 'clamp(2rem, 5vw, 3rem)',
      }}
    >
      <div 
        className="mx-auto px-6 lg:px-20"
        style={{ maxWidth: 'var(--grid-max-width)' }}
      >
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 
                className="micro mb-6"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="footer-link caption"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div 
          style={{
            borderTop: '1px solid var(--color-line)',
            paddingTop: 'var(--space-5)',
            marginTop: 'var(--space-5)',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Logo */}
            <div className="micro" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Brandiseer
            </div>

            {/* Copyright */}
            <div className="caption" style={{ color: 'var(--color-text-secondary)' }}>
              © 2026 Brandiseer. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color var(--transition-base);
        }

        .footer-link:hover {
          color: var(--color-text-primary);
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-text-primary);
          transition: width var(--transition-base);
        }

        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
}