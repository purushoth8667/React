import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Adddata from "./Adddata";
import Fetch from "./Fetch";
import Addproduct from "./Addproduct";
const App = () => {
  return <Router>
    <div>
      <Routes>
      {/* <Route path="/" element={<Adddata/>}/> */}
      <Route path="/fetch" element={<Fetch/>}/>
      <Route path="/add" element={<Addproduct/>}/>
      </Routes>
    </div>
  </Router>
}
export default App