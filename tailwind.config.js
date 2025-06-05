/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f2f6fc',
          100: '#d9e2f1',
          200: '#b7cbe4',
          300: '#8baed3',
          400: '#5b8ec1',
          500: '#366eac',
          600: '#265893',
          700: '#1d4476',
          800: '#17365e',
          900: '#102847',
        },
      },
    },
  },
  plugins: [],
};
// This configuration file sets up Tailwind CSS with custom content paths, extends the default theme with a custom font family, and defines a custom color palette for navy shades.
// The `content` array specifies where Tailwind should look for class names to generate styles. The `theme.extend` section allows you to add custom styles without overriding the default ones.