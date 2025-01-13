import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'mj-primary': {
          '50': '#fef5fe',
          '100': '#fdeafc',
          '200': '#f9d5f6',
          '300': '#f4b3ed',
          '400': '#ec89df',
          '500': '#dd58cb',
          '600': '#c138ac',
          '700': '#a02b8c',
          '800': '#832571',
          '900': '#6b245b',
          '950': '#460c3a',
        },
        'mj-secondary': {
          '50': '#f8f6f9',
          '100': '#f3eff4',
          '200': '#e7e1e9',
          '300': '#d7c8d9',
          '400': '#c8b4ca',
          '500': '#a88aaa',
          '600': '#936f93',
          '700': '#7c5a7b',
          '800': '#674d66',
          '900': '#584357',
          '950': '#332433',
        },
      },
    },
  },
};
