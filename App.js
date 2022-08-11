import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Cesta from './src/Pages/Cesta'
import mocks from './src/mocks/cesta'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading />
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  )
}
