import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import AdminStore from "./store/AdminStore";
import StoreStorage from "./store/StoreStorage";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        admin: new AdminStore(),
        storage: new StoreStorage(),
        device: new DeviceStore(),
    }}>
        <App/>
    </Context.Provider>
);

