import React, { Fragment, useEffect, useState } from "react";
import "./Loading.scss";
import "./Form.scss";

const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    cellphone: "",
    age: "",
  });

  const [divCarga1, setDivCarga] = useState(false);

  const divCarga = document.querySelector(".loading");
  function handleChange(event) {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: [event.target.value],
    });
  }

  function handleSumbmit(event) {
    event.preventDefault();

    if (data.age >= 18) {
      divCarga.classList.add("show");
      setDivCarga(true);
      console.table(data);
    } else {
      console.error("Error al enviar el formulario");
    }
  }

  useEffect(() => {
    const divCarga = document.querySelector(".loading");
    const formulario = document.querySelector("form");
    if (divCarga.classList.contains("show")) {
      setTimeout(() => {
        divCarga.classList.remove("show");
        formulario.reset();
        setDivCarga(false);
      }, 5000);
    }
  }, [divCarga1]);

  return (
    <Fragment>
      <div id="loading" className="loading ">
        <p>Tus datos han sido enviados</p>
        <div className="spin"></div>
      </div>
      <form className="form" onSubmit={handleSumbmit}>
        <div>{props.children}</div>
        <div className="form__campos">
          <p>Ingresa tus Datos</p>
          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            onChange={handleChange}
            name="name"
            className="form__campos--input"
            required
          />
          <input
            type="email"
            placeholder="Ingresa tu Email"
            onChange={handleChange}
            name="email"
            className="form__campos--input"
            required
          />
          <input
            type="number"
            placeholder="Ingresa tu Celular"
            onChange={handleChange}
            name="cellphone"
            className="form__campos--input"
            required
          />
          <input
            type="number"
            placeholder="Ingresa tu Edad: "
            className="form__campos--input"
            onChange={handleChange}
            name="age"
            required
          />

          <button className="form__campos--submit" type="submit" value="Bro">
            Enviar Datos
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
