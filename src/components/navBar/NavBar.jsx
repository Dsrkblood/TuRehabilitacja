import { useEffect, useRef, useState } from "react";
import { DATA } from "../../data.js";
import HeaderLinks from "./headerLinks/HeaderLinks";
import SidebarLinks from "./sidebarLinks/SidebarLinks";
import DesktopLinks from "./desktopNav/DesktopLinks";

import classes from "./NavBar.module.css";

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
				<HeaderLinks data={DATA.contact} />
				<nav className={classes.navMobile}>
					<div className={classes.logo}>
						<img src={DATA.aboutUs.logo} alt='logo TuRehabilitacja' />
					</div>

					<button
						aria-label='Otwórz menu nawigacji'
						ref={buttonRef}
						onClick={handleOpenSidebar}
						className={classes.menuButton}>
						<div
							className={`${classes.burgerIcon} ${
								isOpen ? classes.active : ""
							}`}></div>
					</button>
				</nav>
				<nav className={classes.navDesktop}>
					<div className={classes.logo}>
						<img src={DATA.aboutUs.logo} alt='logo TuRehabilitacja' />
					</div>
					<DesktopLinks />
				</nav>
				<SidebarLinks
					handleClose={handleOpenSidebar}
					data={DATA.aboutUs}
					ref={sidebarRef}
					isOpen={isOpen}
				/>
			</header>
			<div className={`${classes.overlay} ${isOpen ? classes.show : ""}`}></div>
		</>
	);
}
