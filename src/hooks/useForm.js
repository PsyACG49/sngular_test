import { useState } from "react";
import { serieSpecial } from "../utils/serie";

const useForm = () => {
  const [form, setform] = useState("");
  const [result, setResult] = useState(0);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    setform(e.target.value);
  };

  const handleExecute = (e) => {
    e.preventDefault();
    setError(false);
    if (form < 3) {
      setError(true);
    }
    setLoader(true);
    let serie = new serieSpecial();
    setResult(serie.searchNesimo(form));
    setTimeout(() => {
      setform("");
      setLoader(false);
    }, 1500);
  };

  return {
    form,
    result,
    loader,
    error,
    handleForm,
    handleExecute,
  };
};

export default useForm;
