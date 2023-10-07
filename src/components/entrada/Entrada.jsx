import "./entrada.css";
const Entrada = () => {
  return (
    <form className="form__entrada">
      <label className="container__input">
        <span className="input__label">Ingresa un numero:</span>
        <input type="text" className="input__in" />
      </label>
      <button className="entrada__btn">Ejecutar</button>
    </form>
  );
};

export default Entrada;
