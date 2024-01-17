import useForm from "../../hooks/useForm";

import LOADER from "../../assets/loader.svg";
import FORMULA from "../../assets/formula.png";
import Entrada from "../../components/entrada/Entrada";
import Resultado from "../../components/resultado/Resultado";

import "./home.css";

const Home = () => {
  const { form, result, loader, error, handleExecute, handleForm } = useForm();
  return (
    <main className="section__home">
      <h2 className="home__title">Sngular Exercise</h2>
      <h3>Andres Cuevas</h3>
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
      <Entrada entrada={form} handle={handleForm} handleEx={handleExecute} />
      {loader ? (
        <img src={LOADER} className="home__loader" alt="loader" />
      ) : error ? (
        <p className="home__error">
          Error: el numero a ingresar debe ser mayor a 2
        </p>
      ) : (
        <Resultado resultado={result} />
      )}
    </main>
  );
};

export default Home;
