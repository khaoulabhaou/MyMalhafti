import { Link } from "react-router-dom"

export default function Footer(){
    return (
<div className="container">
  <footer className="text-center text-white nav-link" style={{backgroundColor:"#6c757d"}}>
    <div className="container">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link href="#!" className="text-white nav-link">عن المتجر</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link href="#!" className="text-white nav-link">القائمة</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link href="#!" className="text-white nav-link">الصفحة الرئيسية</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link href="#!" className="text-white nav-link">المساعدة</Link>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <Link href="#!" className="text-white nav-link">الاتصال</Link>
            </h6>
          </div>
        </div>
      </section>
      <hr  />
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>my store </p>
          </div>
        </div>
      </section>
      {/* <section className="text-center">
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-facebook-f">a</i>
        </Link>
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-twitter">b</i>
        </Link>
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-google">c</i>
        </Link>
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-instagram">d</i>
        </Link>
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-linkedin">e</i>
        </Link>
        <Link href="" className="text-white nav-link me-4">
          <i className="fab fa-github">f</i>
        </Link>
      </section> */}
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2020 Copyright
      <Link className="text-white nav-link" href="https://mdbootstrap.com/"
         >Malhafti.com</Link>
    </div>
  </footer>
</div>
)}