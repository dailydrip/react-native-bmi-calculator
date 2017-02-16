// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.whatIsBMI()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.BMILogo} style={styles.logo} />
        <DrawerButton text='What is BMI?' onPress={this.handlePressComponents} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
