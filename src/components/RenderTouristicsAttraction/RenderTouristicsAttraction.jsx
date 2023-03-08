import s from "./style.module.css";

const RenderTouristicsAttraction = ({ touristicAttraction }) => {
  const handleOnError = (e) => {
    e.target.src = "../../../image2.png";
  };

  return (
    <>
      <h1 className={s.title}>Sitios turisticos</h1>
      <p className={s.description}>
        Colombia es un país con una rica diversidad geográfica y cultural, que
        ofrece una amplia variedad de atracciones turísticas para todos los
        gustos.
      </p>
      <p className={s.description}>
        Estas son solo algunas de las muchas atracciones turísticas que Colombia
        tiene para ofrecer. El país también es conocido por su excelente
        gastronomía, su música y danzas tradicionales, sus festivales culturales
        y sus increíbles paisajes naturales, lo que lo convierte en un destino
        turístico cada vez más popular en América Latina.
      </p>
      <div className={s.grid}>
        {touristicAttraction != null
          ? touristicAttraction.map((touristic) => (
              <div className={s.card} key={touristic.id}>
                <img
                  src={touristic.images}
                  alt="touristic attraction"
                  onError={handleOnError}
                />
                <h3>{touristic.name}</h3>
                <p>Ciudad: {touristic.city.name}</p>
                <p>Latitud: {touristic.latitude}</p>
                <p>Longitud: {touristic.longitude}</p>
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderTouristicsAttraction;
