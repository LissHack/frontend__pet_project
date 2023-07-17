import React, {useState} from 'react';
import cl from "./MenuList.module.css";
import {observer} from "mobx-react-lite";

const MenuListAdmin = observer(() => {
    const [useAnimate, setUseAnimate] = useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = useState(0);
    const [currCount, setCurrCount] = useState(0);

    const onClickTab = (count) => {
        setUseAnimate(false);
        setCurrCount(count);
        setStateHighlightTopPosition(count * 52);

        setTimeout(() => {
            setUseAnimate(true);
        }, 100);
    };

    React.useEffect(() => {
        setTimeout(() => {
            setUseAnimate(true);
        }, 500);

        return () => {
        };
    }, []);

    return (
        <div className={cl.container}>
            <div className={cl.sidebar}>
                <div
                    style={{top: `${highlightTopPosition}px`}}
                    className={`cl.sidebar__highlight ${
                        useAnimate && "cl.sidebar__highlight__animate"
                    }`}
                ></div>
                <a
                    className={currCount === 0 && cl.active}
                    href="/Admin"
                    onClick={() => onClickTab(0)}
                >
          <span className={currCount === 0 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Главная
          </span>
                </a>
                <a
                    className={currCount === 1 && cl.active}
                    href="src/components/menu#"
                    onClick={() => onClickTab(1)}
                >
          <span className={currCount === 1 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Новости
          </span>
                </a>
                <a
                    className={currCount === 2 && cl.active}
                    href="src/components/menu#"
                    onClick={() => onClickTab(2)}
                >
          <span className={currCount === 2 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Пользователи
          </span>
                </a>

            </div>
        </div>
    );
});

export default MenuListAdmin;