import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import './App.css';

function App() {
  return (
    <div className="container">
      {/* <Menu defaultIndex={'0'} mode="horizontal">
        <MenuItem>Multicam</MenuItem>
        <MenuItem>Multicam Black</MenuItem>
        <MenuItem>Mutlicam Tropic</MenuItem>
        <SubMenu title="Company">
          <MenuItem>Crye Precision</MenuItem>
          <MenuItem>Black Hawk</MenuItem>
          <MenuItem>Qilo Tactical</MenuItem>
        </SubMenu>
        <MenuItem>Mutlicam Alpine</MenuItem>
      </Menu> */}

      <Menu defaultIndex={'0'} mode="horizontal">
        <MenuItem>Multicam</MenuItem>
        <MenuItem>Multicam Black</MenuItem>
        <MenuItem>Mutlicam Tropic</MenuItem>
        <SubMenu title="Company">
          <MenuItem>Crye Precision</MenuItem>
          <MenuItem>Black Hawk</MenuItem>
          <MenuItem>Qilo Tactical</MenuItem>
        </SubMenu>
        <MenuItem>Mutlicam Alpine</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
