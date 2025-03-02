import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: string) => void;
    defaultOpenSubMenus?: string[];
    children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode = 'horizontal', style, children, defaultIndex = 0 } = props;

    const classes = classNames("viking-menu", className, {
        "menu-vertical": mode === "vertical",
    });

    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    );
};

export default Menu;