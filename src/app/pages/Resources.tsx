import { FileText, Book, Video, Code } from 'lucide-react';

const resourceCategories = [
  {
    icon: Book,
    title: "Documentation",
    description: "Complete guides and technical documentation for implementing brand systems.",
    items: [
      { title: "Getting Started Guide", type: "Guide" },
      { title: "API Reference", type: "Technical" },
      { title: "Brand System Setup", type: "Tutorial" },
      { title: "Integration Patterns", type: "Technical" }
    ]
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs of key features and workflows.",
    items: [
      { title: "Platform Overview", type: "15 min" },
      { title: "Creating Brand Assets", type: "22 min" },
      { title: "Advanced Workflows", type: "18 min" },
      { title: "API Integration", type: "25 min" }
    ]
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of how organizations use Brandiseer.",
    items: [
      { title: "Global B2B SaaS Company", type: "Case Study" },
      { title: "E-commerce Retailer", type: "Case Study" },
      { title: "Financial Services Firm", type: "Case Study" },
      { title: "Creative Agency Network", type: "Case Study" }
    ]
  },
  {
    icon: Code,
    title: "Developer Resources",
    description: "Technical resources for developers building integrations.",
    items: [
      { title: "REST API Documentation", type: "API" },
      { title: "Webhooks Guide", type: "Guide" },
      { title: "SDKs & Libraries", type: "Code" },
      { title: "Sample Projects", type: "Code" }
    ]
  }
];

const latestArticles = [
  {
    date: "Feb 8, 2026",
    category: "Design Systems",
    title: "Building Scalable Visual Systems: A Framework for Brand Consistency",
    excerpt: "How leading organizations structure their design systems for long-term maintainability."
  },
  {
    date: "Feb 5, 2026",
    category: "Product Updates",
    title: "Introducing Advanced Workflow Automation",
    excerpt: "New approval workflows and role-based permissions for enterprise teams."
  },
  {
    date: "Feb 1, 2026",
    category: "Best Practices",
    title: "Typography at Scale: Managing Font Systems Across Platforms",
    excerpt: "Technical approaches to consistent typography across web, mobile, and print."
  },
  {
    date: "Jan 28, 2026",
    category: "Case Study",
    title: "How TechCorp Reduced Design Turnaround by 70%",
    excerpt: "A deep dive into systematic brand asset generation for a global software company."
  },
  {
    date: "Jan 25, 2026",
    category: "Engineering",
    title: "The Architecture of Brand Intelligence",
    excerpt: "Technical overview of how we analyze and systematize brand guidelines."
  },
  {
    date: "Jan 22, 2026",
    category: "Integration",
    title: "Connecting Figma to Your Brand System",
    excerpt: "Guide to syncing design files with Brandiseer's generation engine."
  }
];

export default function Resources() {
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
                Resources
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
                Learn. Build. Scale.
              </h1>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                  maxWidth: '640px',
                }}
              >
                Everything you need to master Brandiseer and build systematic brand processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section 
        style={{
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
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
                    {category.title}
                  </h3>

                  <p 
                    className="caption"
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--line-body)',
                      marginBottom: 'var(--space-5)',
                    }}
                  >
                    {category.description}
                  </p>

                  <div 
                    style={{
                      borderTop: '1px solid var(--color-line)',
                      paddingTop: 'var(--space-4)',
                    }}
                  >
                    {category.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: 'var(--space-3) 0',
                          borderBottom: itemIndex < category.items.length - 1 ? '1px solid var(--color-line)' : 'none',
                          transition: 'color var(--transition-base)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'inherit';
                        }}
                      >
                        <span className="caption">{item.title}</span>
                        <span 
                          className="micro"
                          style={{
                            color: 'var(--color-text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.type}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
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
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article, index) => (
              <a
                key={index}
                href="#"
                style={{
                  border: '1px solid var(--color-line)',
                  padding: 'var(--space-6)',
                  backgroundColor: 'var(--color-white)',
                  display: 'block',
                  transition: 'border-color var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-black)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-line)';
                }}
              >
                <div 
                  className="micro mb-4"
                  style={{
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {article.date} · {article.category}
                </div>

                <h3 
                  className="h3"
                  style={{ 
                    marginBottom: 'var(--space-3)',
                    fontSize: '1.25rem',
                  }}
                >
                  {article.title}
                </h3>

                <p 
                  className="caption"
                  style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-body)',
                  }}
                >
                  {article.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section 
        style={{
          paddingTop: 'clamp(4rem, 10vw, 6rem)',
          paddingBottom: 'clamp(4rem, 10vw, 6rem)',
        }}
      >
        <div 
          className="mx-auto px-6 lg:px-20"
          style={{ maxWidth: 'var(--grid-max-width)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              style={{
                border: '1px solid var(--color-line)',
                padding: 'var(--space-7)',
              }}
            >
              <h3 
                className="h2"
                style={{ marginBottom: 'var(--space-4)' }}
              >
                Need Help?
              </h3>

              <p 
                className="body-large"
                style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Our support team is available to help you get the most out of Brandiseer.
              </p>

              <button
                style={{
                  padding: '14px 40px',
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
                Contact Support
              </button>
            </div>

            <div 
              style={{
                border: '1px solid var(--color-line)',
                padding: 'var(--space-7)',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-white)',
              }}
            >
              <h3 
                className="h2"
                style={{ marginBottom: 'var(--space-4)' }}
              >
                Developer?
              </h3>

              <p 
                className="body-large"
                style={{
                  color: '#CCCCCC',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Explore our API documentation and build custom integrations.
              </p>

              <button
                style={{
                  padding: '14px 40px',
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
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
