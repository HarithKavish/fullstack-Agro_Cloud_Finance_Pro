import CustomNavbar from "../components/CustomNavbar";
import { Carousel } from 'rsuite';
import "../assets/css/index.css"

const Home = () => {
    return (
        <>
            <div id="main">
                <CustomNavbar/>
                <Carousel autoplay id="custom-slider">
                    <img src="https://www.askbankifsccode.com/blog/wp-content/uploads/2023/07/Agriculture-Loan-Interest-rates-Schemes-Eligibility.jpg" height="250" />
                    <img src="https://images.cnbctv18.com/wp-content/uploads/2022/08/Agri-Loans1-1019x573.jpg" height="250" />
                    <img src="https://lakshmimoney.com/wp-content/uploads/2020/05/Agricultural-Loans-with-the-Lowest-Interest-Rates-661x420.jpg" height="250" />
                    <img src="https://agriculturereview.com/wp-content/uploads/2023/07/usda-fsa-farm-loans.jpg" height="250" />
                    <img src="https://i.pinimg.com/736x/25/03/cf/2503cfdc60edf0a2867ed200167b4826.jpg" height="250" />
                </Carousel>
                <div id="cont">
                Welcome to Agri-Loans
                <p>

Are you a farmer looking for financial support to grow your crops, buy new equipment, or expand your business? If yes, then you have come to the right place. Agri-Loans is a platform that connects you with various financial institutions that offer attractive and affordable agriculture loans in India.

Why Choose Agri-Loans?

At Agri-Loans, we understand the needs and challenges of farmers in India. That's why we have partnered with some of the leading banks and NBFCs that provide customized and flexible loan solutions for farmers. Whether you need a short-term loan for crop production, a medium-term loan for farm development, or a long-term loan for infrastructure creation, we have a loan scheme that suits your requirements.

                </p>
                <br/>
How to Apply for Agri-Loans?
                <p>

Applying for an agriculture loan through Agri-Loans is easy and hassle-free. You just need to follow these simple steps:

- Fill out a quick online application form with your personal and farm details.
- Upload the required documents, such as land ownership proof, identity proof, income proof, etc.
- Compare and choose the best loan offer from our partner institutions based on interest rates, tenure, repayment options, etc.
- Get instant approval and disbursal of the loan amount directly to your bank account.

                </p>
                <br/>
                <p>
What are the Benefits of Agri-Loans?

By choosing Agri-Loans, you can enjoy the following benefits:

- Access to a wide range of agriculture loan schemes from various financial institutions.
- Low interest rates, minimal processing fees, and no hidden charges.
- Flexible repayment options, such as monthly, quarterly, or yearly installments, or crop-linked repayments.
- Interest subvention and other incentives from the government for eligible farmers.
- Dedicated customer support and guidance throughout the loan process.

                </p>
                <br/>
What are you waiting for?
                <p>

Don't let financial constraints stop you from achieving your farming goals. Apply for an agriculture loan today and get the funds you need to grow your farm and your income. Agri-Loans is here to help you make your dreams come true. Contact us now and get started. 🌱

                </p>




                </div>
            </div>
        </>
    )
}
export default Home;