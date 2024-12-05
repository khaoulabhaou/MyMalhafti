import React from "react";
import { Link } from "react-router-dom";
import { malhafti as x } from "../api/malhafti";

export default function CardNavigate({ categoryName }) {
  const categories = [];
  const categoryMap = new Map();

  x.malhafti.forEach((item) => {
    if (item.category === categoryName && !categoryMap.has(item.category)) {
      categoryMap.set(item.category, true);
      categories.push({
        name: item.category,
        image: item.image,
        route: `/${encodeURIComponent(item.path)}`,
      });
    }
  });

  return (
    <div className="container py-5">
      <div className="row g-4">
        {categories.map((category, index) => (
          <div className="col-md-4" key={index}>
            <Link to={category.route} className="card-link">
              <div id={`category-${index}`} className="card category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{category.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
