import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import Context from './api/context'
import InshortTab from './components/InshortTab'

const App = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: '#121212' }}>
      <InshortTab />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight
  }
})

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}