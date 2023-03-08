import s from "./style.module.css";

const RenderHome = ({ information }) => {
  return (
    <>
      <div className={s.hero}>
        <h1>Bienvenido a Colombia</h1>
        <p>El riesgo es que te quieras quedar</p>
        <a href="#info">Conócelo</a>
      </div>
      <div id="info" className={s.info}>
        {information != null ? (
          <div>
            <p>{information.description}</p>
          </div>
        ) : (
          "Cargando..."
        )}

        <figure>
          <img src="../../../mapa.png" alt="mapa de Colombia" />
        </figure>
      </div>
      <div className={s.grid}>
        <figure>
          <img
            className={s.imgRedonda}
            src="../../../bandera.png"
            alt="bandera de Colombia"
          />
          <figcaption>Bandera de Colombia</figcaption>
        </figure>
        <figure>
          <img
            className={s.imgRedonda}
            src="../../../escudo.jpg"
            alt="escudo de Colombia"
          />
          <figcaption>Escudo de Colombia</figcaption>
        </figure>
        <figure>
          <img
            className={s.imgRedonda}
            src="../../../arbol.jpg"
            alt="arbol nacional de Colombia"
          />
          <figcaption>
            Arbol nacional de Colombia <br />
            Palma de cera
          </figcaption>
        </figure>
        <figure>
          <img
            className={s.imgRedonda}
            src="../../../ave.jpg"
            alt="ave nacional de Colombia"
          />
          <figcaption>
            Ave nacional de Colombia <br />
            Condor andino
          </figcaption>
        </figure>
        <figure>
          <img
            className={s.imgRedonda}
            src="../../../flor.jpg"
            alt="flor nacional de colombia"
          />
          <figcaption>
            Flor nacional de Colombia <br />
            Orquidea Catleya
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default RenderHome;
