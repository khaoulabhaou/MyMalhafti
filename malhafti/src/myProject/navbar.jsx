import { Link } from "react-router-dom";
// import Recherche from "./recherche";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">ملحفتي</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">الصفحة الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link to="/Malhaf" className="nav-link">الملحف</Link>
            </li>
            <li className="nav-item">
              <Link to="/Rambayat" className="nav-link">الرمبي</Link>
            </li>
            <li className="nav-item">
              <Link to="/Bodiyat" className="nav-link">البوديات</Link>
            </li>
            <li className="nav-item">
              <Link to="/n3ail" className="nav-link">النعايل</Link>
            </li>
            <li className="nav-item">
              <Link to="/sikan" className="nav-link">الصيكان</Link>
            </li>
            <li className="nav-item">
              <Link to="/dyar" className="nav-link">الديار</Link>
            </li>
            <li className="nav-item">
          <Link className="nav-link" to="/panier">السلة</Link>
        </li>
          </ul> 
          {/* <Recherche /> */}
        </div>
      </div>
    </nav>
  );
}
