import { DATA } from "../../data.js";

import classes from "./ContactLink.module.css";
function formatTime(time) {
  if (!time) return ""; //
  const [hours, minutes] = time.split(":");
  const formattedMinutes = minutes.replace(/0/g, "⁰");
  return `${Number(hours)}${formattedMinutes}`;
}
export default function ContactLink() {
  const phone = DATA.contact.phone.replace(/\s+/g, "");
  const openingHours = DATA.contact.workingHours.map((item) => ({
    day: item.day,
    start: item.start,
    end: item.end,
  }));

  return (
    <section className={classes.containerWrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Godziny otwarcia</h1>
        <ul className={classes.openingHours}>
          {openingHours.map((item, index) => (
            <li key={index} className={classes.listItem}>
              <p>{item.day}</p>
              <p>
                {item.start ? <>{formatTime(item.start)}</> : "nieczynne"}
                {item.end ? <>&nbsp;-&nbsp;{formatTime(item.end)}</> : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.container}>
        <h2 className={classes.heading}>nasz adres</h2>
        <p className={classes.address}>
          {DATA.contact.address.postcode} {DATA.contact.address.city}
        </p>
        <p className={classes.address}>{DATA.contact.address.street}</p>
      </div>
      <div className={classes.container}>
        <h3 className={classes.heading}>kontakt z nami</h3>
        <a
          className={classes.contactLinks}
          href={`mailto:${DATA.contact.email}`}
        >
          {DATA.contact.email}
        </a>

        <a className={classes.contactLinks} href={`tel:${phone}`}>
          {DATA.contact.phone}
        </a>
        <a
          className={`${classes.contactLinks} ${classes.instagram}`}
          href={DATA.contact.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className={`${classes.contactLinks} ${classes.facebook}`}
          href={DATA.contact.links.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className={classes.contactLinks}
          href={DATA.contact.links.booksy}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapisz się na <i className="fa-solid fa-share"></i>{" "}
          <span>Booksy</span>
        </a>
      </div>
      <div className={classes.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.952267404277!2d20.955327156148073!3d52.28056853996331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb00457e2ecd%3A0xb15262a59cffec36!2sTuRehabilitacja!5e0!3m2!1spl!2spl!4v1735468663199!5m2!1spl!2spl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin"
          className={classes.map}
        ></iframe>
      </div>
    </section>
  );
}
