import React from 'react'

import { View, Image } from 'react-native'
import Texto from '../../../Componentes/texto'
import estilos from '../estilos'

export default function Detalhes({
  nome,
  logo,
  nomeFazenda,
  descricao,
  preco
}) {
  return (
    <>
      <Texto style={estilos.tituloInicial}>{nome}</Texto>

      <View style={estilos.containerInicial}>
        <Image source={logo} style={estilos.logo} />

        <Texto style={estilos.textoContainerInicial}>{nomeFazenda}</Texto>
      </View>
      <Texto style={estilos.paragrafo}>{descricao}</Texto>
      <Texto style={estilos.price}>{preco}</Texto>
    </>
  )
}
