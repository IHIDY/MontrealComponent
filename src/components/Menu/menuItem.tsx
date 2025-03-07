/* eslint-disable react/prop-types */
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { useContext } from "react";

export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext);

    const classes = classNames("menu-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index
    });

    const handleClick = () => {
        if (context.onSelect && !disabled && typeof index === 'number') {
            context.onSelect(index);
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
