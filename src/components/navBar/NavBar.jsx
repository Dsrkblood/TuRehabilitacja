import { useEffect, useRef, useState } from "react";
import HeaderLinks from "./headerLinks/HeaderLinks";
import classes from "./NavBar.module.css";
import SidebarLinks from "./sidebarLinks/SidebarLinks";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null);
	const buttonRef = useRef(null);

	function handleOpenSidebar() {
		setIsOpen(prevOpen => !prevOpen);
	}

	function handleCloseSidebar(event) {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target) &&
			buttonRef.current &&
			!buttonRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleCloseSidebar);
		} else {
			document.removeEventListener("mousedown", handleCloseSidebar);
		}
		return () => {
			document.removeEventListener("mousedown", handleCloseSidebar);
		};
	}, [isOpen]);

	return (
		<>
			<header className={classes.header}>
				<HeaderLinks />
				<nav className={classes.nav}>
					<div className={classes.logo}>tuRehabilitacja</div>

					<button
						ref={buttonRef}
						onClick={handleOpenSidebar}
						className={classes.menuButton}>
						<div
							className={`${classes.burgerIcon} ${
								isOpen ? classes.active : ""
							}`}></div>
					</button>
				</nav>
				<SidebarLinks ref={sidebarRef} isOpen={isOpen} />
				<div
					className={`${classes.overlay} ${isOpen ? classes.show : ""}`}></div>
			</header>
		</>
	);
}
