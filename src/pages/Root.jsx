import NavBar from "../components/navigation/NavBar";
import { Outlet } from "react-router";

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
