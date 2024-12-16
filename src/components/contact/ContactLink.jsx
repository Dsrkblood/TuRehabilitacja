import { DATA } from "../../data.js";

import classes from "./ContactLink.module.css";

export default function ContactLink() {
	const openingHours = Object.values(DATA.contact.openinghours).map(item => ({
		weekDay: item.day,
		time: item.time,
	}));
	return (
		<section className={classes.section}>
			<div>
				<h1>Godziny otwarcia</h1>
				<ul>
					{openingHours.map((item, index) => {
						<li key={index}>
							<p>
								{item.weekDay} {item.time}
							</p>
						</li>;
					})}
				</ul>
			</div>
		</section>
	);
}
