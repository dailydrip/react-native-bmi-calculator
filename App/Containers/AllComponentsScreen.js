// @flow

// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { Platform, View, ScrollView, Text, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/AllComponentsScreenStyle'

// Components to show examples (only real point of merge conflict)
import '../Components/AlertMessage'
import '../Components/FullButton'
import '../Components/RoundedButton'
import '../Components/DrawerButton'
// import '../Components/MapCallout'

// Examples Render Engine
import ExamplesRegistry from '../Services/ExamplesRegistry'

class AllComponentsScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>

            <Text style={styles.sectionText}>
              What is BMI?
            </Text>

            <Text style={styles.subtitle} >
              The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an individual. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

export default AllComponentsScreen
