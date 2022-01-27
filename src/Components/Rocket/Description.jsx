import PropTypes from 'prop-types';

const Description = (props) => {
  const { reserved, description } = props;
  return (
    <p className="text-ellipsis overflow-y-auto">
      {reserved
        && (
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-[#18a2b8] rounded mr-6">
            Reserved
          </span>
        )}
      <span>
        {description}
      </span>
    </p>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Description;
