// @flow

import React from 'react'
import {
  ScrollView,
  Text,
  Image,
  TextInput,
  View
} from 'react-native'

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      height: '',
      bmi: ''
    };

    this.calculate = this.calculate.bind(this)
    this.isNumber = this.isNumber.bind(this)
    this.onChangeWeight = this.onChangeWeight.bind(this)
    this.onChangeHeight = this.onChangeHeight.bind(this)
  }

  calculate(){
    var height = parseFloat(this.state.height)
    var weight = parseFloat(this.state.weight)

    var bmi = Math.round(weight/(height*height))
    this.setState({bmi})
  }

  isNumber(input){
    return !/[a-z]/i.test(input)
  }

  onChangeWeight(weight){
    if(this.isNumber(weight)){
      this.setState({weight});
    }
  }

  onChangeHeight(height){
    if(this.isNumber(height)){
      this.setState({height});
    }
  }

  render () {
    var bmiImage = this.state.bmi ? <Image source={Images.BMI} resizeMode='stretch' /> : null;
    var bmiText = this.state.bmi ?  <Text style={styles.title}>Your BMI: {this.state.bmi}</Text> : null;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Text style={styles.title} >
              BMI Calculator
            </Text>
          </View>

          <View style={styles.section} >

            <Text style={styles.label}>Weight</Text>

            <TextInput
                keyboardType='numeric'
                style={{height: 40, borderWidth: 1}}
                onChangeText={this.onChangeWeight}
                value={this.state.weight}
              />

            <Text style={styles.label}>Height</Text>

            <TextInput
                keyboardType='numeric'
                style={{height: 40, borderWidth: 1}}
                onChangeText={this.onChangeHeight}
                value={this.state.height}
              />

          </View>

          <RoundedButton onPress={this.calculate}>
            Calculate
          </RoundedButton>

          <View style={styles.centered}>
            {bmiText}
            {bmiImage}
          </View>

        </ScrollView>
      </View>
    )
  }
}
