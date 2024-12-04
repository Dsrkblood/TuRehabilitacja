import classes from "./HeaderLinks.module.css";
export default function HeaderLinks() {
	return (
		<header className={classes.header}>
			<div className={classes.media}>
				<a
					href='https://www.facebook.com/profile.php?id=61568131195051'
					target='_blank'
					rel='noopener noreferrer'>
					<i class='fa-brands fa-facebook-f'></i>TuRehabilitacja
				</a>
				<a
					href='https://booksy.com/pl-pl/'
					target='_blank'
					rel='noopener noreferrer'>
					Zapisz się na <i class='fa-solid fa-share'></i> Booksy
				</a>
			</div>
			<div className={classes.contact}>
				<a href='tel:+000000000'>
					<i class='fa-solid fa-square-phone'></i>000 000 000
				</a>
				<a href='mailto:turehabilitacja@gmail.com'>
					<i class='fa-solid fa-envelope'></i>turehabilitacja@gmail.com
				</a>
			</div>
		</header>
	);
}
