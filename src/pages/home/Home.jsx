import "./home.css";
import FORMULA from "../../assets/formula.png";
import Entrada from "../../components/entrada/Entrada";
import Resultado from "../../components/resultado/Resultado";

const Home = () => {
  return (
    <main className="section__home">
      <h2 className="home__title">Sngular Exercise</h2>
      <p className="home__instructions">
        Ingresa un numero N para optener el enesimo numero de la siguiente
        serie:
      </p>
      <img
        className="home__image"
        src={FORMULA}
        alt="formula de serie numerica"
        loading="lazy"
      />
      <Entrada />
      <Resultado />
    </main>
  );
};

export default Home;
