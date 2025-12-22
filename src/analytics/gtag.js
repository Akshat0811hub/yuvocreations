// src/analytics/gtag.js
// Lightweight wrapper for gtag pageview/event calls.
// Make sure you added the GA4 gtag snippet in public/index.html (see next section).

export const pageview = (path) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
  });
};

export const event = ({ action, category, label, value }) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
