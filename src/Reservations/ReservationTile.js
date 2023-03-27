import PropTypes from 'prop-types';
import './ReservationTile.scss';
import { useTranslation } from 'react-i18next';

function ReservationTile({ field }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="reservation-tile--row">
        <div className="reservation-tile--row-title">{t('reservation_list.tile.name')}</div>
        <div className="reservation-tile--row-content">{ field.machineName }</div>
      </div>
      <div className="reservation-tile--row">
        <div className="reservation-tile--row-title">{t('reservation_list.tile.date')}</div>
        <div className="reservation-tile--row-content">{ field.date }</div>
      </div>
      <div className="reservation-tile--row">
        <div className="reservation-tile--row-title">{t('reservation_list.tile.from')}</div>
        <div className="reservation-tile--row-content">{ field.hourFrom }</div>
      </div>
      <div className="reservation-tile--row">
        <div className="reservation-tile--row-title">{t('reservation_list.tile.to')}</div>
        <div className="reservation-tile--row-content">{ field.hourTo }</div>
      </div>
      <div className="reservation-tile--row">
        <div className="reservation-tile--row-title">{t('reservation_list.tile.slot_state')}</div>
        <div className="reservation-tile--row-content">{ field.state.getTileStateName(field.roomNumber, t) }</div>
      </div>
    </>
  );
}

ReservationTile.propTypes = {
  field: PropTypes.object
};

export default ReservationTile;
