import React from 'react'
import Texto from '../../../Componentes/texto'
import { View, Image, FlatList } from 'react-native'

import estilos from '../estilos'

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={estilos.containerLista}>
      <Image source={imagem} style={estilos.imageLista} />
      <Texto style={estilos.descricaoLista}>{nome}</Texto>
    </View>
  )
}
