import * as React from "react";

import { createRoot } from "react-dom/client";
import Signup from "./components/Signup";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);
createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
// createRoot(document.getElementById("root")!).render(<App />);
