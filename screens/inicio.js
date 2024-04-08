import { View, Text, SafeAreaView,} from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Header from '../componentes/Inicio/Header'
import Historias from '../componentes/Inicio/Historias'

const Inicio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Historias/>
    </SafeAreaView>
  )
}


export default Inicio