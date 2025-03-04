/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: number) => void
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
    defaultOpenSubMenus?: string[];
    children?: React.ReactNode;
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallBack;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode = 'horizontal', style, children, defaultIndex = 0, onSelect } = props;
    const [currentActive, setActive] = useState(defaultIndex)

    const classes = classNames("viking-menu", className, {
        "menu-vertical": mode === "vertical",
    });

    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick,
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    );
};

export default Menu;