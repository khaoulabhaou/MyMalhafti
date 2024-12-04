import { Link } from "react-router-dom"

export default function Footer(){
    return (
<div>
  <footer className="text-center text-dark nav-link bg-light">
    <div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/AboutPage" className="text-dark nav-link">عن المتجر</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/" className="text-dark nav-link">الصفحة الرئيسية</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/HelpPage" className="text-dark nav-link"> مركز المساعدة</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link to="/ContactPage" className="text-dark nav-link">الاتصال</Link>
            </h6>
          </div>
        </div>
      </section>
      <hr  />
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>ملحفتي</p>
          </div>
        </div>
      </section>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "#f8f9fa"}}
         >
      © 2024 Copyright
      <Link className="text-dark nav-link" to="/"
         >Malhafti.com</Link>
    </div>
  </footer>
</div>
)}