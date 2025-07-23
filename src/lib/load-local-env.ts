import dotenv from "dotenv";
import { runtime } from "std-env";

if (runtime !== "node") {
	throw new Error(
		"This script is only meant to be run in Node.js. Vite should automatically import env vars from .env.local",
	);
}

dotenv.config({
	path: ".env.local",
});
