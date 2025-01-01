import classes from "./HeaderLinks.module.css";
export default function HeaderLinks({ data }) {
	const phone = data.phone.replace(/\s+/g, "");
	return (
		<div className={classes.container}>
			<div className={classes.links}>
				<a
					className={`${classes.link} ${classes.contact}`}
					href={`tel:${phone}`}>
					<i className='fa-solid fa-square-phone'></i> {data.phone}
				</a>
				<div className={classes.socialMedia}>
					<a
						className={`${classes.link} ${classes.contact} ${classes.instagram}`}
						href={data.instagram}
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa-brands fa-instagram'></i> Instagram
					</a>
					<a
						className={`${classes.link} ${classes.contact} ${classes.facebook}`}
						href={data.facebook}
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa-brands fa-square-facebook'></i> TuRehabilitacja
					</a>
				</div>
			</div>
			<div className={classes.links}>
				<a
					className={`${classes.link} ${classes.contact}`}
					href={`mailto:${data.email}`}>
					<i className='fa-solid fa-envelope'></i> {data.email}
				</a>

				<a
					className={`${classes.link} ${classes.booksy}`}
					href={`${data.booksy}`}
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
