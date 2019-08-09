/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 11:41:13
 * @LastEditTime: 2019-08-09 09:10:34
 * @LastEditors: Please set LastEditors
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   width: null,
  //   height: null,
  //   backgroundColor: "#FFF"
  // },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingLeft: 15
  },
  iconText: {
    fontSize: 12
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center"
  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  },
  row: {
    paddingBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});