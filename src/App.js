import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/routes';

function App() {
  return (
    <div data-theme="dark">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
