import "./resultado.css";
import { serieTriangular, serieFibonaci } from "../../utils/serie";
const Resultado = () => {
  const serieT = new serieTriangular(4);
  const serieF = new serieFibonaci(10);

  console.log(serieT.searchNesimo());
  console.log(serieF.searchNesimo());

  return (
    <div className="container__result">
      <p className="result__text">El resultado es: 0</p>
    </div>
  );
};

export default Resultado;
