import React, {useState} from 'react';
import cl from './MenuList.module.css'
import {observer} from "mobx-react-lite";


const MenuListStorage = observer(() => {
    const [startAnimate, setStartAnimate] = useState(false)
    const [highlightTopPosition, setStateHighlightTopPosition] = useState(0)
    const [currCount, setCurrCount] = useState(0)

    const onClickTab = (count) => {
        setStartAnimate(false);
        setCurrCount(count);
        setStateHighlightTopPosition(count * 52);

        setTimeout(() => {
            setStartAnimate(true);
        }, 100);
    };

    React.useEffect(() => {
        setTimeout(() => {
            setStartAnimate(true);
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
                        startAnimate && "cl.sidebar__highlight__animate"
                    }`}
                ></div>
                <a
                    className={currCount === 0 && cl.active}
                    href="/user"
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
                    href="/device/"
                    onClick={() => onClickTab(2)}
                >
          <span className={currCount === 2 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Устройства
          </span>
                </a>
                <a
                    className={currCount === 3 && cl.active}
                    href="/order/"
                    onClick={() => onClickTab(3)}
                >
          <span className={currCount === 3 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Заказ
          </span>
                </a>
                <a
                    className={currCount === 4 && cl.active}
                    href="src/components/menu#"
                    onClick={() => onClickTab(4)}
                >
          <span className={currCount === 4 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Заказы
          </span>
                </a>
                <a
                    className={currCount === 5 && cl.active}
                    href="src/components/menu#"
                    onClick={() => onClickTab(5)}
                >
          <span className={currCount === 5 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Чат
          </span>
                </a>
            </div>
        </div>
    );
});

export default MenuListStorage;