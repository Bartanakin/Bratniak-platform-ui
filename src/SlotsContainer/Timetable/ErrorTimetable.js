import { useTranslation } from 'react-i18next';

function ErrorTimetable() {
  const { t } = useTranslation();

  return (
    <div className="timetable--content timetable--temp-info">
      <h3>{t('errors.connection')}</h3>
    </div>
  );
}
export default ErrorTimetable;
