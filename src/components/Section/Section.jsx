import styles from './Section.module.css';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Section = ({ className, children }) => {
  const classList = cx(styles.section, className);
  return <div className={classList}>{children}</div>;
};

Section.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
