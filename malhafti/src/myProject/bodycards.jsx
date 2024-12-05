import React from "react";
import * as pictures from "../assets/images/slider";
import "./style.css";

export default function Bodycards() {
  return (<>

    <div className="container py-5">

      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center">
          <blockquote className="quote">
            "Clothing is the first expression of culture, a window to traditions."
          </blockquote>
        </div>
      </div>


      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic77} alt="Card 1" />
              <h5 className="card-title">متنوع</h5>
              <p>ملحف متنوع من الخامة و الالوان</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic3} alt="Card 2" />
              <h5 className="card-title">أصلي</h5>
              <p>ماركات عالمية أصلية</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic4} alt="Card 3" />
              <h5 className="card-title">مضمون</h5>
              <p>ديار مضمون الجودة </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic6} alt="Card 1" />
              <h5 className="card-title">ترند</h5>
              <p>الجديد يتوفر في أقل وقت</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic9} alt="Card 2" />
              <h5 className="card-title">خامة</h5>
              <p>صيكان ذو خامة و جودة عالية</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card category-card">
            <div className="card-body">
              <img src={pictures.pic10} alt="Card 3" />
              <h5 className="card-title">خالص</h5>
              <p>ذهب الديار خالص من المعادن</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
