import { useEffect } from "react";

import Header from "../components/Header";

import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getProductosThunk } from "../store/slice/productos.slice";

const Layout = () => {

  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductosThunk());
	}, [dispatch]);
	return (
    <div>
      <Header/>
			<Outlet />
		</div>
	);
};

export default Layout;
