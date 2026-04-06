h
const services = [
  {
    id: 1,
    title: 'Frontend Development',
    desc: 'Responsive, accessible interfaces using HTML, CSS, and modern JavaScript frameworks. Pixel-perfect across all devices.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="#c8f060" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 6l4 4-4 4M10 14h6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'UI/UX Design',
    desc: 'Wireframes, prototypes, and polished high-fidelity designs using Figma. User-tested and conversion-optimized.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="#c8f060" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M3 8h14M8 8v9" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals optimization, semantic HTML, meta strategies, and structured data for top search rankings.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="#c8f060" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l3 3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'API Integration',
    desc: 'REST and GraphQL API consumption, third-party service integration, and custom backend connections.',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="#c8f060" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 10h10M10 5v10" />
        <circle cx="10" cy="10" r="7" />
      </svg>
    ),
  },
]

export default services
