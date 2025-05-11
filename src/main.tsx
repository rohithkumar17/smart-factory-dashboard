// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Mantine styles FIRST
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; // Since you are using DatePickerInput

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './i18n'; // Initialize i18next
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/ko';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{
        // You can customize your theme here
        // colorScheme: 'light', // or 'dark'
        // fontFamily: 'Verdana, sans-serif',
        // primaryColor: 'blue',
      }}>
        <DatesProvider settings={{ locale: navigator.language.split('-')[0] === 'ko' ? 'ko' : 'en' }}>
          <App />
        </DatesProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);