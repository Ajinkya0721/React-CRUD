import NavBar from "./Components/Layout/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import User from "./Components/Pages/User/Add";
import Add from "./Components/Pages/User/Add";
import Show from "./Components/Pages/User/Show";
import Update from "./Components/Pages/User/Update";
import Delete from "./Components/Pages/User/Delete";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/add" element={<Add />} />
          <Route path="/user/show" element={<Show />} />
          <Route path="/user/update/:userId" element={<Update />} />
          <Route path="/user/delete/:userId" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
