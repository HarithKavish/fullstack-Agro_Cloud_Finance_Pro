import PropTypes from 'prop-types';

const Button = ({ name }) => {
    return (
        <button id='butn'>{name}</button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired
};

export default Button;