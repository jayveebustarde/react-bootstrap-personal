const imageModules = import.meta.glob('/src/assets/images/*', {
  eager: true,
});

const PLACEHOLDER_KEY = '/src/assets/images/placeholder.jpg';

const placeholderModule = imageModules[PLACEHOLDER_KEY];
const placeholder = placeholderModule ? placeholderModule.default : undefined;

/**
 * Get an image URL from /src/assets/images by filename.
 * - filename: e.g. "my-project.png"
 * - returns: URL string or placeholder (or undefined)
 */
export function getProjectImageUrl(filename) {
    console.log(filename);
  if (!filename) return placeholder;

  const key = filename.startsWith('/src/')
    ? filename
    : `/src/assets/images/${filename}`;

  const mod = imageModules[key];

  if (!mod) {
    if (import.meta.env.DEV) {
      console.warn(
        `[imageLoader] Image not found for "${filename}". Expected key: "${key}"`
      );
    }
    return placeholder;
  }

  // Vite image modules export the URL as the default export
  return mod.default;
}
