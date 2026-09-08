// Applied synchronously, before first paint — avoids a flash of the wrong
// theme on load (the React effect that normally sets this only runs after
// the DOM is already painted with the default dark styles). Loaded as an
// external same-origin file, not inline, because the site's CSP is
// `script-src 'self'` and silently blocks inline <script> tags.
(function () {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();
