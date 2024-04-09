import { SafeAreaView,} from 'react-native'
import React from 'react'
import { styles } from '../styles'
import Header from '../componentes/Inicio/Header'
import Historias from '../componentes/Inicio/Historias'
import Post from '../componentes/Inicio/Post'

const Inicio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Historias/>
      <Post/>
    </SafeAreaView>
  )
}


export default Inicio