import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {adminRouters, storageRouters, userRouters} from "../routes";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user, admin, storage} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && userRouters.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            )}
            {storage.isAuth && storageRouters.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            )}
            {admin.isAuth && adminRouters.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component/>}
                />
            )}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;