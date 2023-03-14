//import Pages
import Home from "./pages/Home";
import Results from "./pages/Results";

//import CSS assets
import './App.css';
import "./assets/css/components/inputs.css"
import "./assets/css/components/buttons.css"
import "./assets/css/components/images.css"
import "./assets/css/components/text.css"
import "./assets/css/layout/layout.css"
import "./assets/css/components/cards.css"

//React Router imports
import { Routes, Route } from "react-router-dom";

//Redux
import { useSelector } from 'react-redux'
import { RootState } from "./redux/store";

function App() {

  const routeGuardState = useSelector((state: RootState) => state.routeGuard.searched)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:keyword" element={routeGuardState ? <Results /> : <Home />} />
    </Routes>
  )
}

export default App;