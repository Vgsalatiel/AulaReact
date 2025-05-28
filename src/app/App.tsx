import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
