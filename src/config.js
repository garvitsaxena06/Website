module.exports = {
  siteTitle: 'Garvit Saxena | Software Engineer',
  siteDescription:
    'Garvit Saxena is a software engineer currently studying in IIPS, DAVV, who is looking forward for the technical and personal development, specializing in building exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Garvit Saxena, Garvit, Saxena, garvitsaxena06, software engineer, front-end engineer, web developer, javascript, full stack developer, frontend developer',
  siteUrl: 'https://garvitsaxena.me',
  siteLanguage: 'en_US',
  name: 'Garvit Saxena',
  location: 'Indore, India',
  email: 'garvitsaxena06@gmail.com',
  github: 'https://github.com/garvitsaxena06',
  twitterHandle: '@garvitsaxena06',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/garvitsaxena06',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/garvit-saxena-0b3488145/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/garvit.saxena/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/garvitsaxena06',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'History',
      url: '/#history',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
