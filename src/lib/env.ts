import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

/**
 * @see https://env.t3.gg/docs/core
 */
export const env = createEnv({
	/**
	 * The prefix that client-side variables must have. This is enforced both at
	 * a type-level and at runtime.
	 */
	clientPrefix: "WXT_PUBLIC_",
	client: {
		WXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
		WXT_PUBLIC_CLERK_FRONTEND_API_URL: z.url(),
		WXT_PUBLIC_CRX_KEY: z.string().min(1),
		WXT_PUBLIC_CLERK_SYNC_HOST: z.url(),
	},

	/**
	 * What object holds the environment variables at runtime. This is usually
	 * `process.env` or `import.meta.env`.
	 */
	runtimeEnv: import.meta.env,
});
