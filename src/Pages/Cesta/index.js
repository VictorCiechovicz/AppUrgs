import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

import imageTopo from '../../../assets/topo.png'
import logoSmall from '../../../assets/logo.png'

import Texto from '../../Componentes/texto'
import estilos from './estilos'

export default function Cesta() {
  return (
    <View style={estilos.container}>
      <ImageBackground source={imageTopo} style={estilos.imageTopo}>
        <Texto style={estilos.textImage}>Detalhe da Cesta</Texto>
      </ImageBackground>

      <Texto style={estilos.tituloInicial}>Cesta Verduras</Texto>

      <View style={estilos.containerInicial}>
        <Image source={logoSmall} style={estilos.logo} />

        <Texto style={estilos.textoContainerInicial}>Jenny Jack Farm</Texto>
      </View>
      <Texto style={estilos.paragrafo}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha
      </Texto>
      <Texto style={estilos.price}>R$ 40,00</Texto>
    </View>
  )
}
