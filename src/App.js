import { Router, Routes, Route, routes } from './config/imports';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/config.css';

function App() {
  return (
    <Router>
      <div className="d-flex justify-content-center align-items-center app-component-upper">
        <div className="container rounded mt-3 app-component-lower">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;