//import Pages
import Home from "./pages/Home";

//import CSS assets
import './App.css';
import "./assets/css/components/inputs.css"
import "./assets/css/components/buttons.css"
import "./assets/css/components/images.css"
import "./assets/css/components/text.css"
import "./assets/css/layout/layout.css"

//React Router imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
    </Routes>
  )
}

export default App;