import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import Loader from "./components/UI/Loader/Loader";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <Loader/>
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
