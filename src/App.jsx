
import Screen1 from "./components/screen1/Screen1"
import SideNav from "./components/side-nav/SideNav"
import SideOptions from "./components/side-options/SideOptions"

function App() {
  return (
    <div className="page">
      <SideNav />
      <SideOptions />
      <Screen1/>

    </div>
  )
}

export default App