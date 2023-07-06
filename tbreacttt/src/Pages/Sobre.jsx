import React from "react";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.aboutItem}>
        <h1>Sobre a DallasCode</h1>
        <p>
          A DallasCode é uma renomada empresa de cursos online de tecnologia,
          especializada em fornecer conhecimentos abrangentes e práticos sobre
          programação e desenvolvimento web. Com uma equipe de instrutores
          altamente qualificados e uma abordagem centrada no aluno, a DallasCode
          se tornou uma referência no ensino de tecnologias modernas, como
          JavaScript, React, TypeScript, HTML e CSS.
        </p>
      </div>

      <div className={styles.aboutItem}>
        <h3>Nossa Missão</h3>
        <p>
          Na DallasCode, nossa missão é capacitar indivíduos e ajudá-los a
          alcançar todo o seu potencial no mundo da tecnologia. Acreditamos que
          o conhecimento é a chave para o sucesso, e estamos comprometidos em
          fornecer cursos online de alta qualidade que sejam acessíveis e
          flexíveis para estudantes de todos os níveis de experiência.
        </p>
      </div>

      <div className={styles.aboutItem}>
        <h3>Nossos Cursos</h3>
        <p>
          Oferecemos uma ampla gama de cursos especializados que abrangem várias
          áreas da programação e do desenvolvimento web.
        </p>
        <p>
          Na DallasCode, adotamos uma abordagem prática e orientada a projetos
          em nossos cursos. Acreditamos que os alunos aprendem melhor quando
          colocam em prática o que estão estudando. Nossos cursos são projetados
          para incentivar a participação ativa dos alunos, por meio de
          exercícios práticos, projetos reais e suporte contínuo dos
          instrutores.
        </p>
        <p>
          Além disso, nossos cursos são totalmente online, permitindo que os
          alunos aprendam no seu próprio ritmo e a partir de qualquer lugar.
          Oferecemos uma plataforma de aprendizado intuitiva, onde os alunos
          podem acessar vídeos de aulas, materiais de apoio, fóruns de discussão
          e interagir com outros estudantes.
        </p>
      </div>

      <div className={styles.aboutItem}>
        <h3>Apoio ao Aluno</h3>
        <p>
          Entendemos a importância de fornecer suporte aos alunos durante sua
          jornada de aprendizado. Por isso, na DallasCode, oferecemos um suporte
          dedicado aos alunos, com instrutores experientes disponíveis para
          responder perguntas, fornecer feedback e orientar os alunos em sua
          jornada de aprendizado.
        </p>
        <p>
          Junte-se à DallasCode e inicie sua jornada no mundo da tecnologia hoje
          mesmo. Adquira habilidades valiosas, obtenha uma vantagem competitiva
          e abra as portas para oportunidades emocionantes no mercado de
          trabalho. Estamos aqui para ajudar você a ter sucesso!
        </p>
      </div>
    </section>
  );
};

export default Sobre;
