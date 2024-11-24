import { Routes, Route, BrowserRouter } from "react-router-dom"
import { malhafti } from "../api/malhafti"
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Navbar from "./navbar.jsx"
import Home from "./Home.jsx"
import Footer from "./footer.jsx"
import Malhaf from "./malhaf.jsx"
export default function Malhfa(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index path="/" element={<Home malhafti={malhafti.malhafti} />}/>
      <Route path="/Malhaf" element={<Malhaf malhafti={malhafti.malhafti}/> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}