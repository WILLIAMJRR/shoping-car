import { useEffect } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductoPage from "./pages/productoPage";
import RegistroUsuario from "./pages/RegistroUsuario";
import LoginPage from "./pages/LoginPage";

//haz un lazy load
// const Contactanos = React.lazy(() =>
// 	import("./pages/Contactanos" /*

import "./App.css";
//?Redux
import { useDispatch } from "react-redux";
//!Router Dom
import { Routes, Route } from "react-router-dom";

//!ESTADO GLOBAL
import { getProductosThunk } from "./store/slice/productos.slice";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductosThunk());
	}, [dispatch]);

	return (
		<div className="">
			<Header />
			<Routes>
				{/* RUTA HOME */}
				<Route
					path='/'
					element={<HomePage />}
				/>
				{/* RUTA DE LOS PRODUCTO POR ID*/}
				<Route
					path='/producto/:id'
					element={<ProductoPage />}
				/>

				{/* RUTAS ANIDADAS */}

				<Route path='/usuario'>
					{/* RUTA DE REGISTRO DE USUARIO */}
					<Route
						path='/usuario/registro'
						element={<RegistroUsuario />}
					/>
					{/* RUTA PARA ENTRAR AL LOGIN */}
					<Route
						path='/usuario/login'
						element={<LoginPage />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
