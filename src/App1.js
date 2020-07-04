import React, { Component } from "react";
import { Input, Button } from "antd";
// import { Form } from "antd";

import { Form, Field as FormItem } from "./component";

// const FormItem = Form.Item;
const nameRules = { required: true, message: "请输⼊姓名！" };
export default class App1 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "mly",
  //   };
  //   console.log("const", this.forceUpdate);
  // }
  formRef = React.createRef();
  componentDidMount() {
    this.formRef.current.setFieldsValue({ name: "default", password: "ps" });

    console.log(this.formRef.current.getFieldsValue(), "s");
    console.log(this.formRef.current, "d");
    console.log(this.formRef.current, "d");
  }
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };
  onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  render() {
    return (
      <div>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} onReset={this.onReset}>
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </FormItem>
          <FormItem label="密码" name="password" rules={[{ required: true, message: "as" }]}>
            <Input placeholder="password input placeholder" />
          </FormItem>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
