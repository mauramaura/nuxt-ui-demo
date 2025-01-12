import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'lavender': {
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
      }
    }
  }
}
