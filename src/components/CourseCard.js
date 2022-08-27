import React from "react";
import StarRatings from "react-star-ratings";

function CourseCard(props) {
  const { id, title, author, image, price, rating, people } = props;
  return (
    <div className="course-container">
      <div className="img-wrapper">
        <img src={image} alt="course image" width="240px" height="135px" />
      </div>
      <div className="course-content">
        <div>
          <h4 className="course-title fnt-md">{title}</h4>
        </div>
        <div class="instructors fnt-xs">{author}</div>
        <div class="rating">
          <span className="star-rating-number fnt-sm">
            {rating}
            {"\u00A0"}
          </span>
          <span class="stars">
            <StarRatings // npm install --save react-star-ratings
              rating={rating}
              starRatedColor="rgb(229, 152, 25)"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="0px"
            ></StarRatings>
          </span>
          <span className="reviewers fnt-xs">({people})</span>
        </div>
        <div class="price">E£{price}</div>
      </div>
    </div>
  );
}

export default CourseCard;
