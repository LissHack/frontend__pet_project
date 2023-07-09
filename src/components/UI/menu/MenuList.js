import React from 'react';
import cl from './MenuList.module.css'

const MenuList = () => {
    const [startAnimate, setStartAnimate] = React.useState(false);
    const [highlightTopPosition, setStateHighlightTopPosition] = React.useState(0);
    const [currCount, setCurrCount] = React.useState(0);

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
                    href="#"
                    onClick={() => onClickTab(0)}
                >
          <span className={currCount === 0 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Главная
          </span>
                </a>
                <a
                    className={currCount === 1 && cl.active}
                    href="#"
                    onClick={() => onClickTab(1)}
                >
          <span className={currCount === 1 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Новости
          </span>
                </a>
                <a
                    className={currCount === 2 && cl.active}
                    href="/order/"
                    onClick={() => onClickTab(2)}
                >
          <span className={currCount === 2 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Заказ
          </span>
                </a>
                <a
                    className={currCount === 3 && cl.active}
                    href="#"
                    onClick={() => onClickTab(3)}
                >
          <span className={currCount === 3 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Заказы
          </span>
                </a>
                <a
                    className={currCount === 4 && cl.active}
                    href="#"
                    onClick={() => onClickTab(4)}
                >
          <span className={currCount === 4 && 'cl.text-active'}>
            <i className="fas fa-arrow-right"></i> Чат
          </span>
                </a>
            </div>
        </div>
    );
};

export default MenuList;