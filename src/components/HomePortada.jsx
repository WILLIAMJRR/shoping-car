/* eslint-disable react/prop-types */

const HomePortada = ({ productos }) => {
	

	return (
		<section className='container '>
			<div
				id='carouselExample'
				className='carousel slide  '
				data-bs-ride='carousel'
			>
				<div className='carousel-inner '>
					<div className='carousel-item active'>
						<h2 className='fw-bold  bg-body text-center mb-3 mt-3 text-primary m-auto'>LO MEJOR EN NOTEBOOK</h2>
						<div className='d-flex mb-5 justify-content-center align-items-center flex-wrap'>
							<img
								src={productos?.[3].images[0].url}
								className='d-block w-25 '
								alt='...'
							/>
							<div>
								<h2 className='fw-bold text-danger '>OFERTA DEL DIA</h2>
								<h3 className='fw-bolder'>{productos?.[3].title}</h3>
								<h3 className='ms-p-32 text-dark-emphasis text-decoration-line-through'>
									$ 1700.00{" "}
								</h3>
								<span
									className='card-text d-flex ms-4 mt-2  text-warning '
									style={{ fontWeight: "bold" }}
								>
									Precio:
									<p className='ms-2 text-black'>$ {productos?.[3].price}</p>
								</span>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
					<h2 className='fw-bold  bg-body text-center mt-3 mb-3 text-primary m-auto'>LO MEJOR EN SMART TV</h2>
						<div className='d-flex mb-5 justify-content-center align-items-center flex-wrap'>
							<img
								src={productos?.[1].images[0].url}
								className='d-block w-25'
								alt='...'
							/>
							<div>
								<h2 className='fw-bold text-danger '>OFERTA DEL DIA</h2>
								<h3 className='fw-bolder'>{productos?.[1].title}</h3>
								<h3 className='ms-p-32 text-dark-emphasis text-decoration-line-through'>
									$ 800.00{" "}
								</h3>
								<span
									className='card-text d-flex ms-4 mt-2  text-warning '
									style={{ fontWeight: "bold" }}
								>
									Precio:
									<p className='ms-2 text-black'>$ {productos?.[1].price}</p>
								</span>
							</div>
						</div>
					</div>

				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExample'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExample'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</section>

		// {/* <div className=' d-flex justify-content-center align-items-center flex-wrap'>
		// 	<img
		// 		className='p-5  '
		// 		src={productos?.[3].images[0].url}
		// 		alt=''
		// 	/>
		// 	<div>
		// 		<h1 className='fw-bold '>OFERTA DEL DIA</h1>
		// 		<h3 className='fw-bolder'>{productos?.[3].title}</h3>
		// 		<h3 className='ms-2 text-dark-emphasis text-decoration-line-through'>$ 1700.00 </h3>
		// 		<span
		// 			className='card-text d-flex ms-4 mt-2  text-warning '
		// 			style={{ fontWeight: "bold" }}
		// 		>
		// 			Precio:
		// 			<p className='ms-2 text-black'>$ {productos?.[3].price}</p>
		// 		</span>
		// 	</div>
		// </div> */}
	);
};

export default HomePortada;
