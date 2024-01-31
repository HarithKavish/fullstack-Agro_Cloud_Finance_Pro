import PropTypes from 'prop-types';
import slugify from 'slugify';
import CustomNavbar from '../components/CustomNavbar';
// import Apply from '../pages/Apply';
import styles from '../assets/css/LoanSchemes.module.css';
import { SchemeContext } from '../components/SchemeContext';

const Loans = () => {
  const LoanScheme  = ({ title, description, onApply }) => {
    const handleApply = () => {
      onApply({ title, description });
    };
    return (
      <div className={styles.scheme}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={handleApply} className={styles.button}>
          Apply Now
        </button>
      </div>
    );
  };
  
  LoanScheme.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onApply: PropTypes.func.isRequired,

  };
  
  const LoanSchemesPage = ({ schemes }) => {
    const pages = [];
    for (let i = 0; i < schemes.length; i += 9) {
      pages.push(schemes.slice(i, i + 9));
    }
    // const handleApply = (selectedScheme) => {
    //   console.log('Applying for:', selectedScheme);
    // };
    return (
      <div className={styles.container}>
        {pages.map((page, index) => (
          <div key={`page-${index}`} className={styles.page}>
            {page.map((scheme) => (
              <LoanScheme key={slugify(scheme.title, { lower: true })} {...scheme} />
            ))}
            {/* <Apply schemes={schemes} onApply={handleApply} /> */}
          </div>
        ))}
      </div>
    );
  };

  LoanSchemesPage.propTypes = {
    schemes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  const schemes = [
    {
      title: 'Kisan Credit Card Scheme',
      description: 'A flexible credit facility for farmers to meet their short-term agricultural and allied expenses.',
      url: '/apply',
    },
    {
      title: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'A crop insurance scheme that provides financial support to farmers in case of crop failure due to natural calamities.',
      url: '/apply',
    },
    {
      title: 'Kisan Gold Scheme',
      description: 'A loan scheme that allows farmers to avail credit against their gold ornaments at low interest rates.',
      url: '/apply',
    },
    {
      title: 'Solar Pump Loans',
      description: 'A loan scheme that helps farmers to install solar-powered water pumps for irrigation purposes.',
      url: '/apply',
    },
    {
      title: 'Dairy Loans',
      description: 'A loan scheme that supports farmers to purchase dairy animals, construct sheds, and buy equipment for dairy farming.',
      url: '/apply',
    },
    {
      title: 'Allied Agricultural Loans',
      description: 'A loan scheme that covers various activities related to agriculture, such as poultry, fishery, sericulture, apiculture, etc.',
      url: '/apply',
    },
    {
      title: 'SHG Loans',
      description: 'A loan scheme that provides credit to self-help groups of farmers, especially women, for income-generating activities.',
      url: '/apply',
    },
    {
      title: 'Agriculture Infrastructure Fund Scheme',
      description: 'A loan scheme that finances the creation of post-harvest infrastructure and community farming assets, such as cold storage, warehouses, processing units, etc.',
      url: '/apply',
    },
    {
      title: 'Krishi Udan Scheme',
      description: 'A scheme that aims to boost the transport of agricultural products by air, and provide better connectivity to farmers with domestic and international markets.',
      url: '/apply',
    },
  ];

  return (
    <div id="main">
      <CustomNavbar />
      <div className="container">
        {/* Wrap your component with the context provider and pass the schemes as the value */}
        <SchemeContext.Provider value={schemes}>
          <LoanSchemesPage schemes={schemes} />
        </SchemeContext.Provider>
      </div>
    </div>

  );
};

export default Loans;

// import PropTypes from 'prop-types';
// import slugify from 'slugify';
// import '../assets/css/apply.css';
// import styles from '../assets/css/LoanSchemes.module.css';
// import { useParams } from 'react-router-dom';

// function Apply({ schemes, onApply }) {
//   const { schemeId } = useParams();
//   const selectedScheme = schemes.find((scheme) => slugify(scheme.title, { lower: true }) === schemeId);

//   if (!selectedScheme) {
//     // Handle invalid schemeId, redirect, or show an error message
//     return <div>Invalid Scheme ID</div>;
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted!');
//     // Handle form submission logic here
//     // Call the onApply function passed from the parent component
//     onApply(selectedScheme);
//   };

//   return (
//     <div className="loan-application">
//       <h1>Agricultural Loan Application</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="loanScheme">Loan Scheme</label>
//           <p id="loanScheme" className="description">
//             {selectedScheme.title}
//           </p>
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <p id="description" className="description">
//             {selectedScheme.description}
//           </p>
//         </div>
//         <div className="form-group">
//           {/* Add more form components here */}
//         </div>
//         <div className="form-group">
//           {/* Trigger the onApply function when the Apply Now button is clicked */}
//           <button type="submit" className={styles.button}>
//             Apply Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// Apply.propTypes = {
//   schemes: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onApply: PropTypes.func.isRequired, // Function to handle the apply action
// };

// export default Apply;