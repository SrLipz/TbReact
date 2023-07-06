import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/">
          <img className={styles.imgHeader} src={Logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
