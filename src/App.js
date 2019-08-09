/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 10:39:34
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    List,
    ListItem,
    Content,
    Text,
    Picker,
    Form,
} from "native-base";

import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import Modal from 'modal-enhanced-react-native-web';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
// import 'babel-polyfill';
// const ReactNative = require("react-native");
// const Modal = require("./ModalComponent/Modal");

// ReactNative.Modal = Modal;

const datas = [
    {
        route: "BasicIcon",
        text: "Basic Icon"
    },
    {
        route: "Icons",
        text: "Icons"
    },
    {
        route: "PlatformSpecificIcon",
        text: "Platform Specific Icon"
    },
    {
        route: "IconFamily",
        text: "Icon Family"
    }
];
// toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。
// 这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。
// 而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
// Object.prototype.toString.call('') ;   // [object String]
// Object.prototype.toString.call(1) ;    // [object Number]
// Object.prototype.toString.call(true) ; // [object Boolean]
// Object.prototype.toString.call(Symbol()); //[object Symbol]
// Object.prototype.toString.call(undefined) ; // [object Undefined]
// Object.prototype.toString.call(null) ; // [object Null]
// Object.prototype.toString.call(new Function()) ; // [object Function]
// Object.prototype.toString.call(new Date()) ; // [object Date]
// Object.prototype.toString.call([]) ; // [object Array]
// Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
// Object.prototype.toString.call(new Error()) ; // [object Error]
// Object.prototype.toString.call(document) ; // [object HTMLDocument]
// Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
const isType = (obj, type) => {
    // if (obj.toString() === '[object Object]') return false;
    //判断数据类型的经典方法：
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Object':
            flag = typeString === '[object Object]'
            break;
        case 'Array':
            flag = typeString === '[object Array]'
            break;
        case 'Date':
            flag = typeString === '[object Date]'
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]'
            break;
        case 'String':
            flag = typeString === '[object String]'
            break;
        case 'Number':
            flag = typeString === '[object Number]'
            break;
        case 'Boolean':
            flag = typeString === '[object Boolean]'
            break;
        case 'Symbol':
            flag = typeString === '[object Symbol]'
            break;
        case 'Undefined':
            flag = typeString === '[object Undefined]'
            break;
        case 'Null':
            flag = typeString === '[object Null]'
            break;
        case 'Function':
            flag = typeString === '[object Function]'
            break;
        case 'Error':
            flag = typeString === '[object Error]'
            break;
        case 'HTMLDocument':
            flag = typeString === '[object HTMLDocument]'
            break;
        case 'global':
            flag = typeString === '[object global]'
            break;
        default:
            flag = false
            break;
    }
    return flag
}

console.log(isType({}, 'Object'))
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            visibleModal: null,
            isShow: false
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value,
        });
    }
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn React</a>
                </header>
            </div>
            {this._renderButton("Close", () => this.setState({ visibleModal: false }))}
        </View>
    );

    _handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y
        });
    };

    _handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => { this.setState({ isShow: true }) }}
                        >
                            <Icon type="Zocial" name="digg" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>react-native-web</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem button onPress={() => { }}
                            >
                                <Left>
                                    <Text>
                                        {data.text}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                                </Right>
                            </ListItem>}
                    />
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: 200 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                        <View>
                            {this._renderButton("Modal that can be closed on backdrop press", () =>
                                this.setState({ visibleModal: true })
                            )}
                            <Modal
                                isVisible={this.state.visibleModal}
                                onBackdropPress={() => this.setState({ visibleModal: false })}
                            >
                                {this._renderModalContent()}
                            </Modal>
                        </View>
                    </Form>

                </Content>
            </Container>

        );
    }

}
const styles = StyleSheet.create({
    load_box: {
        width: 100,
        height: 100,
        backgroundColor: '#0008',
        alignItems: 'center',
        marginLeft: SCREEN_WIDTH / 2 - 50,
        marginTop: SCREEN_HEIGHT / 2 - 50,
        borderRadius: 10
    },
    load_progress: {
        position: 'absolute',
        width: 100,
        height: 90
    },
    load_text: {
        marginTop: 70,
        color: 'white',
    }
})
export default App;
