import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/assets/css/message-text.css';
import { routes } from './config/routes';

function App() {
  return (
    <Router>
      <div>
        <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;