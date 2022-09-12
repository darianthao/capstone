import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import PSPage from "./components/pages/PSPage";
import DSLRPage from "./components/pages/DSLRPage";
import ActionCameraPage from "./components/pages/ActionCameraPage";
import HomePage from "./components/pages/HomePage";


export default function App() {
  return (

      <>
          <Routes>

              <Route path="/" element={<HomePage/>}/>
              <Route path="/DSLRPage" element={<DSLRPage/>}/>
              <Route path="/PSPage" element={<PSPage/>}/>
              <Route path="/ActionCameraPage" element={<ActionCameraPage/>}/>


          </Routes>
          </>
  );
}

