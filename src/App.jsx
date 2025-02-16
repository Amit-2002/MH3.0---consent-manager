
import Screen1 from "./components/screen1/Screen1"
import Screen2 from "./components/screen2/Screen2"
import SideNav from "./components/side-nav/SideNav"
import SideOptions from "./components/side-options/SideOptions"

function App() {
  return (
    <div className="page">
      <SideNav />
      <SideOptions />
      {/* <Screen1/> */}
      {/* <Screen2 /> */}
    </div>
  )
}

export default App