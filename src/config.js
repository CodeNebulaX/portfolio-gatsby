module.exports = {
  siteTitle: 'S.F. Holness | Senior Software Engineer',
  siteDescription: '',
  siteKeywords:
    'Swainson, Swainson Finn Holness, Finn Holness, EatCrypto, software engineer, front-end engineer, web developer, javascript, solidity developer',
  siteUrl: 'https://www.finnholness.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Swainson Finn Holness',
  location: 'Park City, Utah',
  email: 'finn.holness@gmail.com',
  github: 'https://github.com/EatCrypto',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/finn-holness',
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
