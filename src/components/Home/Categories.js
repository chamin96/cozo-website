import React, { useEffect, useState } from 'react';
import { getCategories } from '../../api/action/ProductAction';

export const Categories = props => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        getCategories().then((res) => {
            if (res.data.categories) {
                setCategories(res.data.categories)
                setSubCategories(res.data.categories[0].sub_category);
            }
        })
    }, [])

    const handleCategories = data => {
        setSubCategories(data)
    }

    const   handleFilter = () => {};

    const renderCategories = data => {
        if (data != undefined) {
            return data.map((item, key) => {
                return(
                    <div className="col-lg-2 col-md-6 align-items-stretch h-middle" onClick={() => handleCategories(item.sub_category)}>
                    {/* <i className="icon icon-bedroom category-icons"></i> */}
                    <img src={item.image} />
                    <div className="category-caption active">{item.name}</div>
                  </div>
                )
            })
        }
    }

    const renderSubCategories = data => {
        if (data != undefined) {
            return data.map(element => {
                return(
                <li className="list-item active">
                    <a>{element}</a>
                </li>
                )
            })
        }
    }

    return (
        <section id="category" className="category">
        <div className="container">
          <div className="section-title layout-container full-width">
            <div className="category-header layout-col">
              Browse by Category
            </div>
            <div className="layout-col mr-auto"></div>
            <div className="layout-col see-all-text">See All</div>
          </div>

          <div className="row">
              {renderCategories(categories)}
          </div>

          <div className="category-separator"></div>

          <div className="layout-container full-width">
            <div className="layout-col">
              <nav className="nav-menu d-lg-block category-tabs">
                <ul id="item-category">
                    {renderSubCategories(subCategories)}
                </ul>
              </nav>
            </div>
            <div className="layout-col mr-auto"></div>
            <button
              className="layout-col filters-btn pos-rel"
              onClick={handleFilter}>
              <i className="icon icon-filters pos-abs filter-pos"></i>
              <span className="filter-text">Filters</span>
            </button>
          </div>

          <div className="category-separator"></div>
        </div>
      </section>
    )
}