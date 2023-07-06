import React from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [contactData, setContactData] = React.useState([]);

  function handleSubmitForm(event) {
    event.preventDefault();

    setContactData({ name, email, message });
    postContact();
  }

  async function postContact() {
    try {
      const responsecontato = await fetch(`http://localhost:3000/contato`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (responsecontato.ok) {
        alert("O formulário foi enviado com sucesso!");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className={styles.formContainer}>
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <label htmlFor="nome">Nome:</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          id="nome"
          name="nome"
        />
        <label htmlFor="email">E-mail:</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          name="mensagem"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
