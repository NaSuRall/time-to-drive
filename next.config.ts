import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Export static HTML with directories (good for static hosts)
	output: "export",
	// Ensure exported pages are generated with a trailing slash
	// so URLs like /contact/ map to /contact/index.html on the server.
	trailingSlash: true,
	images: {
		// Disable Next.js image optimization for static export / static hosts
		unoptimized: true,
	},
};

export default nextConfig;
