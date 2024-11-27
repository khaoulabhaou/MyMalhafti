import { Routes, Route, BrowserRouter } from "react-router-dom"
import { malhafti } from "../api/malhafti"
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Navbar from "./navbar.jsx"
import Home from "./Home.jsx"
import Footer from "./footer.jsx"
import Malhaf from "./malhaf.jsx"
import Rambayat from "./rambayat.jsx"
import Bodiyat from "./bodiyat.jsx"
import Sikan from "./sikan.jsx"
import N3ail from "./n3ail.jsx"
import Dyar from "./dyar.jsx"
import NotFound from "./notfound.jsx"
import IdParam from "./idFinder.jsx"
export default function Malhfa(){
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index path="/" element={<Home malhafti={malhafti.malhafti} />}/>
      <Route path="/Malhaf" element={<Malhaf malhafti={malhafti.malhafti}/> } />
      <Route path="/Rambayat" element={<Rambayat malhafti={malhafti.malhafti}/> } />
      <Route path="/Bodiyat" element={<Bodiyat malhafti={malhafti.malhafti}/> } />
      <Route path="/Sikan" element={<Sikan malhafti={malhafti.malhafti}/> } />
      <Route path="/N3ail" element={<N3ail malhafti={malhafti.malhafti}/> } />
      <Route path="/Dyar" element={<Dyar malhafti={malhafti.malhafti}/> } />
      <Route path="/idFinder/:id" element={<IdParam malhafti={malhafti.malhafti}/> } />
      
      <Route path="*" element={<NotFound /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}