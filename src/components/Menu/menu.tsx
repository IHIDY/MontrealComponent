/* eslint-disable react/prop-types */
import { FunctionComponent, createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
import React from "react";

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

    const classes = classNames("MC-menu", className, {
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

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.ReactElement<MenuItemProps, FunctionComponent<MenuItemProps>>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index
                })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component")
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

export default Menu;