/*
 * @Author: YX
 * @Date: 2019-08-09 10:50:38
 * @LastEditors: Song
 * @LastEditTime: 2020-06-17 14:30:28
 * @Description: 
 */ 
// import Platform from "react-native-web/dist/exports/Platform";
import { Platform } from "react-native";
// import 'babel-polyfill';
Platform.OS = "ios";

require("./main");