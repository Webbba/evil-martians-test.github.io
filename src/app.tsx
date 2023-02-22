import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';

import Routes from './routes-content';

import './styles.css';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
