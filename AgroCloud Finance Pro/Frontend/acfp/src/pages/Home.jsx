import CustomNavbar from "../components/CustomNavbar";
import { Carousel } from 'rsuite';
import "../assets/css/index.css"
import cer1 from "../assets/images/cer1.jpg";
import cer2 from "../assets/images/cer2.jpg";
import cer3 from "../assets/images/cer3.jpg";
import cer4 from "../assets/images/cer4.jpg";
// import { useEffect, useState } from "react";
// import { userList } from ".././services/user";

const Home = () => {

    // const[userListData, setUserList] = useState([]);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try{
    //             const response = await userList();
    //             setUserList(response.data.data);
    //         } catch(err){
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            {/* <div>
                {
                    userListData.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </div> */}
            <div id="main">
                <header id="navv">
                    <CustomNavbar/>
                </header>
                <div id="bodyy">
                    <div id="noncont">
                        <div id="in">
                            <Carousel autoplay id="custom-slider">
                                <img src="https://www.askbankifsccode.com/blog/wp-content/uploads/2023/07/Agriculture-Loan-Interest-rates-Schemes-Eligibility.jpg" height="250" />
                                <img src="https://images.cnbctv18.com/wp-content/uploads/2022/08/Agri-Loans1-1019x573.jpg" height="250" />
                                <img src="https://lakshmimoney.com/wp-content/uploads/2020/05/Agricultural-Loans-with-the-Lowest-Interest-Rates-661x420.jpg" height="250" />
                                <img src="https://agriculturereview.com/wp-content/uploads/2023/07/usda-fsa-farm-loans.jpg" height="250" />
                                <img src="https://i.pinimg.com/736x/25/03/cf/2503cfdc60edf0a2867ed200167b4826.jpg" height="250" />
                            </Carousel>
                            <div id="custom-slider">
                                <br/><br/><br/><br/><br/>
                                <h1 id="h">AgroCloud Finance Pro Awards</h1>
                                <img id="awa" src={cer1} alt="" />
                                <img id="awa" src={cer4} alt="" />
                                <img id="awa" src={cer3} alt="" />
                                <img id="awa" src={cer2} alt="" />
                            </div>
                        </div>
                    <div id="inn">
                    </div>
                    </div>
                    <div id="contmain">
                        <div id="cont">
                            {/* <h1>Welcome to AgroCloud Finance Pro</h1> */}
                            {/* <br/> */}
                            <p>Are you a farmer looking for financial support to grow your crops, buy new equipment, or expand your business?</p>
                            <p>If yes, then you have come to the right place. AgroCloud is a platform that connects you with various financial institutions that offer attractive and affordable agriculture loans in India.</p>
                            <br/><br/>
                            <h1>Why Choose AgroCloud</h1>
                            <br/>
                            <p>At AgroCloud, we understand the needs and challenges of farmers in India.</p>
                            <p>That is why we have partnered with some of the leading banks and NBFCs that provide customized and flexible loan solutions for farmers.</p>
                            <p>Whether you need a short-term loan for crop production, a medium-term loan for farm development, or a long-term loan for infrastructure creation, we have a loan scheme that suits your requirements.</p>
                            <br/><br/>
                            <h1>How to Apply for AgroCloud?</h1>
                            <br/>
                            <p>Applying for an agriculture loan through AgroCloud is easy and hassle-free.</p>
                            <p>You just need to follow these simple steps:</p>
                            <p>- Fill out a quick online application form with your personal and farm details.</p>
                            <p>- Upload the required documents, such as land ownership proof, identity proof, income proof, etc.</p>
                            <p>- Compare and choose the best loan offer from our partner institutions based on interest rates, tenure, repayment options, etc.</p>
                            <p>- Get instant approval and disbursal of the loan amount directly to your bank account.</p>
                            <br/><br/>
                            <h1>What are the Benefits of AgroCloud?</h1>
                            <br/>
                            <p>By choosing AgroCloud, you can enjoy the following benefits:</p>
                            <p>- Access to a wide range of agriculture loan schemes from various financial institutions.</p>
                            <p>- Low interest rates, minimal processing fees, and no hidden charges.</p>
                            <p>- Flexible repayment options, such as monthly, quarterly, or yearly installments, or crop-linked repayments.</p>
                            <p>- Interest subvention and other incentives from the government for eligible farmers.</p>
                            <p>- Dedicated customer support and guidance throughout the loan process.</p>
                            <br/><br/>
                            <h1>What are you waiting for?</h1>
                            <br/>
                            <p>Do not let financial constraints stop you from achieving your farming goals. Apply for an agriculture loan today and get the funds you need to grow your farm and your income. AgroCloud is here to help you make your dreams come true. Contact us now and get started. 🌱</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;