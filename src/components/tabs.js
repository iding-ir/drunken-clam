import React from "react";
import * as classnames from "classnames";

import "./tabs.scss";
import tabs from "../config/tabs";

const Navigation = (props) => {
  const { currentTab, data, changeTab, openModal, selectBeer } = props;

  const beers = data[currentTab] || [];

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => {
          const { display } = tab;

          const tabClasses = classnames("", {
            active: currentTab === index,
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
        {beers.map((beer, index) => {
          const { name, image_url } = beer;

          const backgroundImage = `url("${image_url}")`;

          const onClick = (beer) => {
            selectBeer(beer);

            openModal();
          };

          return (
            <li key={index} onClick={() => onClick(beer)}>
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
