import { Link } from "react-router-dom";

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
              <Link to="/rambayat" className="nav-link">الرمبي</Link>
            </li>
            <li className="nav-item">
              <Link to="/podiyat" className="nav-link">البوديات</Link>
            </li>
            <li className="nav-item">
              <Link to="/nail" className="nav-link">النعايل</Link>
            </li>
            <li className="nav-item">
              <Link to="/saikan" className="nav-link">الصيكان</Link>
            </li>
            <li className="nav-item">
              <Link to="/diyar" className="nav-link">الديار</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
