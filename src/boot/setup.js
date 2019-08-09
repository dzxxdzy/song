/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 11:39:07
 * @LastEditTime: 2019-08-09 09:25:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from "react";
import { StyleProvider  } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";


export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
