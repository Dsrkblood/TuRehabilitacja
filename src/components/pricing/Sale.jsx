import classes from "./Sale.module.css";
export default function Sale({ data }) {

	

	return (
		<>
			{data.saleShort ? (
				<>
					<p className={classes.sale}>
						{data.saleShort}
						zł
					</p>
					/
				</>
			) : (
				<p></p>
			)}
			{data.saleLong ? (
				<p className={classes.sale}>
					{data.saleLong}
					zł
				</p>
			) : (
				<p></p>
			)}
		</>
	);
}
