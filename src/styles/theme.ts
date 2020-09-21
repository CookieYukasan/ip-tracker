import { DefaultTheme, theme } from '@chakra-ui/core';

const CustomTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      200: 'hsl(0, 0%, 59%)',
      700: 'hsl(0, 0%, 17%)',
    },
  },
  fonts: {
    body: 'Rubik, system-ui, sans-serif',
    heading: 'Rubik, Georgia, serif',
    mono: 'Rubik, Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
};

export default CustomTheme;
