import React from 'react'

import { View, Image } from 'react-native'
import Texto from '../../../Componentes/texto'
import logoSmall from '../../../../assets/logo.png'
import estilos from '../estilos'

export default function Detalhes() {
  return (
    <>
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
    </>
  )
}
