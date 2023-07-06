import React from "react";
import styles from "./Footer.module.css";

import iconTel from "../assets/Icons-106.png";
import iconEmail from "../assets/Icons-107.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.boxContact}>
        <div className={styles.boxFooter}>
          <img className={styles.imgFooter} src={iconTel} alt="Telefone" />
          <p>(48) 99999-9999 </p>
        </div>

        <div className={styles.boxFooter}>
          <img className={styles.imgFooter} src={iconEmail} alt="Email" />
          <p>dallascode@dallascode.com </p>
        </div>
      </div>
      <span>
        Desenvolvido por <b>DallasCode</b>.
      </span>
    </footer>
  );
}
