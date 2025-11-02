import { DATA } from "../../data.js";
import classes from "./Footer.module.css";

export default function Footer() {
  const phone = DATA.contact.phone.replace(/\s+/g, "");
  const year = new Date().getFullYear();
  return (
    <>
      <footer className={classes.containerWrapper}>
        <section className={classes.container}>
          <div className={classes.infoWrapper}>
            <a
              className={classes.contactLink}
              href="https://maps.app.goo.gl/mLwYxHpzQqbk8jem8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="addressParagraph">{`${DATA.contact.address.postcode} ${DATA.contact.address.city}`}</p>
              <p className="addressParagraph">{DATA.contact.address.street}</p>
            </a>
          </div>
          <div className={classes.infoWrapper}>
            <a
              className={`${classes.contactLink} ${classes.facebook}`}
              target="_blank"
              href={DATA.contact.links.facebook}
            >
              <i className="fa-brands fa-square-facebook"></i>Facebook
            </a>
            <a
              className={`${classes.contactLink} ${classes.instagram}`}
              target="_blank"
              href={DATA.contact.links.instagram}
            >
              <i className="fa-brands fa-instagram"></i>Instagram
            </a>
          </div>
          <div className={classes.infoWrapper}>
            <a
              className={classes.contactLink}
              href={`mailto:${DATA.contact.email}`}
            >
              {DATA.contact.email}
            </a>
            <a className={classes.contactLink} href={`tel:${phone}`}>
              {DATA.contact.phone}
            </a>
          </div>
        </section>
        <section className={classes.containerAlt}>
          <p className={classes.brandName}>
            {DATA.aboutUs.company} &copy; {year}
          </p>

          <p className={classes.github}>
            created by
            <a
              className={classes.githubLink}
              href="https://github.com/Dsrkblood"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Dsrkblood
            </a>
          </p>
        </section>
      </footer>
    </>
  );
}
