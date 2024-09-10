import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://6705fd7dfb61a56334f5a2c6ed5af37f@o4507924339228672.ingest.us.sentry.io/4507924341522432",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect:React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  
  tracesSampleRate: 1.0, 
  
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
