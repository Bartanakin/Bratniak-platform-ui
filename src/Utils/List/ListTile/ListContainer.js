import PropTypes from 'prop-types';

function ListContainer({ results, onClick }) {
  return (
    <div className="list-container">
      {/* { results.map(result => ( */}
      {/*   <ListElement */}
      {/*     key={result.id} */}
      {/*     data={result} */}
      {/*     onClick={onClick} */}
      {/*   /> */}
      {/* )) } */}
    </div>
  );
}

ListContainer.propTypes = {
  results: PropTypes.array,
  onClick: PropTypes.func
};

export default ListContainer;
