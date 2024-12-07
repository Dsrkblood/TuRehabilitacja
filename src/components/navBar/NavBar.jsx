import { useEffect, useRef, useState } from "react";
import HeaderLinks from "./headerLinks/HeaderLinks";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	// const [navTop, setNavTop] = useState("92px");
	const sidebarRef = useRef(null);
	const buttonRef = useRef(null);

	function handleOpenSidebar() {
		setIsOpen(prevOpen => !prevOpen);
	}

	// useEffect(() => {
	// 	function handleScroll() {
	// 		const rounded = Math.round(window.scrollY);
	// 		if (window.scrollY < 52) {
	// 			setNavTop(`${92 - rounded}`);
	// 		} else {
	// 			setNavTop(40);
	// 		}
	// 		if (sidebarRef.current) {
	// 			sidebarRef.current.style.top = `${navTop}px`;
	// 		}
	// 	}
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [navTop]);

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
				<div className={classes.container}>
					<button
						ref={buttonRef}
						onClick={handleOpenSidebar}
						className={classes.menuButton}>
						<div
							className={`${classes.burgerIcon} ${
								isOpen ? classes.active : ""
							}`}></div>
					</button>
				</div>
				<div
					ref={sidebarRef}
					className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
					<NavLink>Manu</NavLink>
					<NavLink>Usługi</NavLink>
					<NavLink>Cennik</NavLink>
					<NavLink>Kontakt</NavLink>
				</div>
			</nav>
			</header>
		</>
	);
}
