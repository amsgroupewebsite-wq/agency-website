// lib/gtag.js
export const GA_MEASUREMENT_ID = 'G-X8WN650JKH'; // Remplace par ton ID GA

// Fonction pour envoyer une page vue
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Fonction pour envoyer un événement personnalisé
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
