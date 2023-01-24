import { Link } from "react-router-dom";

export default function Menus() {
  return (
    <div>
      <article>
        <Link to="/menus/1">Menu 1</Link>
      </article>
      <article>
        <Link to="/menus/2">Menu 2</Link>
      </article>
      <article>
        <Link to="/menus/3">Menu 3</Link>
      </article>
    </div>
  );
}
