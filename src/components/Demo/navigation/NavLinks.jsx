import NavItem from "./NavItem";
import classes from "./NavLinks.module.css";
import { forwardRef } from "react";

const NavLinks = forwardRef(({ isOpen }, ref) => {
	return (
		<>
			<div
				ref={ref}
				className={`${classes.sidebar} ${isOpen ? classes.active : ""}`}>
				<div className={classes.container}>
					<NavItem link='/' icon='fa-solid fa-house'>
						Menu
					</NavItem>
					<NavItem link='uslugi' icon='fa-solid fa-handshake-simple'>
						Usługi
					</NavItem>
					<NavItem link='cennik' icon='fa-solid fa-coins'>
						Cennik
					</NavItem>
					<NavItem link='kontakt' icon='fa-solid fa-phone'>
						Kontakt
					</NavItem>
				</div>
			</div>
		</>
	);
});

export default NavLinks;
