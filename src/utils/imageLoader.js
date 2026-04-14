const imageModules = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

/**
 * SVG data URL for a placeholder image (400x300px gray box with text)
 */
const SVG_PLACEHOLDER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23d3d3d3"/><text x="50%25" y="50%25" font-size="16" fill="%23666" text-anchor="middle" dominant-baseline="middle">Image Not Available</text></svg>`;

/**
 * Get an image URL from /src/assets/images by filename.
 * - filename: e.g. "my-project.png"
 * - returns: URL string or SVG placeholder
 */
export function getProjectImageUrl(filename) {
  if (!filename) {
    return SVG_PLACEHOLDER;
  }

  const key = filename.startsWith('/src/')
    ? filename
    : `/src/assets/images/${filename}`;

  const mod = imageModules[key];

  if (!mod) {
    if (import.meta.env.DEV) {
      console.warn(
        `[imageLoader] Image not found for "${filename}". Expected key: "${key}". Using placeholder.`,
      );
    }
    return SVG_PLACEHOLDER;
  }

  // Vite image modules export the URL as the default export
  return mod.default;
}
