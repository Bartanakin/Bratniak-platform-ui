import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RootLayout.scss';
import Container from '../DependecyInjection/Container';

function RootLayout() {
  const { t, i18n } = useTranslation();
  const createHandleLanguageChange = lang => () => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header className={(new Container()).get('Theme').getDecoratedClassName('header')}>
        <NavLink className="navlink" to="washing-machines">{t('navbar.washing_machines')}</NavLink>
        <NavLink className="navlink" to="dryers">{t('navbar.dryers')}</NavLink>
        <NavLink className="navlink" to="reservations/list">{t('navbar.list_of_reservations')}</NavLink>
        <div className="navlink" onClick={createHandleLanguageChange('pl')}>Polski</div>
        <div className="navlink" onClick={createHandleLanguageChange('eng')}>English</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
