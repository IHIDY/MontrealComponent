import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import { vi } from 'vitest'
import Menu, { MenuProps } from './Menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: vi.fn(),
    className: 'test'
};

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
};

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem> active </MenuItem>
            <MenuItem disabled> disabled </MenuItem>
            <MenuItem> xyz </MenuItem>
        </Menu>
    );
};


let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component in default(horizontal) mode', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('MC-menu test')
        expect(menuElement.querySelectorAll('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith()
    })
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup();
        const wrapper = render(generateMenu(testVerProps));
        const menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    });

})




