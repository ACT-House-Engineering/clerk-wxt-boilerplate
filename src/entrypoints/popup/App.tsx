import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import ahLogo from "/logo.svg";
import "./App.css";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/chrome-extension";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<header>
				<SignedOut>
					<SignInButton mode="modal" />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
			<div>
				<a href="https://wxt.dev" target="_blank" rel="noreferrer">
					<img src={ahLogo} className="logo" alt="WXT logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>WXT + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)} type="button">
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the WXT and React logos to learn more
			</p>
		</>
	);
}

export default App;
