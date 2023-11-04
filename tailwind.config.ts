import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/img/hero.svg')",
        'icon-ok': "url('/img/icons/icon-check.svg')",
        'icon-mobile': "url('/img/icons/icon-mobile.svg')",
        'icon-cash': "url('/img/icons/icon-cash.svg')",
        'icon-transfer': "url('/img/icons/icon-transfer.svg')",
        'icon-credit': "url('/img/icons/icon-credit.svg')",
        'icon-phone': "url('/img/icons/icon-phone.svg')",
        'icon-time': "url('/img/icons/icon-time.svg')",
        'icon-config': "url('/img/icons/icon-config.svg')",
        'icon-contactless': "url('/img/icons/icon-contactless.svg')",
        'icon-arrow': "url('/img/icons/icon-arrow.svg')",
        'icon-arrow-purple': "url('/img/icons/icon-arrow-purple.svg')",
        'icon-entail': "url('/img/icons/icon-entail.svg')",
      },

      colors: {
        // Principal-colors
        'primary-normal': '#82269e',
        'primary-dark': '#701f88',
        'primary-light': '#9c4fb4',

        'secondary-normal': '#a950c4',
        'secondary-dark': '#9142a8',
        'secondary-light': '#bb71d2',

        // Neutral-colors
        'black-normal': '#232224',
        'black-dark': '#161617',
        'black-light': '#353436',

        'white-normal': '#f7f2fa',
        'white-dark': '#edeaef',
        'white-light': '#fefbff',

        // Gray Scale
        'gray-1': '#454446',
        'gray-2': '#555456',
        'gray-3': '#666566',
        'gray-4': '#767576',
        'gray-5': '#868587',
        'gray-6': '#969597',
        'gray-7': '#a6a6a7',

        // Auxiliary colors
        'red-normal': '#eb3d3d',
        'red-dark': '#d03333',
        'red-light': '#f05454',

        'green-normal': '#32d957',
        'green-dark': '#28bb49',
        'green-light': '#50e170',

        'yellow-normal': '#ffce52',
        'yellow-dark': '#d9b043',
        'yellow-light': '#ffd76b',
      },

      boxShadow: {
        nav: `
          0px 52px 80px rgba(169, 80, 196, .08),
          0px 16px 24px rgba(169, 80, 196, .05),
          0px 6px 10px rgba(169, 80, 196, .04),
          0px 2px 4px rgba(169, 80, 196, .03)
        `,
        btn: `
          0px 15px 18px rgba(169, 80, 196, .13),
          0px 6px 4px rgba(169, 80, 196, .08),
          0px 2px 2px rgba(169, 80, 196, .06),
          0px 6px 8px rgba(169, 80, 196, .03)
        `,
        btnHover: `
          0px 15px 30px rgba(169, 80, 196, .30),
          0px 6px 9px rgba(169, 80, 196, .15),
          0px 2px 2px rgba(169, 80, 196, .14),
          0px 6px 1px rgba(169, 80, 196, .09)
        `,
        dropdown: `
          0px 52px 80px rgba(169, 80, 196, .08),
          0px 16px 24px rgba(169, 80, 196, .05),
          0px 6px 10px rgba(169, 80, 196, .04),
          0px 2px 4px rgba(169, 80, 196, .03)
        `,
      },

      fontFamily: {
        title: ['var(--font-sora)'],
        body: ['var(--font-sourceSansPro)']
      },

      fontSize: {
        // TITLES
        'title-64': ['64px', {
          lineHeight: '100%',
          letterSpacing: '',
          fontWeight: '700',
        }],
        'title-52': ['52px', {
          lineHeight: '100%',
          letterSpacing: '',
          fontWeight: '700',
        }],
        'title-36': ['36px', {
          lineHeight: '120%',
          letterSpacing: '',
          fontWeight: '700',
        }],
        'pretitle-24': ['24px', {
          lineHeight: '130%',
          letterSpacing: '',
          fontWeight: '700',
        }],
        'pretitle-18': ['18px', {
          lineHeight: '125%',
          letterSpacing: '',
          fontWeight: '700',
        }],

        // BODY
        'body-18': ['18px', {
          lineHeight: '125%',
          letterSpacing: '',
          fontWeight: '400',
        }],
        'body-16': ['16px', {
          lineHeight: '140%',
          letterSpacing: '',
          fontWeight: '400',
        }],
        'strong-16': ['16px', {
          lineHeight: '122%',
          letterSpacing: '',
          fontWeight: '700',
        }],
      },
    },
  },
  plugins: [],
}

export default config
