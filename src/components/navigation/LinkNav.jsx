import { NavLink } from "react-router";
import classes from "./LinkNav.module.css";

export default function LinkNav({ link,children }) {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
			}
			>
			{children}
		</NavLink>
	);
}
