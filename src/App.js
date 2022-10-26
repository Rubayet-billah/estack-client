import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/UserContext';
import { routes } from './Routes/routes';

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div data-theme={dark ? 'cupcake' : 'dark'}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
