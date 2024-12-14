import { Outlet } from "react-router";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

export default function Root() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
