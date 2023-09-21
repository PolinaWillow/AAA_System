import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import 'bootstrap'
import { useAuth } from './hooks/auth.hook';
import {AuthContext} from './context/AuthContext'

function App() {
  const {token, login, logout, userId, userLevel, userLogin} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuth, userLevel, userLogin
    }}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
    
  );
}

export default App;
