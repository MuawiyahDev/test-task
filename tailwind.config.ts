import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
      screens: {
        'xl': '1440px'
      },
      fontFamily: {
        raleway: ['Nunito Sans', 'arial'],
        'jb-mono': ['JetBrains Mono', 'monospace']
      },
      letterSpacing: {
        '0.5': '0.0125em',
        '1': '0.025em',
        '1.5': '0.0425em',
        '2': '0.05em'
      },
      lineHeight: {
        '12': '3rem'
      },
      keyframes: {
        blinkKeyframes: {
          '0%, 49.999%': {
            opacity: '1'
          },
          '50.00%, 99.999%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        typewriterKeyframes: {
          '0.001%, 99.999%': {
            background: 'color-mix(in srgb, currentColor 100%, transparent)',
          },
          '100%': { opacity: '1' },
        },
        hideDelayKeyframes: {
          '0%': { opacity: '0' },
          '0.001%, 99.999%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        showDelayKeyframes: {
          '0%': { opacity: '1' },
          '0.001%, 99.999%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInKeyframes: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideOutKeyframes: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        }
      },
      animation: {
        'typewriter': 'typewriterKeyframes 1s forwards',
        'hide-delay': 'hideDelayKeyframes 1s step-end',
        'show-delay': 'showDelayKeyframes 1s forwards',
        'slide-in': 'slideInKeyframes 150ms ease-in-out',
        'slide-out': 'slideOutKeyframes 150ms ease-in-out',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-blink': (value) => ({
            animation: value + ` blinkKeyframes 0.1s forwards`,
          }),
        },
        { values: theme('zIndex') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-ease': (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme('transitionTimingFunction') }
      )
    }),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
