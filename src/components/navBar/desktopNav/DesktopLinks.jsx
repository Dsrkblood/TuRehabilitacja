import classes from "./DesktopLinks.module.css";
import LinkItem from "./LinkItem";

export default function DesktopLinks() {
	return (
		<div className={classes.container}>
			<LinkItem to='/'>start</LinkItem>
			<LinkItem to='/uslugi'>usługi</LinkItem>
			<LinkItem to='/cennik'>cennik</LinkItem>
			<LinkItem to='/kontakt'>kontakt</LinkItem>
		</div>
	);
}
