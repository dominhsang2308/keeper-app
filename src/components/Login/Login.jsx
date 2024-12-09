import './login.css'


function Login(props) {
    return (
        <div className="container">
            <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {props.unRegister?null:<input type="password" placeholder="Confirm Password" />}
            <button type="submit">{props.unRegister?"Login":"Register"}</button>
        </form>
        </div>
        
    )
}

export default Login