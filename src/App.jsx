import React from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import Card from "./cards";
import Cardcontextcomponent from "./context/cardcontextcomponent";
function App() {
  return <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cardcontextcomponent><Card/></Cardcontextcomponent>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </>
}

export default App;
