import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <p className="text-xs text-bermuda mt-1 ml-4">{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
