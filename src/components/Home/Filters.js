import React, { useState } from "react";
import { Slider, Select } from "antd";

const { Option } = Select;
const colorList = [
  { _id: "red", value: "Red" },
  { _id: "blue", value: "Blue" },
  { _id: "black", value: "Black" },
  { _id: "green", value: "Green" },
];

export const Filters = (props) => {
  const { categoriesList, vendorList, handleFilters } = props;
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedShop, setSelectedShop] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedRange, setSelectedRange] = useState([]);

  const onChange = (value) => {};
  const onAfterChange = (value) => {
    setSelectedRange(value);
  };

  const onChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onChangeShop = (event) => {
    setSelectedColor(event.target.value);
  };

  const onChangeColor = (event) => {
    setSelectedShop(event.target.value);
  };

  const handleSearch = () =>{
      let obj = {};

      if (selectedCategory) {
          obj.category = selectedCategory
      }

      if (selectedShop) {
        obj.vendor = selectedShop
    }

    if (selectedColor) {
        obj.color = selectedColor
    }

    if (selectedRange) {
        obj.price_from = selectedRange[0];
        obj.price_to = selectedRange[1];
    }
    handleFilters(obj);
  }

  return (
    <div className="container aos-init aos-animate pad-l-b">
      <div className="row">
        <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">Category</div>
          <div className="dropdown">
            <select
              className="form-select form-control dropdown-toggle"
              aria-label="Default select example"
              onChange={onChangeCategory}>
              {categoriesList.map((item, key) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">Shop</div>
          <div className="dropdown">
            <select
              className="form-select form-control dropdown-toggle"
              aria-label="Default select example"
              onChange={onChangeShop}>
              {vendorList.map((item, key) => {
                return (
                  <option value={item._id}>{item.name_of_business}</option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">Color</div>
          <div className="dropdown">
            <select
              className="form-select form-control dropdown-toggle"
              aria-label="Default select example"
              onChange={onChangeColor}>
              {colorList.map((item, key) => {
                return <option value={item._id}>{item.value}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">Price Range</div>
          <Slider
            range
            defaultValue={[0, 1000]}
            onChange={onChange}
            onAfterChange={onAfterChange}
          />
        </div>
        {/* <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">Filter by AR</div>
          <div className="icon icon-AR"></div>
        </div> */}
        <div className="col-lg-2 col-md-6 align-items-stretch h-middle">
          <div className="bold pad-s-b">
              <button type="button" className="btn btn-primary" onClick={handleSearch}> Search </button>
          </div>
        </div>
      </div>
    </div>
  );
};
