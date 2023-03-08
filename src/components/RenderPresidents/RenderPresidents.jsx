import s from "./style.module.css";

const RenderPresidents = ({ presidents }) => {
  const handleOnError = (e) => {
    e.target.src = "../../../image1.png";
  };

  return (
    <>
      <h1 className={s.title}>Presidentes</h1>
      <p className={s.description}>
        Desde su independencia en 1810, Colombia ha tenido numerosos presidentes
        que han liderado el país en diferentes épocas y situaciones políticas.
        En total, han habido 33 presidentes en la historia de Colombia, cada uno
        con su propia visión y política para el país.
      </p>
      <div className={s.grid}>
        {presidents != null
          ? presidents.map((presid) => (
              <div className={s.card} key={presid.id}>
                {presid.image == "null" || presid.image == "" ? (
                  <img src="../../../image1.png" alt="presidents" />
                ) : (
                  <img
                    src={presid.image}
                    alt="presidents"
                    onError={handleOnError}
                  />
                )}
                <h3>
                  {presid.name} {presid.lastName}
                </h3>
                <p>Inicio del mandato: {presid.startPeriodDate}</p>
                <p>Fin del mandato: {presid.endPeriodDate}</p>
                <p>Partido politico: {presid.politicalParty}</p>
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderPresidents;
