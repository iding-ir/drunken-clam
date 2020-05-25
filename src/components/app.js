import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.scss";
import Header from "./header";
import Tabs from "./tabs";
import { fetchData } from "../actions/data";
import { changeTab } from "../actions/tabs";
import tabsConfig from "../config/tabs";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    tabsConfig.forEach((tab) => {
      fetchData(tab.query);
    });
  }

  render() {
    const { tabs, data, changeTab } = this.props;

    return (
      <div>
        <Header />

        <Tabs tabs={tabs} data={data} changeTab={changeTab} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tabs: state.tabs,
  data: state.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      changeTab,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
