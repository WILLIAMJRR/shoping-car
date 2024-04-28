/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const RegistroUsuario = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState(false);
	const [enviado, setEnviado] = useState(false);

	//Peticion asincrona para crear un usuario
	const crearUsuario = async () => {
		const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";

		const data = {
			// Aquí debes completar los datos del nuevo usuario
			// Puedes proporcionar los valores que desees para cada campo
			// Por ejemplo:
			firstName,
			lastName,
			email,
			password,
			phone,
			// ...
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();
			console.log(result);
			// Aquí puedes manejar la respuesta de la API como desees
		} catch (error) {
			console.error("Error:", error);
			// Aquí puedes manejar el error de la solicitud
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación del Formulario
		if ([firstName, lastName, email, password, phone].includes("")) {
			console.log("Hay al menos un campo vacío");

			setError(true);
			return;
		}
		if (password.length < 6) {
			console.log("La contraseña debe tener al menos 6 caracteres");

			setError(true);
			return;
		}
		setError(false);


		// Enviar el formulario
		console.log("Formulario enviado");

		// Mostrar mensaje de formulario enviado
		setEnviado(true);
		setTimeout(() => {
			setEnviado(false);
		}, 3000);

		// Reiniciar el formulario
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setPhone("");

		//llamar a la funcion cuando se le da click al enviar el formulario
		crearUsuario();
	};

	return (
		<div
			className='container '
			style={{ marginTop: "10rem" }}
		>
					<h2 className="text-center m-auto fw-bold w-75">Bienvenido ingrese su registro</h2>
			<form
				onSubmit={handleSubmit}
				className='w-75 m-auto   '
			>
				{error && (
					<div className='bg-danger text-white text-center p-1 fw-bold rounded-2'>
						<p className='m-auto'>
							{/[^\s]/.test(firstName) &&
							/[^\s]/.test(lastName) &&
							/[^\s]/.test(email) &&
							/[^\s]/.test(phone)
								? password.length < 6
									? "La contraseña debe tener al menos 6 caracteres"
									: "Todos los campos son obligatorios"
								: "Hay al menos un campo vacío"}
						</p>
					</div>
				)}

				{enviado && (
					<div className='bg-success text-white text-center p-1 fw-bold rounded-2'>
						<p className=' text-white text-center m-auto'>
							Formulario enviado. ¡Gracias!
						</p>
					</div>
				)}

				<div className='mb-3'>
					<label
						htmlFor='firstName'
						className='form-label fw-bold'
					>
						NOMBRE
					</label>
					<input
						type='text'
						className='form-control border-3'
						id='firstName'
						aria-describedby='textHelp'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>

				<div className='mb-3'>
					<label
						htmlFor='lastName'
						className='form-label fw-bold'
					>
						APELLIDO
					</label>
					<input
						type='text'
						className='form-control border-3'
						id='lastName'
						aria-describedby='textHelp'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div className='mb-3'>
					<label
						htmlFor='email'
						className='form-label fw-bold'
					>
						EMAIL
					</label>
					<input
						type='email'
						className='form-control border-3'
						id='email'
						aria-describedby='emailHelp'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div
						id='emailHelp'
						className='form-text'
					>
						we'll never share your email with anyone else.
					</div>
				</div>

				<div className='mb-3'>
					<label
						htmlFor='password'
						className='form-label fw-bold'
					>
						CONTRASEÑA
					</label>
					<input
						type='password'
						className='form-control  border-3'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='mb-3'>
					<label
						htmlFor='phone'
						className='form-label  fw-bold'
					>
						CELULAR
					</label>
					<input
						type='phone'
						className='form-control  border-3'
						id='phone'
						aria-describedby='phoneHelp'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>

				<button
					type='submit'
					className='btn btn-primary'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegistroUsuario;
