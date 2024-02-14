import PropTypes from 'prop-types';

const TextField = ({ id, type, name, placeholder }) => {
    return (
        <input className='input' required id={id} type={type} name={name} placeholder={placeholder} />
    );
};

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default TextField;
