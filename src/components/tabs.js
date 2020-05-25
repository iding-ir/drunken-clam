import React from "react";
import * as classnames from "classnames";

import "./tabs.css";
import tabsConfig from "../config/tabs";

const Navigation = (props) => {
  const { tabs, changeTab } = props;

  return (
    <ul className="nav nav-tabs">
      {tabsConfig.map((tab, index) => {
        const { display } = tab;

        const tabClasses = classnames("", {
          active: tabs.current === index,
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
  );
};

export default Navigation;
