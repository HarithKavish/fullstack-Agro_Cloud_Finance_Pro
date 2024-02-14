import PropTypes from 'prop-types';

const Button = ({ name }) => {
    return (
        <button className='butn'>{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired
};

export default Button;