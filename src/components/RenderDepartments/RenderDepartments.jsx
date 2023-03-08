import s from "./style.module.css";

const RenderDepartments = ({ departments }) => {
  return (
    <>
      <h1 className={s.title}>Departamentos</h1>
      <p className={s.description}>
        Colombia es un país ubicado en América del Sur, compuesto por 32
        departamentos y un Distrito Capital. Cada departamento tiene su propia
        capital y está dividido en municipios, que son las unidades
        territoriales más pequeñas del país.
      </p>
      <p className={s.description}>
        Cada departamento de Colombia tiene su propia identidad cultural y
        económica, lo que los hace únicos en cuanto a su historia, geografía,
        población y recursos naturales.
      </p>
      <p className={s.description}>
        Además, cada departamento tiene su propia administración y gobierno
        local, lo que les permite tomar decisiones y establecer políticas que
        respondan a las necesidades y demandas de su población.
      </p>
      <div className={s.grid}>
        {departments != null
          ? departments.map((dep) => (
              <div className={s.card} key={dep.id}>
                <h3>{dep.name}</h3>
                <p>Municipios: {dep.municipalities}</p>
                <p>Población: {dep.population.toLocaleString("en-US")} Hab.</p>
                <p>Area: {dep.surface.toLocaleString("en-US")} Km2</p>
              </div>
            ))
          : "Cargando..."}
      </div>
    </>
  );
};

export default RenderDepartments;
