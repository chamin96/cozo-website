import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api/action/ProductAction";

export const SubHeader = (props) => {
  const { searchCategory, categories } = props;
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    if (categories) {
      handleCategories(categories)
    }
  }, [categories]);

  const handleCategories = (data) => {
    let newArr = [];
    data.forEach((element) => {
      newArr.push(element.name);
    });
    setCategoriesArr(newArr);
  };

  return (
    <section id="hero">
      <div className="container position-relative">
        <nav className="nav-menu nav-menu-2 d-lg-block">
          <ul>
            <li className="drop-down">
              <img src="assets/icons/shop by category.svg" />
              <a>Shop by category</a>
              <ul className="shop-by-category">
                {categoriesArr.map((element) => {
                  return (
                    <li
                    data-val="DE"
                      value={element}
                      onClick={(e) => {
                        setSelectedCategory(categoriesArr[e.target.value]);
                        searchCategory(categoriesArr[e.target.value]);
                      }
                      }
                      style={{ cursor: "pointer", fontWeight: '10px' }}
                      >
                      {element}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="hide-li">
              <img src="assets/icons/connect-to-professionals.svg" />
              <Link
                to={{
                  pathname: "/",
                  state: "professional",
                }}>
                Connect to a professional
              </Link>
            </li>
            <li className="responsive-icon">
              <Link
                to={{
                  pathname: "/",
                  state: "professional",
                }}>
                <i className="icon icon-connect-professionals"></i>
              </Link>
            </li>
            <li className="mr-auto"></li>
            <li className="nav-menu-2-item-1">
              <Link to="/join-as-vendor">Join as a vendor</Link>
            </li>
            <li className="responsive-icon">
              <a href="join-as-vendors.html">
                <i className="icon icon-vendor"></i>
              </a>
            </li>
            <li className="nav-menu-2-item-2">
              <Link to="/join-as-professional">Join as a professional</Link>
            </li>
            <li className="responsive-icon">
              <a href="join-as-vendors.html">
                <i className="icon icon-professional"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
