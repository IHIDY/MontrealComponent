// import Button from "./components/Button/button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <>
      <Menu defaultIndex={0} mode="vertical">
        <MenuItem index={0} >
          Multicam
        </MenuItem>
        <MenuItem index={1}>
          Multicam Black
        </MenuItem>
        <MenuItem index={2}>
          Mutlicam Tropic
        </MenuItem>
        <MenuItem index={3}>
          Mutlicam Arid
        </MenuItem>
        <MenuItem index={4}>
          Mutlicam Alpine
        </MenuItem>
      </Menu>
    </>
  )
}

export default App
