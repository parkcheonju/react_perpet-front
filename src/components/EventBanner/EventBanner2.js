import React from "react";
import { Link } from "react-router-dom";
import "./EventBanner.css";

function EventBanner2({ img, category }) {
  return (
    <div className='eventBanner_container'>
      <div className='eventBanner'>
        <Link to={`products/category/${category}`}>
          <img src={img} alt={img}/>
        </Link>
      </div>
    </div>
  );
}

export default EventBanner2;
