import { NavLink } from "react-router";
import classes from "./LinkItem.module.css";
export default function LinkItem({ icon, children, ...props }) {
	return (
		<NavLink
			{...props}
			className={({ isActive }) =>
				`${classes.link} ${isActive ? classes.active : ""}`
			}>
			<i className={`${classes.icon} ${icon}`}></i>
			{children}
		</NavLink>
	);
}
