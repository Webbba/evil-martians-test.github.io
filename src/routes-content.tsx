import { useRoutes } from 'react-router-dom';
import Login from './hoc/login/login';
import Congrats from './hoc/congrats/congrats';

import ROUTES from './routes';

const Routes = () => {
  const elements = useRoutes([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.CONGRATS,
      element: <Congrats />,
    },
  ]);

  return elements;
};

export default Routes;
