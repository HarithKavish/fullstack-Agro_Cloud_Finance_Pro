import Button from "../components/Button"
import TextField from "../components/TextField"
import logo from "../assets/images/acfp.png"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <>
            <div id="umain">
                <div id="reginn">
                    <h2>Register</h2>
                    <hr/>
                    <img id="logo" src={logo} alt="" />
                    <br/>
                    <div id="label">
                        <>Name </>
                        <TextField type="text" name="firstname" />
                        <>Username</>
                        <TextField type="username" name="username" />
                        <>Password </>
                        <TextField type="password" name="password" />
                        <>Confirm Password </>
                        <TextField type="password" name="password" />
                    </div>
                    <hr/>
                    <Link to='/login'><Button name="Register"/></Link>
                </div>
            </div>
        </>
    )
}
export default Register;