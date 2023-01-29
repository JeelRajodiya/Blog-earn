import * as React from "react";
import Login1 from "./components/Login1";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Login1 />,
	},
]);

export default () => (
	<>
		<Login1 />
	</>
);
