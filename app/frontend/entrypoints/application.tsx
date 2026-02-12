import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import App from '../components/App';

// Custom theme with a bold, refined aesthetic
const theme = createTheme({
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Courier New, monospace',
  headings: {
    fontFamily: 'Cal Sans, Georgia, serif',
    fontWeight: '600',
  },
  primaryColor: 'indigo',
  colors: {
    // Custom indigo scale for a sophisticated look
    indigo: [
      '#f0f1ff',
      '#e0e2ff',
      '#c1c5ff',
      '#a2a8ff',
      '#848bff',
      '#656eff',
      '#4751ff',
      '#3944cc',
      '#2b3399',
      '#1d2266',
    ],
  },
  defaultRadius: 'md',
  cursorType: 'pointer',
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('hey now')
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <App />
        </MantineProvider>
      </React.StrictMode>
    );
  }
});

