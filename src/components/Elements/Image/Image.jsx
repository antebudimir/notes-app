import PropTypes from 'prop-types';

const Image = ({ imageSource, className, imageAlt }) => {
	return <img src={imageSource} className={className} alt={imageAlt} />;
};

Image.propTypes = {
	imageSource: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Image;
