function Casdastro() {
    return (
        <div>
            <form action="">
                <h1>Cadastro</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                <button type="submit">Register</button>
                
            </form>
        </div>
    )
}
export default Casdastro;