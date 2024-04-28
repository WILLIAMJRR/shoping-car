//Router
import { Link } from "react-router-dom";
import carro from "../img/cart-4-svgrepo-com.svg";
import tienda from "../img/ecommerce-house-svgrepo-com.svg";
import { useSelector } from "react-redux";

const Header = () => {
	const { counter } = useSelector((state) => state);
	return (
		<header>
			<nav className='navbar fixed-top bg-primary opacity-75  navbar-expand-lg bg-body-primary'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand fw-bolder text-white'
						to='/'
					>
						E-commerce
					</Link>
					<Link
						style={{
							position: "relative",
						}}
						className='btn btn-primary ms-5 ms-lg-0'
					>
						<img
							style={{
								width: "40px",
								height: "30px",
							}}
							src={carro}
							alt=''
						/>
						<span
							style={{
								position: "absolute",
								top: "0",
								left: "2rem",
							}}
							className={`  ${
								counter === ("" ||  0 )   ? "d-none " : "badge  text-bg-danger"
							}`}
						>
							{counter}
						</span>
					</Link>

					<button
						className='navbar-toggler '
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation '
					>
						<span className='navbar-toggler-icon  '></span>
					</button>
					<div
						className='collapse navbar-collapse '
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link className='btn-lg btn-lg-primary text-white fw-bold nav-link'
								to='/login'
								>
									Ingresa
								</Link>
							</li>
							<li className='btn-lg btn-lg-primary text-white fw-bold nav-item'>
								<Link
									className='btn-lg btn-lg-primary text-white fw-bold nav-link'
									to='/signup'
								>
									Registrar
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle'
									to='#'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Dropdown
								</Link>
								<ul className='dropdown-menu'>
									<li>
										<Link
											className='dropdown-item'
											to='#'
										>
											Action
										</Link>
									</li>
									<li>
										<Link
											className='dropdown-item'
											to='#'
										>
											Another action
										</Link>
									</li>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<Link
											className='dropdown-item'
											to='#'
										>
											Something else here
										</Link>
									</li>
								</ul>
							</li>
						</ul>
						<form
							className='d-flex gap-4 me-5'
							role='search'
						>
							{/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}

							<Link className='btn btn-primary '>
								<img
									style={{
										width: "40px",
										height: "30px",
									}}
									src={tienda}
									alt=''
								/>
							</Link>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
