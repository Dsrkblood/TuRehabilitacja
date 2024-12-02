import classes from "./HeroImg.module.css";

export default function HeroImg() {
	return (
		<>
			<div className={classes.HeroImgBox}>
				<div className={classes.HeroImgShadow}> </div>
				<div className={classes.HeroImg}></div>
			</div>
		</>
	);
}
