import { useState, useRef, useEffect } from "react";
import classes from "./NavBar.module.css";
import LinkNav from "./LinkNav";
import { Outlet } from "react-router";

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
			<div className={classes.mobile}>
				<div className={classes.logo}>TuRehabilitacja</div>
				<div className={classes.hamburger}>
					<button
						ref={buttonRef}
						onClick={handleOpenNav}
						className={`${classes.icon} ${isOpen ? classes.active : ""}`}>
						<div className={classes.bar}></div>
					</button>
				</div>
				<div
					ref={sidebarRef}
					className={`${classes.sidebar} ${isOpen ? classes.active : ""}`}>
					<div className={classes.sideBarLinks}>
						<LinkNav link='/'>Menu</LinkNav>
						<LinkNav link='uslugi'>Usługi</LinkNav>
						<LinkNav link='cennik'>Cennik</LinkNav>
						<LinkNav link='kontakt'>Kontakt</LinkNav>
					</div>
				</div>
			</div>
			<Outlet />
		</>
	);
}
