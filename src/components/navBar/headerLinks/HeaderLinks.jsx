import classes from "./HeaderLinks.module.css";
export default function HeaderLinks() {
	return (
		<div className={classes.container}>
			<div className={classes.links}>
				<a
					className={`${classes.link} ${classes.contact}`}
					href='tel:000000000'>
					<i className='fa-solid fa-square-phone'></i> 123 456 789
				</a>
				<a
					className={`${classes.link} ${classes.contact}`}
					href='https://www.facebook.com/profile.php?id=61568131195051&locale=pl_PL'
					target='_blank'
					rel='noopener noreferrer'>
					<i className='fa-brands fa-square-facebook'></i> tuRehabilitacja
				</a>
			</div>
			<div className={classes.links}>
				<a
					className={`${classes.link} ${classes.contact}`}
					href='mailto:turehabilitacja@gmail.com'>
					<i className='fa-solid fa-envelope'></i> turehabilitacja@gmail.com
				</a>

				<a
					className={`${classes.link} ${classes.booksy}`}
					href='https://booksy.com/pl-pl/s/fizjoterapia'
					target='_blank'
					rel='noopener noreferrer'>
					{" "}
					Zapisz się na <i className='fa-solid fa-share'></i>{" "}
					<span>Booksy</span>
				</a>
			</div>
		</div>
	);
}
