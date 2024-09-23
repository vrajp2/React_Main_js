import { Router } from "react-router-dom";
import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar"

import 'bootstrap/dist/css/bootstrap.min.css';
import Allroutes from "./Allroutes";
function App() {
  

  return (
    <>
    <Navbar />
    
    
      <Allroutes/>
    
    </>
  )
}

export default App
