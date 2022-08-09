import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Register, Landing, Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Dashboard />
            </div>
          }
        />
        <Route
          path='/register'
          element={
            <div>
              <Register />
            </div>
          }
        />
        <Route path='/landing' element={<Landing />} />
        <Route
          path='*'
          element={
            <h1>
              <Error />
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
