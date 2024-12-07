import { useState, useRef, useEffect } from "react";
import classes from "./NavBar.module.css";
import HeaderLinks from "./HeaderLinks";
import NavLinks from "./NavLinks";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null);
	const buttonRef = useRef(null);
	//funkcja do otwierania/zamykania nawigacji
	function handleOpenNav() {
		setIsOpen(prevOpen => !prevOpen);
	}

	//funkcja sprawdzająca kliknięciue poza sidebar
	function handleClickOutside(event) {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target) && // Kliknięcie poza sidebar
			buttonRef.current &&
			!buttonRef.current.contains(event.target) // Kliknięcie poza przyciskiem
		) {
			setIsOpen(false);
		}
	}
	// Dodaj i usuń nasłuchiwacz zdarzeń
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);
	return (
		<>
			<HeaderLinks />
			<div className={classes.test}>
				<nav className={classes.nav}>
					<div className={classes.logo}>TuRehabilitacja</div>
					<div className={classes.po}>
						<button
							ref={buttonRef}
							onClick={handleOpenNav}
							className={`${classes.button} ${isOpen ? classes.active : ""}`}>
							<div className={classes.bar}></div>
						</button>
					</div>

					<div
						className={`${classes.overlay} ${
							isOpen ? classes.show : ""
						}`}></div>
				</nav>
				<NavLinks isOpen={isOpen} ref={sidebarRef} />
			</div>
		</>
	);
}
