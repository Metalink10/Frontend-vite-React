import { useState } from "react";

function Cadastro() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const dadosUsers = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
};

    function handleSubmit(event) {
    event.preventDefault();
    }

  return (
    <div>
      <form action="">
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Cadastro;
