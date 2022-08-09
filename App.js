import { StyleSheet, Text, View, Image } from 'react-native'

import imageTopo from './assets/topo.png'
import logoSmall from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={imageTopo} style={styles.imageTopo} />

      <Text style={styles.tituloInicial}>Cesta Verduras</Text>

      <View style={styles.containerInicial}>
        <Image source={logoSmall} style={styles.logo} />
        <Text style={styles.textoContainerInicial}>Jenny Jack Farm</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },

  imageTopo: {
    width: 420,
    height: 300,
    justifyContent: 'flex-start'
  },
  tituloInicial: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  containerInicial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20
  },
  textoContainerInicial: {
    fontSize: 25
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 10
  }
})
