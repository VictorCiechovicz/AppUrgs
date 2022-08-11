import React from 'react'
import { FlatList, View } from 'react-native'

import estilos from './estilos'
import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'
import Texto from '../../Componentes/texto'

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <View style={estilos.container}>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <Detalhes {...detalhes} />
              <Texto style={estilos.tituloLista}>{itens.titulo}</Texto>
            </>
          )
        }}
      />
    </View>
  )
}
