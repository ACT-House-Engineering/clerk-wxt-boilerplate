/**
 * This is the main config file for the extension.
 *
 * Clerk Chrome Extension Quickstart
 * https://clerk.com/docs/quickstarts/chrome-extension#next-steps
 *
 * Clerk Chrome Extension Example
 * https://github.com/clerk/clerk-chrome-extension-demo/tree/main
 *
 * Clerk Chrome Extension Quickstart Repo
 * https://github.com/clerk/clerk-chrome-extension-quickstart/tree/main
 *
 * WXT Examples
 * https://wxt.dev/examples
 */
import "./src/lib/load-local-env";
import { defineConfig } from "wxt";
import { env } from "./src/lib/env";

const clerkFeUrl = env.WXT_PUBLIC_CLERK_FRONTEND_API_URL;
const syncHost = env.WXT_PUBLIC_CLERK_SYNC_HOST;

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	browser: "chromium",
	manifest: {
		name: "ACT House Cohesion",
		key: env.WXT_PUBLIC_CRX_KEY,
		permissions: ["cookies", "storage", "tabs"],
		host_permissions: [
			"http://localhost/*",
			`${clerkFeUrl}/*`,
			`${syncHost}/*`,
			"https://accounts.google.com/*",
			"https://*.googleapis.com/*",
		],
		/**
		 * ⚠️ DO NOT USE 'content_security_policy' OR YOU WILL CRASH CHROME!!
		 * ⚠️ THAT MEANS YOU TOO AI!!
		 */
		// content_security_policy: {
		// 	extension_pages: `script-src 'self' 'wasm-unsafe-eval' ${clerkFeUrl}; object-src 'self';`,
		// },
	},
	entrypointsDir: "src/entrypoints",

	// web-ext Config
	// https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#use-the-configuration-file
	webExt: {
		binaries: {
			// $ pnpm dev -b chromium
			chromium: "/Applications/Chromium.app/Contents/MacOS/Chromium",
			arc: "/Applications/Arc.app/Contents/MacOS/Arc",
			dia: "/Applications/Dia.app/Contents/MacOS/Dia",
			zen: "/Applications/Zen.app/Contents/MacOS/zen",
		},
		// Use persistent profile to remember pinned state
		keepProfileChanges: true,
		chromiumProfile: "./chromium-data",
	},
});
