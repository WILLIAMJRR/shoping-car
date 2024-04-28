/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoPageCarrusel from "../components/ProductoPageCarrusel";
import ProductoPageDescripcion from "../components/ProductoPageDescripcion";
import ProductoPageSemilares from "../components/ProductoPageSemilares";

const ProductoPage = () => {
	const [productoId, setProductoId] = useState(null);

	const { id } = useParams();

	const getproductoId = async () => {
		const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;

		try {
			const response = await fetch(url);
			const producto = await response.json();
			setProductoId(producto);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getproductoId();
	}, [id]);
	return (
		<div>
			<div
				className='d-flex flex-column flex-lg-row gap-5  container  '
				style={{
					marginTop: "8rem",
				}}
			>
				<ProductoPageCarrusel productoId={productoId} />
				<ProductoPageDescripcion productoId={productoId} />
			</div>
			<ProductoPageSemilares productoId={productoId}/>
		</div>
	);
};

export default ProductoPage;
