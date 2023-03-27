import './ListTile.scss';
import PropTypes from 'prop-types';

function ListTile({ children, onClick, tileClassNames = [] }) {
  return (
    <div className="list--tile-wrap-up" onClick={onClick}>
      <div className={`list--list-tile ${tileClassNames.join(' ')}`}>
        { children }
      </div>
    </div>
  );
}

ListTile.propTypes = {
  children: PropTypes.array,
  tileClassNames: PropTypes.array,
  onClick: PropTypes.func
};

export default ListTile;
