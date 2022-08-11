import React from 'react'

import { ImageBackground } from 'react-native'
import Texto from '../../../Componentes/texto'
import imageTopo from '../../../../assets/topo.png'
import estilos from '../estilos'

export default function Topo({ titulo }) {
  return (
    <>
      <ImageBackground source={imageTopo} style={estilos.imageTopo}>
        <Texto style={estilos.textImage}>{titulo}</Texto>
      </ImageBackground>
    </>
  )
}
