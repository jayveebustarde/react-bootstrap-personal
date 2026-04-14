/**
 * Validates that required environment variables are set.
 * Throws an error if any critical env var is missing.
 */
export function validateEnvironment() {
  const requiredVars = {
    VITE_EMAILJS_SERVICE_ID: 'EmailJS Service ID',
    VITE_EMAILJS_TEMPLATE_ID: 'EmailJS Template ID',
    VITE_EMAILJS_API_KEY: 'EmailJS API Key',
  };

  const missing = [];

  Object.entries(requiredVars).forEach(([key, label]) => {
    if (!import.meta.env[key]) {
      missing.push(`${label} (${key})`);
    }
  });

  if (missing.length > 0) {
    const errorMsg = `Missing required environment variables:\n${missing.join('\n')}`;
    if (import.meta.env.PROD) {
      console.error(errorMsg);
    }
    return {
      isValid: false,
      missing,
      message: errorMsg,
    };
  }

  return {
    isValid: true,
    missing: [],
    message: 'All required environment variables are set.',
  };
}

/**
 * Gets EmailJS configuration with validation.
 * Returns null if any required env var is missing.
 */
export function getEmailJSConfig() {
  const validation = validateEnvironment();

  if (!validation.isValid) {
    console.error('EmailJS Configuration Error:', validation.message);
    return null;
  }

  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    apiKey: import.meta.env.VITE_EMAILJS_API_KEY,
  };
}
