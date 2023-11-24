import React from "react";
import s from "./style.module.css";

const RenderMaps = ({ maps }) => {
  const handleOnError = (e) => {
    e.target.src = "../../../image1.png";
  };
  return (
    <>
      <h1 className={s.title}>Mapas de Colombia</h1>
      <p className={s.description}></p>
      <div className={s.grid}>
        {maps != null
          ? maps.map((mapa) => (
              <div className={s.card} key={mapa.id}>
                <h3>{mapa.name}</h3>
                <p>{mapa.description}</p>
                {mapa.urlImages == "null" || mapa.urlImages == "" ? (
                  <img src="../../../image1.png" alt="maps" />
                ) : (
                  <img
                    src={mapa.urlImages}
                    alt="maps"
                    onError={handleOnError}
                  />
                )}
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderMaps;
