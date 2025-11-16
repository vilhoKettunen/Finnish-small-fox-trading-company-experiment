// Centralized web app config for all pages
(function () {
  // Cloudflare Worker proxy URL (keeps CORS happy)
  const WEB_APP_URL = 'https://yellow-king-52c6.vilhokettu1.workers.dev/exec';

  // OAuth client id (must match Worker + Apps Script)
  const OAUTH_CLIENT_ID = '857098772457-kuvq861sa844esf2jc4b7av1pnlmnn1c.apps.googleusercontent.com';

  // reCAPTCHA site key used in your pages (v2 checkbox or v3 as applicable)
  const RECAPTCHA_SITE_KEY = '6LdjcAgsAAAAABWoHl5dmFjbJQL61kOu7ddvkUZF';

  // Expose to window (do not overwrite if already present to keep flexibility)
  window.WEB_APP_URL = window.WEB_APP_URL || WEB_APP_URL;
  window.OAUTH_CLIENT_ID = window.OAUTH_CLIENT_ID || OAUTH_CLIENT_ID;
  window.RECAPTCHA_SITE_KEY = window.RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY;
})();