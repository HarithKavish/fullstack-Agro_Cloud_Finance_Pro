// import { useRef, useEffect } from 'react';
import CustomSidebar from '../../components/CustomSideNav';
import '../../assets/css//admin.css';
import { Carousel } from 'rsuite';
// import { Line } from 'react-chartjs-2';
import { PieChart } from '@mui/x-charts/PieChart';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <CustomSidebar />
      </div>
      <div className="dashboard-content">
        <h1>Welcome Admin</h1>
        <br/>
        <Carousel autoplay className="custom-slider">
          <img src="https://www.askbankifsccode.com/blog/wp-content/uploads/2023/07/Agriculture-Loan-Interest-rates-Schemes-Eligibility.jpg" height="250" />
          <img src="https://images.cnbctv18.com/wp-content/uploads/2022/08/Agri-Loans1-1019x573.jpg" height="250" />
          <img src="https://lakshmimoney.com/wp-content/uploads/2020/05/Agricultural-Loans-with-the-Lowest-Interest-Rates-661x420.jpg" height="250" />
          <img src="https://agriculturereview.com/wp-content/uploads/2023/07/usda-fsa-farm-loans.jpg" height="250" />
          <img src="https://i.pinimg.com/736x/25/03/cf/2503cfdc60edf0a2867ed200167b4826.jpg" height="250" />
        </Carousel>
        <br/><br/>
        <PieChart
          id="myPieChart" // add an id to the chart component
                    series={[
                        {
                        data: [
                            { id: 0, value: 5, label: 'Others' },
                            { id: 1, value: 22, label: 'Female' },
                            { id: 2, value: 23, label: 'Male' },
                        ],
                        },
                    ]}
                    width={400}
                    height={200}
                    options={{
                      scales: {
                        x: {
                          ticks: {
                            color: '#FFFFFF', // white color for x-axis labels
                          },
                        },
                        y: {
                          ticks: {
                            color: '#FFFFFF', // white color for y-axis labels
                          },
                        },
                      },
                    }}                  
                />
    </div>
      </div>
  );
};


export default Dashboard;
