/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    ToolbarAndroid,
    View
} from 'react-native'

const icons = [require('./ic_action_1.png'), require('./ic_action_2.png'), require('./ic_action_3.png')]

export default class DynamicToolbar extends Component {
    constructor(props: Props) {
        super(props)

        this.state = {
            imageIndex: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                imageIndex: ++this.state.imageIndex % 3
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const action = {
            title: 'Unimportant',
            icon: icons[this.state.imageIndex],
            show: 'always',
            color: '#000'
        }
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    titleColor="#000"
                    title="Dynamic Toolbar"
                    actions={[action]}
                    style={styles.toolbar}/>
                <TextInput>
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#fff',
        height: 56,
        alignSelf: 'stretch',

    },
})

AppRegistry.registerComponent('DynamicToolbar', () => DynamicToolbar)
