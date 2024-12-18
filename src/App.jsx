import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <></>,
		children: [
			{ index: true, element: <Home /> },
			{ path: "uslugi", element: <Treatments /> },
			{ path: "cennik", element: <Pricing /> },
			{ path: "kontakt", element: <Contact /> },
		],
	},
]);

function App() {
	return (
		<RouterProvider router={router}>
			
		</RouterProvider>
	);
}

export default App;
