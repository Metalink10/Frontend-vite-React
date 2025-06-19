import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const nevegate = Navigate;
const app = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

function Cadastro() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const dadosUsers = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  // Função para lidar com o envio do formulário
  function handleSubmit(event) {
    event.preventDefault(); 

    // Enviar dadsos do usuário para o servidor
    app
      .post("/cadastro", dadosUsers)
      .then((response) => {
        if (response.status === 201) {
          console.log("User registered successfully:", response.data);
          // Optionally, redirect to a different page or show a success message
          nevegate("/login"); // Redirect to login page after successful registration
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Optionally, show an error message
      });

      
  }

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm your password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Cadastro;
