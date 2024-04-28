/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import cart from "../img/cart-trolley-ui-4-svgrepo-com.svg";

// eslint-disable-next-line react/prop-types
const CartasProductos = ({ producto }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/product/${producto.id}`);
	};

	return (
		<div
			onClick={handleClick}
			className='card position-relative  '
			style={{
				width: "18rem",
				height: "28rem",
				marginTop: "2rem",
				cursor:"cell",
			}}
		>
			<img
				src={producto.images[0].url}
				className=''
				style={{
					width: "100%",
					height: "230px",
					padding: "1rem",
				}}
				alt=''
			/>
			<div className='card-body bg-info-subtle'>
				<h5 className='card-title fw-bold'>{producto.title}</h5>
				<p className='card-text'>{producto.brand}</p>
				<div className='d-flex gap-5 align-items-center position-absolute bottom-0 mb-3 '>
					<span
						className='card-text d-flex ms-4 mt-2 text-black-50 '
						style={{ fontWeight: "bold" }}
					>
						Precio:
						<p className='ms-2 text-black'>${producto.price}</p>
					</span>

					<Link
						className='bg-danger'
						to='#'
						style={{
							borderRadius: "50%",
							width: "40px",
							height: "40px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginRight: "1rem",


						}}
					>
						<img
							className=''
							style={{
								width: "25px",
								height: "25px",
								cursor: "pointer",

							}}
							src={cart}
							alt=''
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartasProductos;
