/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Layout from "/src/layout/Layout";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import HomePage from "../pages/HomePage";
import ProductoPage from "../pages/productoPage";

const Login = lazy(() => import("../pages/LoginPage"));

const Signup = lazy(() => import("../pages/RegistroUsuario"));


export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<Loading />}>
							<HomePage />
						</Suspense>
					),
				},
				{
					path: "/login",
					element: (
						<Suspense fallback={<Loading />}>
							<Login />
						</Suspense>
					),
				},
				{
					path: "/signup",
					element: (
						<Suspense fallback={<Loading isDark={true} />}>
							<Signup/>
						</Suspense>
					)
				},
				{
					path: "/product/:id",
					element: (
						<Suspense fallback={<Loading  />}>
							<ProductoPage/>
						</Suspense>
					)
				}
			],
		},
	],
	[
		{
			path: "*",
			element: <h1>404</h1>,
		},
	],
);
