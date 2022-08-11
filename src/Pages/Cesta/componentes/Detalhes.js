import React from 'react'

import { View, Image, TouchableOpacity } from 'react-native'
import Texto from '../../../Componentes/texto'
import estilos from '../estilos'

export default function Detalhes({
  nome,
  logo,
  nomeFazenda,
  descricao,
  preco,
  botao
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
      <View style={estilos.conatinerbotao}>
        <TouchableOpacity style={estilos.botao}>
          <Texto style={estilos.textobotao}>{botao}</Texto>
        </TouchableOpacity>
      </View>
    </>
  )
}
