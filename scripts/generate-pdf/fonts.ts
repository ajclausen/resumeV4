import { Font } from '@react-pdf/renderer';

export const registerFonts = () => {
  // Inter - Main body font (matching website)
  // Using CDN-hosted TTF files (react-pdf requires TTF/OTF format)
  Font.register({
    family: 'Inter',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.ttf',
        fontWeight: 500,
      },
      {
        src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-600-normal.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf',
        fontWeight: 700,
      },
    ],
  });

  // JetBrains Mono - For technical accents (dates, skills, contact)
  Font.register({
    family: 'JetBrains Mono',
    src: 'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.ttf',
    fontWeight: 400,
  });

  // Disable hyphenation for cleaner resume text
  Font.registerHyphenationCallback((word) => [word]);
};
