/*
 * @Author: YX
 * @Date: 2019-08-09 10:50:38
 * @LastEditors: Song
 * @LastEditTime: 2020-06-17 14:30:38
 * @Description: 
 */ 
import { Platform } from "react-native";

let Modal;

if (Platform.OS !== 'web') {
  Modal = require('react-native').Modal;
} else {
  Modal = require('./WebModal').default;
}

export default Modal;