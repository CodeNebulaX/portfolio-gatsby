module.exports = {
  siteTitle: 'Jesse Delorenzo | Senior Software Engineer',
  siteDescription: '',
  siteKeywords:
    'Jesse, Jesse Delorenzo, Delorenzo, senior software engineer, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://www.jessedelorenzo.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Jesse Delorenzo',
  location: 'North Bergen, New Jersey',
  email: 'delorenzojesse@gmail.com',
  github: 'https://github.com/CodeNebulaX',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jesse-m-b247ba331',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/CodeNebulaX',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
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
