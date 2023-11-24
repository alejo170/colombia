import s from "./style.module.css";

const RenderNativeCommunity = ({ nativeCommunity }) => {
  return (
    <>
      <h1 className={s.title}>Comunidades Indigenas</h1>
      <p className={s.description}>
        En un país como Colombia, reconocido por su rica diversidad cultural
        expresada en la multiplicidad de identidades y expresiones culturales de
        los pueblos y comunidades que la conforman como Nación, los grupos
        étnicos representan, de acuerdo con el censo realizado por el Dane del
        año 2005, el 13.77% del total de la población colombiana, en donde la
        población afrodescendiente representa la mayoría con el 10,40%, seguida
        por los pueblos indígenas con 3,36% y el pueblo Rrom o gitano con el
        0,01%.
      </p>
      <div className={s.grid}>
        {nativeCommunity != null
          ? nativeCommunity.map((native) => (
              <div className={s.card} key={native.id}>
                <h3>{native.name}</h3>
                <p>Lenguaje: {native.languages}</p>
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderNativeCommunity;
