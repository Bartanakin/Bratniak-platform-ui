import './App.scss';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import RootLayout from './Layouts/RootLayout';
import WashingMachinesPage, { setStyling as WashingMachinesPageSetStyling } from './Pages/WashingMachinesPage';
import DryersPage, { setStyling as DryersPageSetStyling } from './Pages/DryersPage';
import ReservationsPage from './Pages/ReservationsPage';
import LoginPage from './Pages/LoginPage/LoginPage';

const router = createBrowserRouter(
  // const [rootLayoutClass, setRootLayoutClass] = useState((new Container()).get('Theme').getDecoratedClassName('root-layout'));
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<WashingMachinesPage />} loader={WashingMachinesPageSetStyling} />
      <Route exact path="/washing-machines" loader={WashingMachinesPageSetStyling} element={<WashingMachinesPage />} />
      <Route exact path="/dryers" loader={DryersPageSetStyling} element={<DryersPage />} />
      <Route exact path="/reservations/list" element={<ReservationsPage />} loader={WashingMachinesPageSetStyling} />
      <Route exact path="/login" element={<LoginPage />} loader={WashingMachinesPageSetStyling} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Martel', 'serif']
      }
    });
  }, []);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
