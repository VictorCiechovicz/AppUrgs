import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },

  imageTopo: {
    width: '100%',
    height: 250
  },
  textImage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 15
  },
  tituloInicial: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  containerInicial: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20
  },
  textoContainerInicial: {
    fontSize: 15
  },
  logo: {
    width: 45,
    height: 45,
    marginHorizontal: 10
  },
  paragrafo: {
    fontSize: 15,
    margin: 20,
    color: '#7777',
    fontFamily: 'MontserratRegular'
  },
  price: {
    margin: 20,
    color: '#141',
    fontSize: 30,
    fontWeight: 'bold'
  },
  conatinerbotao: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#141',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 6
  },
  textobotao: {
    color: '#fff'
  },
  tituloLista: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },
  containerLista: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC'
  },
  descricaoLista: {
    fontSize: 20
  },

  imageLista: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 20
  }
})
export default estilos
