import React, { FunctionComponent, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from "./menuItem";


export interface SubMenuProps {
    index?: string;
    disabled?: boolean;
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, disabled, title, className, children } = props;

    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false

    const [menuOpen, setOpen] = useState(isOpened);


    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };

    const renderChildren = () => {
        const subMenuClasses = classNames('MC-submenu', {
            'menu-opened': menuOpen,
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.ReactElement<MenuItemProps, FunctionComponent<MenuItemProps>>;
            if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
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
