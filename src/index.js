import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from './Pages/Home.js';
import Events from './Pages/Events.js';
import Donate from './Pages/Donate.js';
import Mission from './Pages/Mission.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Mission' element={<Mission/>}/>
      <Route path="Donate" element={<Donate />} />
      <Route path="Events" element={<Events />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);