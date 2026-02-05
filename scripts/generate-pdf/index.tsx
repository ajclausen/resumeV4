import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import path from 'path';
import { fileURLToPath } from 'url';
import { registerFonts } from './fonts';
import { ResumeDocument } from './ResumeDocument';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, '../../public/resume.pdf');

async function generatePDF() {
  console.log('Registering fonts...');
  registerFonts();

  console.log('Generating PDF...');
  const startTime = Date.now();

  await renderToFile(<ResumeDocument />, outputPath);

  const elapsed = Date.now() - startTime;
  console.log(`\nPDF generated successfully in ${elapsed}ms`);
  console.log(`Output: ${outputPath}`);
}

generatePDF().catch((error) => {
  console.error('Failed to generate PDF:', error);
  process.exit(1);
});
