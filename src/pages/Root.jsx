import { Outlet } from "react-router";
import NavBar from "../components/navBar/NavBar";

export default function Root() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	);
}
