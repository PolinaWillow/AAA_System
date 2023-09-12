import React, { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserState from './mobx/UserState';

//Передача состояний пользователя
export const Context = createContext(null)//Что-то вроде глобального хранилиза

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{user: new UserState()}}>
     <App />
    </Context.Provider>
   
  </React.StrictMode>
);
