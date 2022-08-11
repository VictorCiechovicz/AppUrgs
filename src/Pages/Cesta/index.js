import React from 'react'
import { ScrollView } from 'react-native'

import estilos from './estilos'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Itens from '../Cesta/componentes/Itens'

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <ScrollView style={estilos.container}>
      <Topo {...topo} />
      <Detalhes {...detalhes} />
      <Itens {...itens} />
    </ScrollView>
  )
}
