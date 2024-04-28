import { useDispatch, useSelector } from "react-redux";

import { setCounter } from "../store/slice/counter.slice";

/* eslint-disable react/prop-types */
const ProductoPageDescripcion = ({ productoId }) => {
	const dispatch = useDispatch();

	const { counter } = useSelector((state) => state);

	const handleIncrement = () => {
		dispatch(setCounter(Number(counter) + 1));
	};
	const handleDecrement = () => {
		if (counter > 0) {
			dispatch(setCounter(counter - 1));
		}
	};

	return (
		<div
			className='card text-center  '
			style={{
				width: "100%",
			}}
		>
			<div className='card-header'>{productoId?.brand}</div>
			<div className='card-body d-flex flex-column justify-content-center align-items-center'>
				<h5 className='card-title fw-bold'>{productoId?.title}</h5>
				<p className='card-text w-100 text-start fw-lighter '>{productoId?.description}</p>

				{/* <Link
					href='#'
					className='btn btn-primary w-25'
					>
					Go somewhere
				</Link> */}
			</div>
			<div className='d-flex justify-content-around align-items-center'>
				<span
					className='card-text d-flex ms-4 mt-2 text-black-50 '
					style={{ fontWeight: "bold" }}
				>
					Precio:
					<p className='ms-2 text-black'>${productoId?.price}</p>
				</span>
				<div className='d-flex flex-row align-item-center gap-2'>
					<button
						onClick={handleDecrement}
						className='btn bg-dark-subtle w-50 h-50 fw-bold  d-flex justify-content-center align-items-center'
					>
						-
					</button>
					<h5 className='mt-2'>{counter}</h5>
					<button
						onClick={handleIncrement}
						className='btn bg-dark-subtle w-50 h-25   d-flex justify-content-center align-items-center'
					>
						+
					</button>
				</div>
			</div>
			<button className='btn bg-danger m-auto mb-4 w-50 fw-bold text-white'>
				Agregar Producto
			</button>
		</div>
	);
};

export default ProductoPageDescripcion;
