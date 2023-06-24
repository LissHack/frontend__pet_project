import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import cl from './Pages.module.css'

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = [1, 2, 3]

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className={cl.pagination__container}>
            {pages.map(page =>
                <button className={cl.pagination__btn}
                    key={page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </button>
            )}
        </Pagination>
    );
});

export default Pages;