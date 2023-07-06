import React from "react";
import styles from "./Cursos.module.css";
import { Link } from "react-router-dom";

import imgHTMLCSSJS from "../assets/htmlcssjs.png";
import imgReact from "../assets/react.png";
import imgAngular from "../assets/Angular.png";
import imgVue from "../assets/VUE.png";
import imgJava from "../assets/JAVA.png";

export default function Cursos() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.boxContent}>
        <h1>Cursos</h1>
        <div className={styles.boxList}>
          <div className={styles.item}>
            <p className={styles.paragraph}>HTML CSS JAVASCRIPT </p>
            <img className={styles.img} src={imgHTMLCSSJS} />
          </div>
          <div className={styles.item}>
            <p className={styles.paragraph}>REACT</p>
            <img className={styles.img} src={imgReact} />
          </div>
          <div className={styles.item}>
            <p className={styles.paragraph}>ANGULAR</p>
            <img className={styles.img} src={imgAngular} />
          </div>
          <div className={styles.item}>
            <p className={styles.paragraph}>VUE</p>
            <img className={styles.img} src={imgVue} />
          </div>
          <div className={styles.item}>
            <p className={styles.paragraph}>JAVA</p>
            <img className={styles.img} src={imgJava} />
          </div>
        </div>
      </div>
    </section>
  );
}
