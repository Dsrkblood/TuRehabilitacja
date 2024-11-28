import { useState } from "react";
import classes from "./NavBar.module.css";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenNav() {
		setIsOpen(prevOpen => !prevOpen);
	}

	return (
		<>
			<div className={classes.mobile}>
				<div>tuRehabilitacja</div>
				<div className={classes.hamburger}>
					<button
						onClick={handleOpenNav}
						className={`${classes.icon} ${isOpen ? classes.active : ""}`}>
						<div className={classes.bar}></div>
					</button>
				</div>
				{/* <div
					className={`${classes.sidebar} ${
						isOpen ? classes.active : ""
					}`}></div> */}
			</div>
		</>
	);
}
