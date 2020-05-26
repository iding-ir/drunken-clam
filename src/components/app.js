import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Swipeable } from "react-swipeable";

import "./app.scss";
import Header from "./header";
import Tabs from "./tabs";
import Modal from "./modal";
import Cart from "./cart";
import { fetchData } from "../actions/data";
import { changeTab } from "../actions/tab";
import { openModal, closeModal, selectBeer } from "../actions/modal";
import {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
} from "../actions/cart";
import { addPage } from "../actions/pages";
import tabs from "../config/tabs";

class App extends Component {
  componentDidMount() {
    const { fetchData, addPage } = this.props;

    tabs.forEach((tab, index) => {
      fetchData(index, 1, tab.query);

      addPage(index);
    });
  }

  render() {
    const {
      tab,
      data,
      pages,
      modal,
      cart,
      fetchData,
      changeTab,
      openModal,
      closeModal,
      selectBeer,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      addPage,
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
        <div className="app" onClick={() => closeCart()}>
          <Header />

          <Tabs
            currentTab={tab}
            data={data}
            pages={pages}
            fetchData={fetchData}
            changeTab={changeTab}
            openModal={openModal}
            selectBeer={selectBeer}
            addPage={addPage}
          />

          <Modal
            visible={modal.visible}
            item={modal.item}
            closeModal={closeModal}
            addToCart={addToCart}
            openCart={openCart}
          />

          <Cart
            cart={cart}
            openCart={openCart}
            closeCart={closeCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
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
  cart: state.cart,
  pages: state.pages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
      addPage,
      changeTab,
      openModal,
      closeModal,
      selectBeer,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
