import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "./styles/global.css";
import { HomePage } from "./pages/Home";

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route index element={<HomePage />} />
			</Switch>
		</BrowserRouter>
	);
}
