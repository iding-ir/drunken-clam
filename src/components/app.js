import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Swipeable } from "react-swipeable";

import "./app.scss";
import Header from "./header";
import Tabs from "./tabs";
import Modal from "./modal";
import { fetchData } from "../actions/data";
import { changeTab } from "../actions/tab";
import { openModal, closeModal, selectBeer } from "../actions/modal";
import tabs from "../config/tabs";

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;

    tabs.forEach((tab) => {
      fetchData(tab.query);
    });
  }

  render() {
    const {
      tab,
      data,
      modal,
      changeTab,
      openModal,
      closeModal,
      selectBeer,
    } = this.props;

    return (
      <Swipeable
        onSwipedLeft={() => {
          const newTab = tab + 1 >= tabs.length ? tab : tab + 1;

          changeTab(newTab);
        }}
        onSwipedRight={() => {
          const newTab = tab - 1 >= 0 ? tab - 1 : tab;

          changeTab(newTab);
        }}
      >
        <div className="app">
          <Header />

          <Tabs
            currentTab={tab}
            data={data}
            changeTab={changeTab}
            openModal={openModal}
            selectBeer={selectBeer}
          />

          <Modal
            visible={modal.visible}
            item={modal.item}
            closeModal={closeModal}
          />
        </div>
      </Swipeable>
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
      selectBeer,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
