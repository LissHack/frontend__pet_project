import React from 'react';
import cl from './Loader.module.css'
const Loader = () => {
    return (
        <div className={cl.loader}>
            Загрузка...
        </div>
    );
};

export default Loader;