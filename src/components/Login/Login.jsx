import './login.css'


function Login() {
    return (
        <div className="container">
            <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        </div>
        
    )
}

export default Login