import { Link } from "react-router-dom";
import s from "./style.module.css";

const Error404 = () => {
  return (
    <main className={s.error}>
      <h1>404</h1>
      <p>You should probably </p>
      <p>go back to the home</p>
      <Link to="/">Home</Link>
    </main>
  );
};

export default Error404;
