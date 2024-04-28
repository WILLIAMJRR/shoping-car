//?Redux
import { useSelector } from "react-redux";
import CartasProductos from "./CartasProductos";
import HomePortada from "../components/HomePortada";
import Loading from "../components/Loading";

const HomePage = () => {
	const { productos } = useSelector((state) => state);

	return (
		<div className="" style={{
			marginTop: '3.6rem'
		}}>
			{
				productos === null ? (
					<Loading />
				) : (
					<>
						<HomePortada productos={productos} />
						<article
							style={{
								marginTop: "3rem",
							}}
							className=''
						>
							<section className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
								{productos?.map((producto) => (
									<CartasProductos
										key={producto.id}
										producto={producto}
									/>
								))}
							</section>
						</article>
					</>
				)}
		</div>
	);
};

export default HomePage;
