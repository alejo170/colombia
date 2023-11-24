import s from "./style.module.css";

const RenderInvasiveSpecie = ({ invasive }) => {
  const handleOnError = (e) => {
    e.target.src = "../../../image1.png";
  };
  return (
    <>
      <h1 className={s.title}>Especies Invasivas</h1>
      <p className={s.description}>
        Una especie invasora o especie exótica es un animal, planta u otro
        organismo que se desarrolla fuera de su área de distribución natural, en
        hábitats que no le son propios o con una abundancia inusual, produciendo
        alteraciones en la riqueza y diversidad de los ecosistemas.
      </p>
      <div className={s.grid}>
        {invasive != null
          ? invasive.map((specie) => (
              <div className={s.card} key={specie.id}>
                {specie.urlImage == null || specie.urlImage == "" ? (
                  <img src="../../../image1.png" alt="invasive species" />
                ) : (
                  <img
                    src={specie.urlImage}
                    alt="invasive species"
                    onError={handleOnError}
                  />
                )}
                <h3>{specie.name}</h3>
                <p>{specie.scientificName}</p>
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderInvasiveSpecie;
