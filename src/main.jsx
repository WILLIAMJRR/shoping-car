import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//?Redux
import { Provider } from "react-redux";
import store from "./store/index.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.jsx";
//! Router Dom
"react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>

			<Provider store={store}>
				{/* <App /> */}
		<RouterProvider router={router} />
		</Provider>

	</React.StrictMode>,
);
