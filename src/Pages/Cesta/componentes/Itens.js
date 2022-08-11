import React from 'react'
import Texto from '../../../Componentes/texto'
import { View, Image, FlatList } from 'react-native'

import estilos from '../estilos'

export default function Itens({ titulo, lista }) {
  const renderItem = ({ item: { nome, imagem } }) => (
    <View key={nome} style={estilos.containerLista}>
      <Image source={imagem} style={estilos.imageLista} />
      <Texto style={estilos.descricaoLista}>{nome}</Texto>
    </View>
  )

  return (
    <>
      <Texto style={estilos.tituloLista}>{titulo}</Texto>

      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={({ nome }) => nome}
      />
    </>
  )
}
