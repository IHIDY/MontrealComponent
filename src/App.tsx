import Button, { ButtonType, ButtonProps, ButtonSize } from "./components/Button/button"
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>

      <Button> Hello </Button>
      <br />
      <Button btnType={"primary"} size={"large"}></Button>
    </>
  )
}

export default App
