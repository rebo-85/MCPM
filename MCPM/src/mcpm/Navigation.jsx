import PropTypes from 'prop-types';

function Navigation({ tabs }) {
  return (
    <div className="navigation">
      <div className="navigation-list">
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <a href={tab.route}>{tab.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
