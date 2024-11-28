import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import "./App.css";
import NavBar from "./components/navigation/NavBar";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBar />,
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
	return <RouterProvider router={router} />;
}

export default App;
