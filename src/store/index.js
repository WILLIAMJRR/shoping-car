import { configureStore } from "@reduxjs/toolkit";
import productos from "./slice/productos.slice";
import counter from "./slice/counter.slice"

export default configureStore({
	reducer: {
		productos,
		counter
	},
});
