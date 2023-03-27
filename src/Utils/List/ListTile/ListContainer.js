import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { MoonLoader } from 'react-spinners';
import ListTile from './ListTile';

function ListContainer({ generateTile, fields, isPending, errors }) {
  const { t } = useTranslation();

  return (
    <div className="list--container">
      { isPending && (
        <div className="centered">
          <MoonLoader
            size={70}
            aria-label="Loading Spinner"
          />
        </div>
      )}
      { errors && (
        <div className="centered">
          {t('errors.connection')}
        </div>
      )}
      { !isPending && !errors && fields.map(field => (
        <ListTile
          key={field.id}
          tileClassNames={field.tileClassNames ?? []}
          onClick={field.onClick}
        >
          { generateTile(field) }
        </ListTile>
      )) }
    </div>
  );
}

ListContainer.propTypes = {
  generateTile: PropTypes.func,
  fields: PropTypes.array,
  isPending: PropTypes.bool,
  errors: PropTypes.string
};

export default ListContainer;
