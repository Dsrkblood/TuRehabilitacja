import { Outlet } from "react-router";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root() {
	return (
		<>
			<ScrollToTop />
			<NavBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
