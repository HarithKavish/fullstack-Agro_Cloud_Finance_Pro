import Button from "../components/Button"
import TextField from "../components/TextField"
import logo from "../assets/images/acfp.png"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div id="umain">
                <div id="lginn">
                    <h2>Login</h2>
                    <hr/>
                    <img id="logo" src={logo} alt="" />
                    <div id="label">
                        <>Username</>
                        <TextField type="username" name="username" />
                        <>Password </>
                        <TextField type="password" name="password" />
                    </div>
                    <hr/>
                    <Link to='/Home'><Button name="Login"/></Link>
                    <Link to='/Register'><Button name="Signup"/></Link>
                </div>
            </div>
        </>
    )
}
export default Login;