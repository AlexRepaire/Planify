import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Button from '../../../components/Button'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Image style={styles.image} source={require("../../../assets/onboarding.png")} />
        <View style={styles.footer}></View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity</Text>
        <Button>Log in</Button>
        <Button>Get started</Button>
      </View>
    </View>
  )
}

export default Onboarding