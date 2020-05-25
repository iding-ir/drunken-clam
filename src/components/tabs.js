import React from "react";
import * as classnames from "classnames";

import "./tabs.scss";
import tabs from "../config/tabs";

const Navigation = (props) => {
  const { tab, data, changeTab } = props;

  const beers = data[tab] || [];

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => {
          const { display } = tab;

          const tabClasses = classnames("", {
            active: tab === index,
          });

          return (
            <li
              key={index}
              className={tabClasses}
              onClick={() => {
                changeTab(index);
              }}
            >
              {display}
            </li>
          );
        })}
      </ul>

      <ul className="beers">
        {beers.map((beer) => {
          const { name, image_url } = beer;

          const backgroundImage = `url("${image_url}")`;

          return (
            <li>
              <div className="image" style={{ backgroundImage }}></div>

              <div className="name">{name}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
