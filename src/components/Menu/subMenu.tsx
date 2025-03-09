import React, { FunctionComponent, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from "./menuItem";


export interface SubMenuProps {
    index?: number;
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    const [menuOpen, setOpen] = useState(false);
    const context = useContext(MenuContext)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    };

    const renderChildren = () => {
        const subMenuClasses = classNames('MC-submenu', {
            'menu-opened': menuOpen,
        })
        const childrenComponent = React.Children.map(children, (child) => {
            const childElement = child as React.ReactElement<MenuItemProps, FunctionComponent<MenuItemProps>>;
            if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu') {
                return childElement;
            } else {
                console.error("Warning SubMenu has a child which is not a MenuItem");
            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }

    return (
        <li key={index} className={classes}>
            <div className="submenu-title" onClick={handleClick}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
