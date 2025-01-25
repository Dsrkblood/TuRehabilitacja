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
				{/* <a
					className={`${classes.link} ${classes.contact}`}
					href={`mailto:${data.email}`}>
					<i className='fa-solid fa-envelope'></i> {data.email}
				</a> */}
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
