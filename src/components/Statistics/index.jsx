import PropTypes from 'prop-types';
import { getRandomHexColorDark } from 'helpers/colors';
import './index.css';

const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{
              backgroundColor: getRandomHexColorDark(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
