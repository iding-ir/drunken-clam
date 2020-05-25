import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.scss";
import Header from "./header";
import Tabs from "./tabs";
import { fetchData } from "../actions/data";
import { changeTab } from "../actions/tab";
import tabs from "../config/tabs";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    tabs.forEach((tab) => {
      fetchData(tab.query);
    });
  }

  render() {
    const { tab, data, changeTab } = this.props;

    return (
      <div>
        <Header />

        <Tabs tab={tab} data={data} changeTab={changeTab} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tab: state.tab,
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
