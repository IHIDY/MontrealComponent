import Button from "./components/Button/button"
function App() {
  return (
    <>
      <Button> Hello </Button>
      <br />
      <Button btnType="primary" size="large">Just Beat it!</Button>
      <Button btnType="danger" size="small">Hello World</Button>
      <Button btnType="link">Google Search</Button>
      <Button btnType="link" disabled>Baidu Search</Button>

    </>
  )
}

export default App
