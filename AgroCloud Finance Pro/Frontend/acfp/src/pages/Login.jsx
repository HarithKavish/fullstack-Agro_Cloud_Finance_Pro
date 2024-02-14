// import { useRef } from 'react';
import Button from "../components/Button"
import TextField from "../components/TextField"
import logo from "../assets/images/acfp.png"
import { Link, useNavigate } from "react-router-dom"
import { signIn } from '.././services/auth'

const Login = () => {
    const navigate = useNavigate();

    // const emailRef = useRef("");
    // const passwordRef = useRef("");

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     const email = emailRef.current.value;
    //     const password = passwordRef.current.value;
    //     const form = {
    //         email: email,
    //         password: password
    //     }
    //     signIn(form).then((res) => sessionStorage.setItem('token', res.data.token)).catch((err) => console.log(err));

    //     navigate('/home');
    //     emailRef.current.value = "";
    //     passwordRef.current.value = "";
    // };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const form = {
          email: event.target.email.value,
          password: event.target.password.value,
        };
    
        signIn(form)
          .then((res) => {
            sessionStorage.setItem('token', res.data.token);
            
            console.log('====================================');
            console.log(res.data.token);
            console.log('====================================');
            navigate('/home');
          })
          .catch((err) => {
            console.error(err);
          });
      };

    return (
        <>
            <div id="umain">
                <form onSubmit={handleFormSubmit} id="lginn">
                    <h2>Login</h2>
                    <hr/>
                    <img id="logo" src={logo} alt="" />
                    <div id="label">
                        <>Username</>
                        <TextField id="email" type="email" name="email" placeholder="Enter Username"/>
                        <>Password </>
                        <TextField id="password" type="password" name="password" placeholder="Enter Password"/>
                    </div>
                    <hr/>
                    <Button type="submit" name="Login"/>
                    <Link to='/Register'><Button name="Signup"/></Link>
                </form>
            </div>
        </>
    )
}
export default Login;