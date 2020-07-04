import React, { Component } from "react";
import FormContext from "./context";
class Form extends Component {
  constructor(props) {
    super(props);
    this.store = {};
    this.contextMap = new Map();
    this.errCbArr = [];
  }
  setContextMap = ({ name, value }) => {
    if (!this.contextMap.has(name)) {
      this.contextMap.set(name, []);
    }
    this.contextMap.get(name).push(value);
  };
  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    Object.keys(newStore).forEach((ele) => {
      if (newStore[ele] === undefined) return;
      this.contextMap.get(ele).forEach((cb) => {
        cb();
      });
    });
  };
  getFieldsValue = () => {
    return this.store;
  };
  getFieldValue = (storeName) => {
    return this.store[storeName];
  };
  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { onFinish, onFinishFailed } = this.props;
    const errArr = [];
    this.errCbArr.forEach((errCb) => {
      if (errCb() !== undefined) {
        errArr.push(errCb());
      }
    });
    console.log(errArr);
    if (errArr.length === 0) {
      onFinish && onFinish(this.store);
    } else {
      onFinishFailed && onFinishFailed(errArr);
    }
  };
  handleReset = (e) => {
    this.store = {};
    this.contextMap.forEach((arr) => {
      arr.forEach((cb) => {
        cb();
      });
    });
  };
  setErrCb = (errCb) => {
    this.errCbArr.push(errCb);
  };
  render() {
    const {
      props: { children },
      setFieldsValue,
      getFieldsValue,
      getFieldValue,
      setContextMap,
      setErrCb,
    } = this;
    console.log(children, "children");
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <FormContext.Provider
          value={{
            setFieldsValue,
            getFieldsValue,
            getFieldValue,
            setContextMap,
            setErrCb,
          }}
        >
          {children}
        </FormContext.Provider>
      </form>
    );
  }
}

export default Form;
