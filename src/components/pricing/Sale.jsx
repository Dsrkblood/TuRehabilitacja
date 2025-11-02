import classes from "./Sale.module.css";
export default function Sale({ data }) {
  return (
    <>
      {data.variants.basic.price && data.variants.sales.basic ? (
        <>
          <p className={classes.sale}>
            {data.variants.sales.basic}
            zł
          </p>
          /
        </>
      ) : (
        <p></p>
      )}
      {data.variants.extended.price && data.variants.sales.extended ? (
        <p className={classes.sale}>
          {data.variants.sales.extended}
          zł
        </p>
      ) : (
        <p></p>
      )}
    </>
  );
}
