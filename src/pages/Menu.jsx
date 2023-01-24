import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fakePromise } from "../utils/fakePromise";

export default function Mesa() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(null);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch(`/menu-${id}.json`);
      if (!response.ok) throw "Error al cargar el menu";
      const data = await response.json();
      setMenu(data);
    } catch (error) {
      navigate("/menus");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleClick = () => {
    navigate(`/checkout?menu=${id}`);
  };

  if (!menu) return <article aria-busy="true"></article>;

  return (
    <article>
      <header>{menu?.nombre}</header>

      <p>Entrada: {menu?.entrada}</p>
      <p>Fondo: {menu?.plato}</p>
      <p>Postre: {menu?.postre}</p>
      <p>
        <strong>Precio: {menu?.precio}</strong>
      </p>

      <footer>
        <button onClick={handleClick}>Comprar</button>
      </footer>
    </article>
  );
}
