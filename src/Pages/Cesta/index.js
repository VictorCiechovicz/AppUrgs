import React from 'react'
import { View } from 'react-native'

import estilos from './estilos'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Cesta() {
  return (
    <View style={estilos.container}>
      <Topo />
     <Detalhes/>
    </View>
  )
}
