import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/global.css";
import { Routes } from "./routes.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
);
