import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Screen1 from "./components/screen1/Screen1";
import Screen2 from "./components/screen2/Screen2";
import Screen3 from "./components/screen3/Screen3";
import SideNav from "./components/side-nav/SideNav";
import SideOptions from "./components/side-options/SideOptions";

function App() {
  return (
    <div className="page">
      <SideNav />
      <SideOptions />

      {/* <Screen1/> */}
      {/* <Screen2 /> */}
      {/* <Screen3 /> */}

      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
      </Routes>
    </div>
  );
}

export default App;
