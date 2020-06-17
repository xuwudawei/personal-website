module.exports = {
  siteTitle: 'David Osei Opoku | Full Stack Software Engineer',
  siteDescription:
    'David Osei Opoku is a smart computer engineer, building things to make the world a better place',
  siteKeywords:
    'David Osei Opoku, David, Osei Opoku, kingdavid, software engineer, backend, back-end engineer, web developer, python, nodejs, docker, microservices, ghana',
  siteUrl: 'https://princeodame.com',
  siteLanguage: 'en_US',
  siteImage: 'https://princeodame.com/og.png',

  // googleVerification: 'dUgjmQBI7tQOciwUQ16Q31rC6bPvMShtEKYuckNowQ',

  name: 'David Osei Opoku',
  location: 'Accra, Ghana',
  email: 'xuwudawei@outlook.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/xuwudawei',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/david-osei-opoku-2803a6181/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/xuwudawei',
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/opodame/',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/OPOKUDAVIDOSEI1',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    // {
    //   name: 'Work',
    //   url: '#projects',
    // },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@OPOKUDAVIDOSEI1',
  googleAnalyticsID: 'UA-127661885-1',

  headerHeight: 100,

  // greenColor: '#64ffda',
  // navyColor: '#0a192f',

  srConfig: (delay = 200) => {
    return {
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
    };
  },
};
