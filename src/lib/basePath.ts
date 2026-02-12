/**
 * Get the base path for assets.
 * For GitHub Pages deployment, returns /Portfolio2
 * For development and other environments, returns empty string
 */
export function getBasePath(): string {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // During SSR/build time, use environment variable or default
    // This will be replaced at build time by Next.js
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
  }
  
  // At runtime in browser, check the actual pathname
  const pathname = window.location.pathname;
  if (pathname.startsWith('/Portfolio2')) {
    return '/Portfolio2';
  }
  
  return '';
}

/**
 * Get a public asset URL with the correct base path.
 * Works during both SSR and client-side rendering.
 * 
 * @param path - The path to the asset (e.g., "images/video.mp4")
 * @returns The full URL with base path prepended
 */
export function getAssetUrl(path: string): string {
  const base = getBasePath();
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
}
