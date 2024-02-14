// import { useState } from 'react';
// import { useRef } from 'react';
// import { Alert, AlertIcon } from '@chakra-ui/react';
import { signUp } from '.././services/auth'
import Button from '../components/Button';
import TextField from '../components/TextField';
import logo from '../assets/images/acfp.png';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  // const nameRef = useRef("");
  // const emailRef = useRef("");
  // const passwordRef = useRef("");

  // const handleFormSubmit = () => {
  //   const name = nameRef.current.value;
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;
  //   const form = {
  //     name: name,
  //     email: email,
  //     password: password
  //   }
  //   signUp(form);
  //   console.log("Form: ",form);
  //   nameRef.current.value="";
  //   emailRef.current.value="";
  //   passwordRef.current.value="";
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const form = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };
    
    // signUp(form)
    // .then((res) => {
    //   sessionStorage.setItem('token', res.data.token);
    //   console.log('====================================');
    //   console.log(res.data.token);
    //   console.log('====================================');
    //   navigate('/login');
    // })
    // .catch((err) => {
    //     console.log("hello");
    //     console.error(err);
    //   });
    signUp(form)
    .then((res) => {
      // console.log(res);
      // console.log('Response data:', res.data);
      // console.log('Status code:', res.status);
      // console.log('Headers:', res.headers);
      navigate('/login');
      if (res && res.data && res.data.token) {
        sessionStorage.setItem('token', res.data.token);
        console.log('Token:', res.data.token);
      } else {
        console.error('Unexpected response data:', res);
      }
    })
    .catch((err) => {
      console.log(signUp(form));
      console.error('Error during signup:', err);
    });

  };
  

  // const handleAlert = () => {
    // alert('Registered successfully!');
    // setShowAlert(true);

    // {showAlert && (
        // <Alert status="success" variant="left-accent">
        //   <AlertIcon />
        //   Data uploaded to the server. Fire on!
        // </Alert>
    //   )}
    // Alternatively, you can use the Chakra UI Alert component:
    // setShowAlert(true); // Set a state to show the alert
  // };

  return (
    <>
      <div id="umain">
        <form onSubmit={handleFormSubmit} id="reginn">
          <h2>Register</h2>
          <hr />
          <img id="logo" src={logo} alt="" />
          <br />
          <div id="label">
            <>Name </>
            <TextField id="name" type="name" name="name" placeholder='Enter Name'/>
            <>Username</>
            <TextField id="email" type="email" name="email" placeholder='Enter Username'/>
            <>Password </>
            <TextField id="password" type="password" name="password" placeholder='Enter Password'/>
            {/* <>Confirm Password </> */}
            {/* <TextField  type="password" name="password" /> */}
          </div>
          <hr />
          {/* <Link >  */}
            <Button type="submit" name="Register"/>
          {/* </Link> */}
        </form>
      </div>
      {/* Show the Chakra UI Alert here if needed */}
      {/* {showAlert && (
        <Alert status="success" variant="left-accent">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      )} */}
    </>
  );
};

export default Register;
