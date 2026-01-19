import CirclePhoto from "./CirclePhoto";
import classes from "./MainContent.module.css";
import { DATA } from "../../data.js";
import Carousel from "./Carousel.jsx";

export default function MainContent() {
  const offers = DATA.offers.map((offer) => ({
    isActive: offer.isActive,
    id: offer.id,
    title: offer.title,
    description: offer.description,
    hasDescriptionList: offer.hasDescriptionList,
    image: offer.image,
  }));

  return (
    <>
      <Carousel data={DATA.aboutUs.heroImages} />
      <section className={classes.containerWrapper}>
        <h1 className={classes.heading}>o nas</h1>
        <div className={classes.containerWrapperDesktop}>
          <div className={classes.flexContainer}>
            <p className={classes.sectionParagraph}>
              {DATA.aboutUs.intro.paragraph1}
              {DATA.aboutUs.intro.paragraph2}
            </p>
            <p className={classes.sectionParagraph}>
              {DATA.aboutUs.focusAreas.title}
            </p>
            <ul className={classes.sectionList}>
              {DATA.aboutUs.focusAreas.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className={classes.sectionParagraph}>
              {DATA.aboutUs.shockwave.title.split("fala uderzeniowa")[0]}
              <span className={classes.highlight}>fala uderzeniowa</span>
              {DATA.aboutUs.shockwave.title.split("fala uderzeniowa")[1]}
            </p>
            <ul className={classes.sectionList}>
              {DATA.aboutUs.shockwave.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className={classes.sectionParagraph}>
              <span className={classes.highlight}> Fala uderzeniowa</span>
              {DATA.aboutUs.shockwave.closing.replace("Fala uderzeniowa", "")}
            </p>
          </div>
          <div className={classes.flexContainerMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.952267404277!2d20.955327156148073!3d52.28056853996331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb00457e2ecd%3A0xb15262a59cffec36!2sTuRehabilitacja!5e0!3m2!1spl!2spl!4v1735468663199!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={classes.map}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </section>
      <section className={classes.containerWrapper}>
        <h2 className={classes.heading}>Mój gabinet</h2>
        {DATA.aboutUs.staff.map((employee) => (
          <div key={employee.id} className={classes.employeeContainer}>
            <div className={classes.employeeInfo}>
              {employee.bio.map((item, index) => (
                <p key={index} className={classes.sectionParagraph}>
                  {item}
                </p>
              ))}

              {employee.treatmentScope.length > 0 && (
                <ul className={classes.sectionList}>
                  {employee.treatmentScope.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {employee.approach.map((item, index) => (
                <p key={index} className={classes.sectionParagraph}>
                  {item}
                </p>
              ))}
            </div>
            <div className={classes.employeePhoto}>
              <div className={classes.photoBackground}>
                <img
                  src={employee.img}
                  alt={employee.alt}
                  className={classes.photoEmployee}
                  loading="lazy"
                ></img>
              </div>
              <p className={classes.employeeName}>{employee.name}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={classes.containerWrapper}>
        <h3 className={classes.heading}>W czym możemy Tobie pomóc?</h3>
        <div className={classes.flexContainerOffer}>
          {offers.map((offer) => (
            <CirclePhoto key={offer.id} data={offer} />
          ))}
        </div>
      </section>
    </>
  );
}
