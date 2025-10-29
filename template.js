import React, { useState, useEffect } from 'react';

// --- ICONS (as inline SVGs) ---
// Using inline SVGs as we can't use imports like 'lucide-react' in a single file
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900 dark:text-stone-100">
    <path d="M20 20H80V30H20V20Z" fill="currentColor" />
    <path d="M20 45H80V55H20V45Z" fill="currentColor" />
    <path d="M20 70H50V80H20V70Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M60 70H80V80H60V70ZM65 72H75V78H65V72Z" fill="currentColor" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 2h-3a5 5 0 0 0-5 5c0 3 1.5 4 3 4.5V18" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FeatherIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /><path d="M16 8L2 22" /><path d="M17.5 15H9" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);


// --- MOCK DATA ---
// This data would come from Sanity.io
const MOCK_PROJECTS = [
  { id: 1, title: 'Retro E-Commerce', description: 'An online store with a pixel-art theme, built with Next.js and Stripe.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+1', githubUrl: '#', blogUrl: '#', liveUrl: '#' },
  { id: 2, title: 'DataViz Dashboard', description: 'Real-time analytics dashboard using D3.js and a Sanity.io backend.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+2', githubUrl: '#', blogUrl: null, liveUrl: '#' },
  { id: 3, title: 'Markdown Blog Engine', description: 'A lightweight, fast blog built with Astro and MDX.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+3', githubUrl: '#', blogUrl: '#', liveUrl: '#' },
  { id: 4, title: 'AI Copywriter', description: 'SaaS tool for generating marketing copy using the Gemini API.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+4', githubUrl: '#', blogUrl: '#', liveUrl: null },
];

// This data would come from Cloudinary
const MOCK_IMAGES = [
  { id: 1, src: 'https://placehold.co/600x400/9ca3af/374151?text=Gallery+Image+1', alt: 'Description of image 1' },
  { id: 2, src: 'https://placehold.co/400x600/9ca3af/374151?text=Gallery+Image+2', alt: 'Description of image 2' },
  { id: 3, src: 'https://placehold.co/600x600/9ca3af/374151?text=Gallery+Image+3', alt: 'Description of image 3' },
  { id: 4, src: 'https://placehold.co/600x450/9ca3af/374151?text=Gallery+Image+4', alt: 'Description of image 4' },
  { id: 5, src: 'https://placehold.co/400x400/9ca3af/374151?text=Gallery+Image+5', alt: 'Description of image 5' },
  { id: 6, src: 'https://placehold.co/600x700/9ca3af/374151?text=Gallery+Image+6', alt: 'Description of image 6' },
];

// This data would come from Sanity.io
const MOCK_POSTS = [
  { id: 1, title: 'The Rise of Server-Side Components', date: '2025-10-20', slug: 'ssc-rise', excerpt: 'Exploring how React Server Components are changing the way we build web apps.' },
  { id: 2, title: 'Designing for Nostalgia', date: '2025-10-15', slug: 'nostalgia-design', excerpt: 'Why do 80s and 90s aesthetics feel so right, right now? A dive into design trends.' },
  { id: 3, title: 'My CMS Showdown: Sanity.io vs. The Rest', date: '2025-10-05', slug: 'cms-showdown', excerpt: 'After building three projects, here are my thoughts on the headless CMS landscape.' },
];

// --- STYLED COMPONENTS ---
// Reusable components for the "newspaper" theme
const PageTitle = ({ children }) => (
  <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-stone-100 border-b-4 border-zinc-900 dark:border-stone-100 pb-2 mb-8">
    {children}
  </h1>
);

const Section = ({ children, className = '' }) => (
  <section className={`w-full max-w-5xl mx-auto px-6 py-16 sm:py-24 ${className}`}>
    {children}
  </section>
);

const FullVHSection = ({ children, className = '' }) => (
  <section className={`min-h-screen w-full flex items-center justify-center px-6 py-16 sm:py-24 ${className}`}>
    <div className="w-full max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-800 dark:text-stone-200 mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-zinc-400 dark:bg-stone-500"></span>
  </h2>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-stone-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-stone-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

// --- HEADER COMPONENT ---
const Header = ({ navigate, isDarkMode, onToggleDarkMode }) => {
  const navItems = ['Home', 'Projects', 'Gallery', 'Blog'];

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b-2 border-zinc-900 dark:border-stone-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate('home')} className="flex items-center gap-2" aria-label="Navigate home">
              <LogoIcon />
              <span className="text-xl font-bold tracking-wider text-zinc-900 dark:text-stone-100 hidden sm:block">
                THE DAILY DEV
              </span>
            </button>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, idx) => (
              <React.Fragment key={item}>
                <button
                  onClick={() => navigate(item.toLowerCase())}
                  className="px-3 py-2 rounded-md text-lg font-medium text-zinc-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  {item}
                </button>
                {idx < navItems.length - 1 && (
                  <span className="text-zinc-400 dark:text-stone-500">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu (placeholder) */}
          <div className="flex items-center">
             <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full text-zinc-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
            
            {/* Mobile menu button placeholder */}
            <div className="md:hidden ml-2">
              <button className="p-2 rounded-md text-zinc-700 dark:text-stone-300" aria-label="Open menu">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// --- PAGE COMPONENTS ---

// 1. Home Page
const HomePage = ({ navigate }) => {
  return (
    <main>
      {/* Section 1: Hero */}
      <FullVHSection className="bg-stone-100 dark:bg-zinc-900 text-center">
        <div>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-zinc-900 dark:text-stone-100">
            JANE DOE
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-700 dark:text-stone-300 max-w-3xl mx-auto font-medium">
            A creative developer & digital strategist, crafting pixel-perfect experiences from the 8-bit era to the modern web.
          </p>
          <button 
            onClick={() => navigate('projects')}
            className="mt-12 px-8 py-4 bg-zinc-900 text-stone-100 dark:bg-stone-100 dark:text-zinc-900 text-lg font-semibold rounded-md shadow-lg transform transition-transform hover:scale-105"
          >
            See My Work
          </button>
        </div>
      </FullVHSection>
      
      {/* Section 2: Experience */}
      <Section className="bg-stone-50 dark:bg-zinc-800/50">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-8">
          {/* Job 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-zinc-600 dark:text-stone-400">2021 - Present</h3>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100">Senior Developer @ WebCo</h3>
              <p className="mt-2 text-lg text-zinc-700 dark:text-stone-300">
                Leading front-end development on enterprise-level applications using Next.js, TypeScript, and Sanity.io. Mentoring junior developers and defining technical architecture.
              </p>
            </div>
          </div>
          {/* Job 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t-2 border-stone-200 dark:border-zinc-700 pt-8">
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-zinc-600 dark:text-stone-400">2018 - 2021</h3>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100">Web Developer @ Digital Agency</h3>
              <p className="mt-2 text-lg text-zinc-700 dark:text-stone-300">
                Built and maintained dozens of client websites, from marketing pages to full e-commerce solutions, focusing on performance and responsive design.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Section 3: Hobbies */}
      <Section>
        <SectionTitle>Interests & Hobbies</SectionTitle>
        <p className="text-lg text-zinc-700 dark:text-stone-300 max-w-3xl">
          When I'm not coding, you can find me restoring vintage computers, collecting 80s arcade cabinets, or experimenting with analog photography. I'm also an avid synthwave music enthusiast and enjoy long-distance running.
        </p>
      </Section>
      
      {/* Section 4: Projects Preview */}
      <Section className="bg-stone-50 dark:bg-zinc-800/50">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PROJECTS.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('projects')}
            className="px-6 py-3 border-2 border-zinc-900 dark:border-stone-100 text-zinc-900 dark:text-stone-100 text-lg font-semibold rounded-md transition-colors hover:bg-zinc-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-zinc-900"
          >
            View All Projects
          </button>
        </div>
      </Section>
    </main>
  );
};

// 2. Projects Page
const ProjectCard = ({ project }) => (
  <Card>
    <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100 mb-2">{project.title}</h3>
      <p className="text-zinc-700 dark:text-stone-300 mb-4">{project.description}</p>
    </div>
    <div className="flex items-center justify-end gap-2 p-4 bg-stone-100 dark:bg-zinc-700/50 border-t-2 border-zinc-900 dark:border-stone-500">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="GitHub">
          <GithubIcon className="w-6 h-6" />
        </a>
      )}
      {project.blogUrl && (
        <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="Blog post">
          <FeatherIcon className="w-6 h-6" />
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-600 dark:text-stone-300 hover:text-zinc-900 dark:hover:text-white" aria-label="Live demo">
          <ExternalLinkIcon className="w-6 h-6" />
        </a>
      )}
    </div>
  </Card>
);

const ProjectsPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Projects</PageTitle>
        <p className="text-lg text-zinc-700 dark:text-stone-300 max-w-3xl mb-12">
          A collection of my work, from professional contracts to personal experiments. Data for these projects would be managed in Sanity.io.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
};

// 3. Gallery Page
const GalleryPage = () => {
  return (
    <main>
      <Section>
        <PageTitle>Gallery</PageTitle>
        <p className="text-lg text-zinc-700 dark:text-stone-300 max-w-3xl mb-12">
          A visual moodboard of my interests, photography, and inspirations. These images would be hosted and optimized via Cloudinary.
        </p>
        {/* Using a simple column-based grid for masonry-like effect */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {MOCK_IMAGES.map(img => (
            <img 
              key={img.id}
              src={img.src} 
              alt={img.alt}
              className="w-full h-auto object-cover rounded-lg border-2 border-zinc-900 dark:border-stone-500 shadow-md transition-transform duration-300 hover:scale-105" 
            />
          ))}
        </div>
      </Section>
    </main>
  );
};

// 4. Blog Page
const BlogPage = () => {
  const heroPost = MOCK_POSTS[0];
  const otherPosts = MOCK_POSTS.slice(1);

  return (
    <main>
      {/* Hero Banner */}
      <div className="w-full bg-stone-200 dark:bg-zinc-800 py-24 sm:py-32">
        <Section className="!py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg font-semibold text-zinc-600 dark:text-stone-400 mb-2">Featured Post &bull; {heroPost.date}</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-stone-100 mb-4">{heroPost.title}</h1>
              <p className="text-xl text-zinc-700 dark:text-stone-300 mb-8">{heroPost.excerpt}</p>
              <a href={`/blog/${heroPost.slug}`} className="px-6 py-3 bg-zinc-900 text-stone-100 dark:bg-stone-100 dark:text-zinc-900 text-lg font-semibold rounded-md shadow-lg transform transition-transform hover:scale-105">
                Read More
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://placehold.co/600x400/d1d5db/374151?text=Blog+Hero" 
                alt="Blog hero" 
                className="rounded-lg object-cover shadow-xl border-2 border-zinc-900 dark:border-stone-500" 
              />
            </div>
          </div>
        </Section>
      </div>
      
      {/* Blog Post Cards */}
      <Section>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-800 dark:text-stone-200 mb-8">
          All Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_POSTS.map(post => (
            <Card key={post.id}>
              <a href={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <p className="text-sm font-medium text-zinc-600 dark:text-stone-400 mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-stone-100 mb-3">{post.title}</h3>
                  <p className="text-zinc-700 dark:text-stone-300">{post.excerpt}</p>
                </div>
                <div className="p-4 bg-stone-100 dark:bg-zinc-700/50 border-t-2 border-zinc-900 dark:border-stone-500">
                  <span className="font-semibold text-zinc-800 dark:text-stone-200 hover:underline">Read post &rarr;</span>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [page, setPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to the main div
  useEffect(() => {
    // In a real app, you'd also check system preference and save to localStorage
  }, [isDarkMode]);

  const navigate = (targetPage) => {
    setPage(targetPage);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (page) {
      case 'projects':
        return <ProjectsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'blog':
        return <BlogPage />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div 
      className={`
        ${isDarkMode ? 'dark' : ''} 
        min-h-screen 
        bg-stone-100 dark:bg-zinc-900 
        text-zinc-900 dark:text-stone-200 
        font-sans 
        transition-colors duration-300
        antialiased
        relative
      `}
      // This pseudo-element adds the grainy texture
      style={{
        position: 'relative',
      }}
    >
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.06]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          pointerEvents: 'none',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header 
          navigate={navigate} 
          isDarkMode={isDarkMode} 
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        />
        {renderPage()}
        
        {/* Footer */}
        <footer className="border-t-2 border-zinc-900 dark:border-stone-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-600 dark:text-stone-400">
            <p>&copy; {new Date().getFullYear()} Jane Doe. Built in the ether.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
