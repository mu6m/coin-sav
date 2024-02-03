import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	V2_MetaFunction,
} from "@remix-run/react";
import styles from "~/styles/global.css";
import { info, seo } from "~/lib/info";
import Nav from "./components/Nav";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const meta: V2_MetaFunction = () => {
	return seo(info);
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🪙</text></svg>"
				></link>
				<Meta />
				<Links />
			</head>
			<body>
				<main>
					<Nav />
					<Outlet />
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
