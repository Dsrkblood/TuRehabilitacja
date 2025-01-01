import { forwardRef } from "react";
import classes from "./SidebarLinks.module.css";
import LinkItem from "./LinkItem";
const SidebarLink = forwardRef(({ isOpen, data,handleClose }, ref) => {
	const year = new Date().getFullYear();
	return (
		<div
			ref={ref}
			className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
			<div className={classes.linkList}>
				<LinkItem onClick={handleClose} to={"/"} icon='fa-solid fa-house'>
					Menu
				</LinkItem>
				<LinkItem
					onClick={handleClose}
					to={"/uslugi"}
					icon='fa-solid fa-handshake-simple'>
					Usługi
				</LinkItem>
				<LinkItem onClick={handleClose} to={"/cennik"} icon='fa-solid fa-coins'>
					Cennik
				</LinkItem>
				<LinkItem
					onClick={handleClose}
					to={"/kontakt"}
					icon='fa-solid fa-address-book'>
					Kontakt
				</LinkItem>
			</div>
			<div className={classes.copy}>
				<p>
					{data.company} &copy; {year}
				</p>
				<p>
					created by
					<a
						href='https://github.com/Dsrkblood'
						target='_blank'
						rel='noopener noreferrer'>
						<span className={classes.span}> Dsrkblood</span>
					</a>
				</p>
			</div>
		</div>
	);
});

export default SidebarLink;
