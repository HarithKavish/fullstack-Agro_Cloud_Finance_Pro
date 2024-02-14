// import React from "react";
import "../assets/css/faq.css";
import CustomNavbar from "../components/CustomNavbar";

const questions = [
  {
    id: 1,
    question: "What are the benefits of agriculture loans?",
    answer: "Agriculture loans are designed to help farmers and agribusinesses with their financial needs. They can be used for various purposes, such as purchasing seeds, fertilizers, equipment, land, irrigation, storage, processing, marketing, etc. Agriculture loans can also help farmers to cope with uncertainties, such as weather, pests, diseases, market fluctuations, etc."
  },
  {
    id: 2,
    question: "What are the eligibility criteria for agriculture loans?",
    answer: "The eligibility criteria for agriculture loans may vary depending on the type of loan, the lender, and the borrower. However, some common criteria are: \n- The borrower should be engaged in agricultural or allied activities. \n- The borrower should have a valid identity proof, address proof, and income proof. \n- The borrower should have a satisfactory credit history and repayment capacity. \n- The borrower should have a clear title of the land or property offered as collateral, if any."
  },
  {
    id: 3,
    question: "What are the types of agriculture loans available?",
    answer: "There are various types of agriculture loans available, depending on the nature and duration of the loan. Some of the common types are: \n- Short-term loans: These are loans that are repaid within a year or less. They are usually used for meeting the working capital requirements of the farm, such as buying inputs, paying wages, etc. \n- Medium-term loans: These are loans that are repaid within one to five years. They are usually used for purchasing or repairing farm assets, such as machinery, equipment, vehicles, etc. \n- Long-term loans: These are loans that are repaid over a period of more than five years. They are usually used for acquiring or developing land, building infrastructure, setting up processing units, etc."
  },
  {
    id: 4,
    question: "What are the interest rates and charges for agriculture loans?",
    answer: "The interest rates and charges for agriculture loans may vary depending on the type of loan, the lender, the borrower, and the market conditions. However, some factors that may affect the interest rates and charges are: \n- The loan amount and tenure. \n- The credit score and repayment history of the borrower. \n- The collateral and security offered by the borrower. \n- The government policies and subsidies for the agriculture sector. \n- The competition and demand for the agriculture loans in the market."
  },
  {
    id: 5,
    question: "How can I apply for an agriculture loan?",
    answer: "The application process for an agriculture loan may vary depending on the type of loan, the lender, and the borrower. However, some common steps are: \n- Identify your financial needs and objectives. \n- Compare and choose the best loan option that suits your requirements and preferences. \n- Fill up the loan application form and submit the required documents, such as identity proof, address proof, income proof, land records, project details, etc. \n- Await the verification and approval of your loan application by the lender. \n- Sign the loan agreement and receive the loan amount in your bank account or as per the agreed mode of disbursement."
  },
  {
    id: 6,
    question: "What are the documents required for an agriculture loan?",
    answer: "The documents required for an agriculture loan may vary depending on the type of loan, the lender, and the borrower. However, some common documents are: \n- Identity proof, such as Aadhaar card, PAN card, voter ID card, passport, driving license, etc. \n- Address proof, such as Aadhaar card, voter ID card, passport, driving license, utility bills, bank statements, etc. \n- Income proof, such as income tax returns, bank statements, salary slips, farm income certificate, etc. \n- Land records, such as land ownership certificate, land tax receipt, land survey report, etc. \n- Project details, such as project report, feasibility study, cost estimate, market analysis, etc. \n- Collateral documents, such as property papers, valuation report, insurance policy, etc., if any."
  },
  {
    id: 7,
    question: "What are the repayment options for agriculture loans?",
    answer: "The repayment options for agriculture loans may vary depending on the type of loan, the lender, and the borrower. However, some common repayment options are: \n- Equated monthly installments (EMIs): These are fixed monthly payments that cover both the principal and interest components of the loan. They are usually paid through post-dated cheques, electronic clearing system, or direct debit. \n- Bullet payments: These are lump sum payments that are made at the end of the loan tenure or at specified intervals. They are usually paid through cash, cheque, or online transfer. \n- Flexible payments: These are payments that are adjusted according to the cash flow and income of the borrower. They may vary in amount, frequency, and duration. They are usually paid through cash, cheque, or online transfer."
  },
  {
    id: 8,
    question: "What are the benefits of online apply for agriculture loans?",
    answer: "Online apply for agriculture loans is a convenient and hassle-free way of availing finance for your farm needs. Some of the benefits of online apply for agriculture loans are: \n- You can apply for the loan anytime and anywhere, without visiting the branch or meeting the loan officer. \n- You can compare and choose the best loan option that suits your requirements and preferences. \n- You can save time and money by avoiding the paperwork and processing fees. \n- You can track the status of your loan application and disbursement online. \n- You can access the customer care and grievance redressal services online."
  },
  {
    id: 9,
    question: "What are the risks and challenges of agriculture loans?",
    answer: "Agriculture loans are subject to various risks and challenges that may affect the repayment capacity and creditworthiness of the borrower. Some of the risks and challenges of agriculture loans are: \n- Natural calamities, such as drought, flood, cyclone, hailstorm, pest attack, disease outbreak, etc. \n- Market fluctuations, such as price volatility, demand and supply mismatch, competition, quality issues, etc. \n- Policy changes, such as tax reforms, subsidy revisions, import and export regulations, etc. \n- Operational issues, such as labor shortage, machinery breakdown, power outage, transportation delay, etc. \n- Personal issues, such as health problems, family disputes, legal disputes, etc."
  },
  {
    id: 10,
    question: "What are the best practices for managing agriculture loans?",
    answer: "Managing agriculture loans is a crucial aspect of ensuring the financial health and sustainability of the farm. Some of the best practices for managing agriculture loans are: \n- Plan your financial needs and objectives in advance and borrow only what you need and can repay. \n- Choose the best loan option that suits your requirements and preferences and read the loan agreement carefully before signing. \n- Maintain a good credit history and repayment record by paying your EMIs or bullet payments on time and in full. \n- Monitor your cash flow and income regularly and adjust your repayment schedule accordingly. \n- Use the loan amount wisely and productively for the intended purpose and avoid unnecessary or wasteful expenses. \n- Seek professional advice and guidance from experts, such as financial advisors, agronomists, extension officers, etc. \n- Avail the benefits of government schemes and subsidies for the agriculture sector and repay your loan as soon as possible."
  }
];

const Faq = () => {
  return (
    <div id="main">
      <CustomNavbar />
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {questions.map((q) => (
            <div className="faq-item" key={q.id}>
              <h2 className="faq-question">{q.id}. {q.question}</h2>
              <p className="faq-answer">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;









// // Import React and PropTypes
// import React from 'react';
// import PropTypes from 'prop-types';
// import '../assets/css/faq.css';

// function FAQ(props) {
//   // Destructure props
//   const { questions, answers } = props;

//   // Check if questions is defined and is an array
//   if (!Array.isArray(questions)) {
//     // Handle the case where questions is not an array (or is undefined)
//     return (
//       <div className="faq">
//         <h1>Frequently Asked Questions</h1>
//         <p>Error: Questions data is missing or not an array.</p>
//       </div>
//     );
//   }

//   // Render a list of questions and answers
//   return (
//     <div className="faq">
//       <h1>Frequently Asked Questions</h1>
//       <ul>
//         {questions.map((question, index) => (
//           <li key={index}>
//             <div className="question">
//               <span className="number">{index + 1}.</span>
//               <span className="text">{question}</span>
//             </div>
//             <div className="answer">{answers && answers[index]}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // PropTypes validation
// FAQ.propTypes = {
//   questions: PropTypes.array,
//   answers: PropTypes.array,
// };

// export default FAQ;
