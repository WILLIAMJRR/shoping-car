/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartasProductos from "../pages/CartasProductos";


const ProductoPageSemilares = ({ productoId }) => {
	const [productosFiltrados, setProductosFiltrados] = useState();
	const { productos } = useSelector((state) => state);

	// Filtrado por categoria
	useEffect(() => {
		if (productos && productoId?.category) {
			setProductosFiltrados(
				productos?.filter((producto) => {
					if (producto.category.id === productoId?.category.id) {
						return producto;
					}
				}),
			);
		}
	}, [productoId?.category, productos]);

	return (
		<div
			className=''
			style={{
				marginTop: "8rem",
			}}
		>
			<h2 className="text-center fw-bold ">Descubre los Productos Similares</h2>
			<div className='container justify-content-center d-flex flex-wrap gap-5 '>
				{productosFiltrados?.map((productoFiltrado) => {
					if (productoFiltrado.id !== productoId.id) {
						return (
							<CartasProductos
								key={productoFiltrado.id}
								producto={productoFiltrado}
							/>
						);
					}
				})}
			</div>
		</div>
	);
};

export default ProductoPageSemilares;
