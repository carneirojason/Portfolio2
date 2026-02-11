/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? process.env.BASE_PATH || "" : "";
const assetPrefix = isGitHubPages && basePath ? basePath + "/" : "";

const nextConfig = {
  // Static export only when building for GitHub Pages
  ...(isGitHubPages && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    ...(basePath && { basePath }),
    ...(assetPrefix && { assetPrefix }),
  }),
};

export default nextConfig;
