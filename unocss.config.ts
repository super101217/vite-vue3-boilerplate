import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  // shortcuts: [
  //   ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  //   ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  // ],
  theme: {
    colors: {
      primary: '#032b86',
      hoverprimary: '#0e3ba5',
      dark: '#02355e',
      light: '#c1e3ff',
      secondary: '#82c7ff',
    },
    breakpoints: {
      sm: '639px',
      md: '767px',
      lg: '1023px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
