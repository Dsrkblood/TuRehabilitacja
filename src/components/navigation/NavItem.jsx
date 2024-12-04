import { NavLink } from "react-router";
import classes from "./NavItem.module.css";

export default function NavItem({ link, children,icon, ...props }) {
	return (
		<NavLink
			to={link}
			{...props}
			className={({ isActive }) =>
				isActive ? `${classes.navItem} ${classes.active}` : classes.navItem
			}>
			<i className={icon}></i>{children}
		</NavLink>
	);
}
