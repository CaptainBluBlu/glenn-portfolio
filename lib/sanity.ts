// This file would normally contain the Sanity client configuration
// For now, it will export mock data

export const MOCK_PROJECTS = [
  { id: 1, title: 'Retro E-Commerce', description: 'An online store with a pixel-art theme, built with Next.js and Stripe.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+1', githubUrl: '#', blogUrl: '#', liveUrl: '#' },
  { id: 2, title: 'DataViz Dashboard', description: 'Real-time analytics dashboard using D3.js and a Sanity.io backend.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+2', githubUrl: '#', blogUrl: null, liveUrl: '#' },
  { id: 3, title: 'Markdown Blog Engine', description: 'A lightweight, fast blog built with Astro and MDX.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+3', githubUrl: '#', blogUrl: '#', liveUrl: '#' },
  { id: 4, title: 'AI Copywriter', description: 'SaaS tool for generating marketing copy using the Gemini API.', imageUrl: 'https://placehold.co/600x600/d1d5db/374151?text=Project+4', githubUrl: '#', blogUrl: '#', liveUrl: null },
];

export const MOCK_POSTS = [
  { id: 1, title: 'The Rise of Server-Side Components', date: '2025-10-20', slug: 'ssc-rise', excerpt: 'Exploring how React Server Components are changing the way we build web apps.' },
  { id: 2, title: 'Designing for Nostalgia', date: '2025-10-15', slug: 'nostalgia-design', excerpt: 'Why do 80s and 90s aesthetics feel so right, right now? A dive into design trends.' },
  { id: 3, title: 'My CMS Showdown: Sanity.io vs. The Rest', date: '2025-10-05', slug: 'cms-showdown', excerpt: 'After building three projects, here are my thoughts on the headless CMS landscape.' },
];
