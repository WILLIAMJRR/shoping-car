//estado Global

import { createSlice } from "@reduxjs/toolkit";

const productosSlice = createSlice({
	name: "productos",
	initialState: null,
	reducers: {
		setProductos: (state, action) => action.payload,
	},
});
export const { setProductos } = productosSlice.actions;

export default productosSlice.reducer;

export   const getProductosThunk = () => {
	return async (dispatch) => {
		const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products";

		try {
			const response = await fetch(url);
			const productos = await response.json();
			dispatch(setProductos(productos));
		} catch (error) {
			dispatch({ type: "GET_COUNTRIES_ERROR", payload: error.message });
		}
	};
};
