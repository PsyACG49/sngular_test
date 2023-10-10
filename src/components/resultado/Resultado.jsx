import "./resultado.css";

const Resultado = ({ resultado }) => {
  return (
    <div className="container__result">
      <p className="result__text">{`El resultado es: ${resultado}`}</p>
    </div>
  );
};

export default Resultado;
