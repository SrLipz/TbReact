import React from "react";
import styles from "./Home.module.css";
import home from "../assets/home.png";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.leftBox}>
        <h1 className={styles.titleHome}>Bem-vindo ao DallasCode!</h1>
        <div className={styles.textContainer}>
          <p>
            Seu portal de <b>cursos online</b> para
            <strong> impulsionar sua carreira</strong> em desenvolvimento web!
            Aprenda as habilidades mais demandadas da indústria de tecnologia
            com os cursos especializados em
            <strong> React, JavaScript, Node.js, CSS e HTML</strong> do
            DallasCode. Se você está buscando
            <strong> se destacar como desenvolvedor web</strong> ou deseja
            aprimorar suas competências técnicas, você está no lugar certo!{" "}
            <strong>
              Nossos cursos são cuidadosamente elaborados por especialistas no
              assunto
            </strong>
            , com anos de experiência no setor. Com instrutores apaixonados e
            conhecimento atualizado, o <strong>DallasCode garante</strong> que
            você tenha acesso às{" "}
            <strong>
              informações mais recentes e às melhores práticas do mercado.
            </strong>
          </p>
        </div>
      </div>
      <div className={styles.rightBox}>
        <img className={styles.imgText} src={home} alt="DallasCode" />
      </div>
    </section>
  );
};

export default Home;
