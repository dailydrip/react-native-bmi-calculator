// @flow

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  title: {
    fontSize: Fonts.size.h1,
    color: '#3FC1C9'
  },
  label: {
    fontSize: Fonts.size.h6,
  }
})
