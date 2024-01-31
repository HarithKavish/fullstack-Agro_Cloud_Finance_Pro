import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import ExitIcon from '@rsuite/icons/Exit';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import MessageIcon from '@rsuite/icons/Message';
import SpeakerIcon from '@rsuite/icons/Speaker';
import {useNavigate} from "react-router-dom";
// import Button from "../components/Button";
// import CogIcon from '@rsuite/icons/legacy/Cog';

const CustomNavbar = () => {
  const Navigate =new useNavigate();
  const handleChange=()=>{
    Navigate(`/home`);
  }
  const handleChangeProfile=()=>{
    Navigate(`/profile`);
  }
  const handleChangeLoans=()=>{
    Navigate(`/loans`);
  }
  const handleChangeLogin=()=>{
    Navigate(`/login`);
  }
  const handleChangeFaq=()=>{
    Navigate(`/faq`);
  }
    return (
        <>
            <Navbar id="nav">
                {/* <Navbar.Brand href="#">RSUITE</Navbar.Brand> */}
                <Nav>
                <Nav.Item icon={<HomeIcon />} onClick={handleChange}>Home</Nav.Item>
                <Nav.Item icon={<UserInfoIcon />} onClick={handleChangeProfile}>Profile</Nav.Item>
                <Nav.Item icon={<SpeakerIcon />} onClick={handleChangeLoans}>Loans</Nav.Item>
                <Nav.Item icon={<MessageIcon />} onClick={handleChangeFaq}>FAQs</Nav.Item>
                {/* <Nav.Item>Products</Nav.Item> */}
                {/* <Nav.Menu title="About">
                    <Nav.Item>Company</Nav.Item>
                    <Nav.Item>Team</Nav.Item>
                    <Nav.Menu title="Contact">
                        <Nav.Item>Via email</Nav.Item>
                        <Nav.Item>Via telephone</Nav.Item>
                    </Nav.Menu>
                </Nav.Menu> */}
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={handleChangeLogin} icon={<ExitIcon />}>Logout</Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

export default CustomNavbar;