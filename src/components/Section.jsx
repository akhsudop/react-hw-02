import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h3 className="section-title">{title}</h3>
    {children}
  </>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
