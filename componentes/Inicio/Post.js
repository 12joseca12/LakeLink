import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'
import { styles } from '../../styles'
import corazon from '../../assets/corazon.png'
import guardar from '../../assets/guardar.png'
import compartir from '../../assets/compartir.png'
import comentarios from '../../assets/comentario.png'


const Posts = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical'/>
        <PostHeader post={post}/>
        <PostImage post={post}/>

        <View style={{marginHorizontal: 15, marginTop: 10}}>
          <PostFooter post={post}/>
          <Likes post={post}/>
        </View>
        
    </View>
  )
}

const PostHeader = ({post})=>{
    return(
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:7, alignItems:'center'}}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Image source={{uri: post.profilePicture}} style={styles.fotoPerfPost}/>
            <Text style={{color: 'white', marginLeft:5, fontWeight: 700}}>{post.user}</Text>
        </View>
        <Text style={{color: 'white', fontWeight:'900'}}>...</Text>
    </View>
    )
}

const PostImage=({post})=>{
  return(
    <View style={{width:'100%', height:400}}>
       <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}/>
    </View>
  )
}

const PostFooter=({})=>{
  return(
    <View style={{flexDirection:'row'}}>

      <View style={styles.containerIzqPost}>
        <Icon imgStyle={styles.postFooterIcon} source={corazon}/>
        <Icon imgStyle={styles.postFooterIcon} source={comentarios}/>
        <Icon imgStyle={styles.postFooterIcon} source={compartir}/>
      </View>

      <View style={{flex: 1, alignItems:'flex-end'}}>
        <Icon imgStyle={styles.postFooterIcon} source={guardar}/>
      </View>
      
    </View>
  )
}

const Icon =({imgStyle, source})=>{
  return(
    <TouchableOpacity>
       <Image style={imgStyle} source={source}/>
    </TouchableOpacity>
  )
}

const Likes=({post})=>{
  return(
    <View style={{flexDirection:'row', marginTop:4}}>
      <Text style={{color:'white', fontWeight:600,}}>{post.likes.toLocaleString('en')} Likes</Text>
    </View>
  )
}
  


export default Posts