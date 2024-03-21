import {
	BrowserRouter,
	Navigate,
	Route,
	Routes as Switch,
} from "react-router-dom";
import "./styles/global.css";
import { HomePage } from "./pages/Home";
import { SettingPage } from "./pages/Settings";

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route index element={<HomePage />} />
				<Route path="settings" element={<SettingPage />} />
			</Switch>
		</BrowserRouter>
	);
}
