import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import "./Categories.css";
import { fetchPhotos } from "../../../store/photos-actions";

const categoriesList = [
  { category: "nature", qty: 7 },
  { category: "architecture", qty: 8 },
  { category: "technology", qty: 6 },
  { category: "travel", qty: 9 },
  { category: "people", qty: 7 },
  { category: "animals", qty: 10 },
  { category: "history", qty: 7 },
  { category: "film", qty: 9 },
  { category: "arts", qty: 10 },
];

const Categories = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.photos.category);

  const fetchPhotosByCategory = (category, qty) => {
    dispatch(fetchPhotos(category, qty));
  };

  return (
    <div className="categories">
      <p className="categories__title">Categories</p>
      <ul className="categories__list">
        {categoriesList.map((c) => (
          <li
            onClick={() => {
              fetchPhotosByCategory(c.category, c.qty);
            }}
            className={`list-item ${
              currentCategory === c.category ? "active" : ""
            }`}
            key={nanoid(10)}
          >
            {c.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
