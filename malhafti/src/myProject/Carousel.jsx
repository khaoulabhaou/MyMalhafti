import React from 'react';
import * as picture from "../assets/images/slider";


export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" style={{ height: "100%" }}>
        <div className="carousel-item active">
          <img
            src={picture.pic8}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={picture.pic8}
            className="d-block w-100"
            alt="..."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={picture.pic8}
            alt="..."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
