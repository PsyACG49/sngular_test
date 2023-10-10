import "./entrada.css";
const Entrada = ({ entrada, handle, handleEx }) => {
  return (
    <form className="form__entrada" onSubmit={handleEx}>
      <label className="container__input">
        <span className="input__label">Ingresa un numero:</span>
        <input
          type="text"
          className="input__in"
          name="entrada"
          id="entrada"
          value={entrada}
          onChange={handle}
        />
      </label>
      <button className="entrada__btn">Ejecutar</button>
    </form>
  );
};

export default Entrada;
