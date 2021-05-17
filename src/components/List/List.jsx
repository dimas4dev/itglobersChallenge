import React, { useState, useEffect } from "react";
import "./List.scss";
const SonList = ({ color, setActiveColor }) => {
  return <li onClick={setActiveColor}>{color.nombreColor}</li>;
};

const List = () => {
  const URL = "http://localhost:8000/arrayColores";
  const [colors, setNameColors] = useState([]);
  const [activeColor, setActiveColor] = useState("Rojo");

  async function getColors() {
    const API = await fetch(`${URL}`)
      .then((response) => response.json())
      .then((data) => data);
    return API;
  }

  useEffect(
    () =>
      (async () => {
        const colores = await getColors();
        setNameColors(colores);
      })(),
    []
  );

  return (
    <section className="List">
      <ul className="List__ul">
        {colors.map((color) => (
          <SonList
            key={color.id}
            color={color}
            setActiveColor={() => setActiveColor(color.nombreColor)}
          />
        ))}
      </ul>

      <p>
        {`Bienvenido, el auto selecciona para tu viaje es del siguiente color: ${activeColor}`}
      </p>
    </section>
  );
};

export default List;
