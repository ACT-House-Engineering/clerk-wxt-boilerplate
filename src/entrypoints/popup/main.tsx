import { ClerkProvider } from "@clerk/chrome-extension";
import { assert } from "@sindresorhus/is";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

import App from "./App.tsx";
import "./style.css";
import { env } from "../../lib/env.ts";

const extensionUrl = browser.runtime.getURL("");

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
	// Call resetErrorBoundary() to reset the error boundary and retry the render.

	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
			<button onClick={resetErrorBoundary} type="button">
				Try again
			</button>
		</div>
	);
}

const root = document.getElementById("root");
assert.truthy(root, "Root element not found");

const clerkPk = env.WXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const popupUrl = new URL("popup.html", extensionUrl).href;

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider
			publishableKey={clerkPk}
			afterSignOutUrl={popupUrl}
			signInFallbackRedirectUrl={popupUrl}
			signUpFallbackRedirectUrl={popupUrl}
			signInUrl={`${extensionUrl}/sign-in`}
		>
			{children}
		</ClerkProvider>
	);
}

ReactDOM.createRoot(root).render(
	<ErrorBoundary fallbackRender={fallbackRender}>
		<React.StrictMode>
			<Providers>
				<App />
			</Providers>
		</React.StrictMode>
	</ErrorBoundary>,
);
