import '../../assets/css/index.css';
import PropTypes from 'prop-types';
import Uploader from "../../components/Uploader";
import "../../assets/css/admprofile.css"
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import CustomSideNav from '../../components/CustomSideNav';

function Profile(props) {
  const { firstname, email, password, aadhar, mobile } = props;
  
  const MyComponent = () => {
  };
  MyComponent.propTypes = {
    firstname: PropTypes.string,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    aadhar: PropTypes.number.isRequired,
    mobile: PropTypes.number
  };
  Profile.propTypes = {
    firstname: PropTypes.string,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    aadhar: PropTypes.number.isRequired,
    mobile: PropTypes.number
  };

  return (
    <div className='dashboard-container'>
        <div className='sidebar'>
          <CustomSideNav/>
        </div>
      <div className="profile">
        <div className="profile-header">
            <h1 className="profile-name">Admin Profile</h1>
        </div>
        <div className="profile-form">
          <hr/>
          <div className="pp">
            <label className="profile-labell" htmlFor="documents">Profile Picture</label>
            <br/>
            <Uploader/>
            <br/>
          </div>
          <div className="profile-field">
            <label className="profile-label" htmlFor="name">Name</label>
            <TextField type="text" id="name" name="name" value={firstname} />
          </div>
          <div className="profile-field">
            <label className="profile-label" htmlFor="email">Email</label>
            <TextField type="email" id="email" name="email" value={email} />
          </div>
          <div className="profile-field">
            <label className="profile-label" htmlFor="password">Password</label>
            <TextField type="password" id="password" name="password" value={password} />
          </div>
          <div className="profile-field">
            <label className="profile-label" htmlFor="aadhar">Aadhar Number</label>
            <TextField type="text" id="aadhar" name="aadhar" value={aadhar} />
          </div>
          <div className="profile-field">
            <label className="profile-label" htmlFor="mobile">Mobile Number</label>
            <TextField type="tel" id="mobile" name="mobile" value={mobile} />
          </div>
          <hr/>
          <div className="profile-field">
            <Link className="profile-button" to='/Home'><Button name="Submit"/></Link>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}
export default Profile;