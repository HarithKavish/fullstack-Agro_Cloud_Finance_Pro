// import { useRef, useEffect } from 'react';
import CustomSidebar from '../../components/CustomSideNav';
import '../../assets/css/admin.css';
// import { Carousel } from 'rsuite';
// import { Line } from 'react-chartjs-2';
// import { PieChart } from '@mui/x-charts/PieChart';
import UserProfile from '../../components/TableComponent';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <CustomSidebar />
      </div>
      <div className="dashboard-content">
        <UserProfile/>
    </div>
      </div>
  );
};


export default Dashboard;
