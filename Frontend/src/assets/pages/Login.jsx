function Login() {
    return (
        <div className="login-page">    
            <form className="login-form">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Login</button>
            </form> 
            <div className="register-link">
                <p>Don't have an account? <a href="/cadastro">Register here</a></p>
            </div>
        </div>
    );
}
export default Login;
// This code defines a simple login page with a form for email and password input.
