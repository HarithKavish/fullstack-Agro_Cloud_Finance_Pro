import { Sidenav, Nav } from 'rsuite';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import {useNavigate} from "react-router-dom";
import ".././assets/css/admin.css"

const CustomSideNav = () => {
  const Navigate =new useNavigate();
  const handleChange=()=>{
    Navigate(`/dashboard`);
  }
  const handleChangeAdminProfile=()=>{
    Navigate(`/adminprofile`);
  }
  const handleChangeProfile=()=>{
    Navigate(`/usergroup`);
  }
  return (
    <div>
        <Sidenav defaultOpenKeys={['3', '4', '5']}>
          <Sidenav.Body id='snvb'>
            <Nav activeKey="1">
              <Nav.Item id='item' eventKey="1" icon={<DashboardIcon />} onClick={handleChange}>
                Dashboard
              </Nav.Item>
              <Nav.Item icon={<UserInfoIcon />} onClick={handleChangeAdminProfile}>Profile</Nav.Item>
              <Nav.Item id='item' eventKey="2" icon={<GroupIcon />} onClick={handleChangeProfile}>
                User Group
              </Nav.Item>
              <Nav.Menu  id='item' eventKey="3" title="Advanced" icon={<MagicIcon />}>
                <Nav.Item id='item' eventKey="3-1">Geo</Nav.Item>
                <Nav.Item id='item' eventKey="3-2">Devices</Nav.Item>
                <Nav.Item id='item' eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item id='item' eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu id='item' eventKey="4" title="Settings" icon={<GearCircleIcon />}>
                <Nav.Item id='item' eventKey="4-1">Applications</Nav.Item>
                <Nav.Item id='item' eventKey="4-2">Channels</Nav.Item>
                <Nav.Item id='item' eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu id='item' eventKey="5" title="Custom Action">
                  <Nav.Item id='item' eventKey="5-1">Action Name</Nav.Item>
                  <Nav.Item id='item' eventKey="5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        </div>
    );
  }
// }

export default CustomSideNav;





// import { Nav, Sidenav } from "rsuite";
// import { Toggle } from "rsuite";
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
// import GroupIcon from '@rsuite/icons/legacy/Group';
// import MagicIcon from '@rsuite/icons/legacy/Magic';
// import MenuIcon from '@rsuite/icons/Menu';
// import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
// import React from "react";

// const CustomSideNav = () => {
//     const [expanded, setExpanded] = React.useState(false);
//     const [activeKey, setActiveKey] = React.useState('1');
//     return (
//         <div style={{ width: 200 }}>
            {/* <Toggle
            onChange={setExpanded}
            checked={expanded}
            checkedChildren=""
            unCheckedChildren=""
            />
            <hr /> */}
            
//             <Sidenav expanded={expanded} id="snav">
//                 <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />

//                 <Sidenav.Body>
//                     <Nav activeKey={activeKey} onSelect={setActiveKey}>
//                         <Nav.Item eventKey="1" icon={<DashboardIcon />}>
//                             Dashboard
//                         </Nav.Item>
//                         <Nav.Item eventKey="2" icon={<GroupIcon />}>
//                             User Group
//                         </Nav.Item>
//                         <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" icon={<MagicIcon />}>
//                             <Nav.Item eventKey="3-1">Geo</Nav.Item>
//                             <Nav.Item eventKey="3-2">Devices</Nav.Item>
//                             <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
//                             <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
//                         </Nav.Menu>
//                         <Nav.Menu
//                             placement="rightStart"
//                             eventKey="4"
//                             title="Settings"
//                             icon={<GearCircleIcon />}
//                         >
//                             <Nav.Item eventKey="4-1">Applications</Nav.Item>
//                             <Nav.Item eventKey="4-2">Channels</Nav.Item>
//                             <Nav.Item eventKey="4-3">Versions</Nav.Item>
//                             <Nav.Menu eventKey="4-5" title="Custom Action">
//                                 <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
//                                 <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
//                             </Nav.Menu>
//                         </Nav.Menu>
//                     </Nav>
//                 </Sidenav.Body>
//             </Sidenav>
//         </div>
//     );
// }

// export default CustomSideNav;