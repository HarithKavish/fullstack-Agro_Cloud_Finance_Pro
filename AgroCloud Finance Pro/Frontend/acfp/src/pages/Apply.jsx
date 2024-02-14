// import PropTypes from 'prop-types';
// import slugify from 'slugify';
import Button from "../components/Button"
import '../assets/css/apply.css';
import TextField from "../components/TextField"
import CustomNavbar from '../components/CustomNavbar';
import { Link } from "react-router-dom"
// import styles from '../assets/css/LoanSchemes.module.css';
// import { useParams } from 'react-router-dom';

function Apply() {
  return (
    <div id='main'>
      <header>
        <CustomNavbar />
      </header>
      <div className="loan-application">
        {/* <h1>Agricultural Loan Application</h1> */}
        <div id="lginnn">
                    <h2>Apply</h2>
                    <hr/>
                    {/* <img id="logo" src={logo} alt="" /> */}
                    <div id="label">
                        <>Account Number</>
                        <TextField type="password" name="password" />
                        <>IFSC Code</>
                        <TextField type="username" name="username" />
                        <>Email</>
                        <TextField type="password" name="password" />
                        <>OTP</>
                        <TextField type="username" name="username" />
                    </div>
                    <hr/>
                    {/* <Link to='/Home'><Button name="Login"/></Link> */}
                    <Link to='/home'><Button name="Apply"/></Link>
                </div>
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group">
            <button type="submit" className={styles.button}>
              <a href="/apply">Apply Now</a>
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

// Apply.propTypes = {
//   schemes: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default Apply;

// import { useState, useContext } from 'react';
// import { SchemeContext } from '../components/SchemeContext'; // Import the context object

// const Apply = () => {
//   const schemes = useContext(SchemeContext);

//   const [selectedScheme, setSelectedScheme] = useState(null);

//   const handleSelect = (event) => {
//     const scheme = schemes.find(
//       (scheme) => scheme.title === event.target.value
//     );
//     setSelectedScheme(scheme);
//   };

//   return (
//     <div id='main'>
//       <h2>Apply for a loan scheme</h2>
//       <p>Select a scheme from the list below:</p>
//       <select onChange={handleSelect}>
//         <option value="">--Please choose an option--</option>
//         {schemes.map((scheme) => (
//           <option key={scheme.title} value={scheme.title}>
//             {scheme.title}
//           </option>
//         ))}
//       </select>
//       {selectedScheme && (
//         <div>
//           <h3>You have selected: {selectedScheme.title}</h3>
//           <p>{selectedScheme.description}</p>
//           <button>Apply Now</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Apply;
