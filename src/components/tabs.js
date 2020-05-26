import React from "react";
import * as classnames from "classnames";

import "./tabs.scss";
import tabs from "../config/tabs";

const Navigation = (props) => {
  const {
    currentTab,
    pages,
    data,
    fetchData,
    changeTab,
    openModal,
    selectBeer,
    addPage,
  } = props;

  const beers = data[currentTab] || [];

  const onClick = () => {
    addPage(currentTab);

    fetchData(currentTab, pages[currentTab] + 1, tabs[currentTab].query);
  };

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

      <div className="beers">
        <ul>
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

        <div className="more" onClick={onClick}>
          Load more...
        </div>
      </div>
    </>
  );
};

export default Navigation;
