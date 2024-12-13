import { NavLink } from "react-router";
import classes from "./LinkItem.module.css";

export default function LinkItem({ children, ...props }) {
	return (
		<NavLink
			{...props}
			className={({ isActive }) =>
				`${classes.link} ${isActive ? classes.active : ""}`}>
			{children}
		</NavLink>
	);
}
