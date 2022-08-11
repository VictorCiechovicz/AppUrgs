import React from 'react'
import { ScrollView } from 'react-native'

import estilos from './estilos'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Cesta({ topo, detalhes }) {
  return (
    <ScrollView style={estilos.container}>
      <Topo {...topo} />
      <Detalhes {...detalhes} />
    </ScrollView>
  )
}
