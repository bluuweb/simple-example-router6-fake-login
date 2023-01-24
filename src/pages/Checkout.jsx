import { useSearchParams } from "react-router-dom";

export default function Checkout() {
  const [searchParams, setSearchParams] = useSearchParams();

  //   console.log(searchParams.get("menu"));

  return (
    <div>
      <h1>Checkout Menu: {searchParams.get("menu")}</h1>
    </div>
  );
}
