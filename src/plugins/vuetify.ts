/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1e3a5f',
          'primary-darken-1': '#0d1b2a',
          'primary-lighten-1': '#2d5a87',
          secondary: '#64748b',
          'secondary-darken-1': '#475569',
          'secondary-lighten-1': '#94a3b8',
          accent: '#3b82f6',
          'accent-lighten-1': '#60a5fa',
          success: '#10b981',
          'success-darken-1': '#059669',
          error: '#ef4444',
          'error-darken-1': '#dc2626',
          warning: '#f59e0b',
          'warning-darken-1': '#d97706',
          info: '#06b6d4',
          'info-darken-1': '#0891b2',
        },
      },
    },
  },
})
