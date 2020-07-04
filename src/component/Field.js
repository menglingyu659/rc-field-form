import React, { Component } from "react";
import FormContext from "./context";

export default class Field extends Component {
  static contextType = FormContext;
  componentDidMount = () => {
    const { setFieldsValue, setContextMap, setErrCb } = this.context;
    const { name } = this.props;
    if (name) {
      setFieldsValue({ [name]: undefined });
      setContextMap({
        name,
        value: this.update,
      });
      setErrCb(this.errCb);
    }
  };
  errCb = () => {
    return this.err;
  };
  update = () => {
    this.forceUpdate();
  };
  validator = (value) => {
    const { rules: [rule] = [], name } = this.props;
    if (!rule || !name) return;
    if (rule["required"] && [undefined, ""].includes(value)) {
      this.err = { name, message: rule.message };
    } else {
      this.err = undefined;
    }
  };
  controlled = () => {
    const { name } = this.props;
    const { setFieldsValue, getFieldValue } = this.context;
    console.log();
    this.validator(getFieldValue(name));
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        setFieldsValue({ [name]: e.target.value });
      },
    };
  };
  render() {
    console.log(this.props, "props");
    const { children } = this.props;
    return <div>{React.cloneElement(children, this.controlled())}</div>;
  }
}
