import React from "react";
import StarRatings from "react-star-ratings";

function CourseCard(props) {
  const { id, title, author, image, price, rating, people } = props;
  return (
    <div className="course-container">
      <div className="img-wrapper">
        <img src={image} alt="course image" width="255.2px" height="145px" />
      </div>
      <div className="course-content">
        <div className="course-title">
          <h4 className="course-title">{title}</h4>
        </div>
        <div class="instructors">{author}</div>
        <div class="rating">
          {rating}
          {"\u00A0"}
          <span class="stars">
            <StarRatings // npm install --save react-star-ratings
              rating={rating}
              starRatedColor="rgb(229, 152, 25)"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            ></StarRatings>
          </span>
        </div>
        <div class="price">E£{price}</div>
      </div>
    </div>
  );
}

export default CourseCard;
