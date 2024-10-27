import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Latest from "./Components/Latest";
import Nav from "./Components/Nav";
import News from "./Components/News";

function App() {
  // document.body.style.overflow="hidden"
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Latest/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
