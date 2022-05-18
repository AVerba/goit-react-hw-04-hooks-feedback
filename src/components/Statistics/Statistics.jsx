import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.list}>
      <li className="statistics__item">
        <span>Good: {good}</span>
      </li>
      <li className={styles.item}>
        <span>Neutral: {neutral}</span>
      </li>
      <li className={styles.item}>
        <span>Bad: {bad}</span>
      </li>
      <li className={styles.item}>
        <span>Total: {total}</span>
      </li>
      <li className={styles.item}>
        <span>Positive feedback: {positivePercentage}%</span>
      </li>
    </ul>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
