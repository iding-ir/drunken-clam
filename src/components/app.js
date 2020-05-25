import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.scss";
import Header from "./header";
import Tabs from "./tabs";
import Modal from "./modal";
import { fetchData } from "../actions/data";
import { changeTab } from "../actions/tab";
import { openModal, closeModal } from "../actions/modal";
import tabs from "../config/tabs";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    tabs.forEach((tab) => {
      fetchData(tab.query);
    });
  }

  render() {
    const { tab, data, modal, changeTab } = this.props;

    return (
      <div>
        <Header />

        <Tabs currentTab={tab} data={data} changeTab={changeTab} />

        <Modal visible={modal} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tab: state.tab,
  data: state.data,
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      changeTab,
      openModal,
      closeModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
