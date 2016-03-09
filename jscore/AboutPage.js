'use strict'

import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import WebViewPage from './WebViewPage'

var{
  Compontent,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text
} = React

class AboutPage extends Compontent {
  render(){
    let content =(
      <View style = {styles.contentContainer}>
        <Text style = {{lineHeight:18}}>每天一张</Text>
        <Text style = {styles.contentText}> 数据来源自代码家的，
          <Text style = {{textDecorationLine:'underline'}}
              onPress = {() =>{
                          this.props.navigator.push({
                            compontent:WebViewPage,title,'Gank.io',url:'http://gank.io'
                          })
                        }

              }
          >http://gank.io</Text>
        Pober完成，感谢。。。。。。。。</Text>
        <Text style = {styles.contentText}>My github:
          <Text style = {{textDecorationLine:'underline'}}
          onPress = {() =>
                this.props.navigator.push({
                  compontent: WebViewPage,
                  title: 'PobarWong',
                  url: 'http://github.com/Bob1993'
                })
          }>http://github.com/Bob1993</Text>
        </Text>
        <Text style = {styles.contentText}>公司</Text>
        <Text style = {styles.contentText}>介绍</Text>
        <Text style = {styles.contentText}>支付宝</Text>

      </View>
    )
  }

  return({
    <View style = {styles.container}>
      <ScrollView>
        <Image source={require('./imgages/gank_launcher.png')} style = {styles.imgLauncher}></Image>
        <Text style = {styles.versionText}></Text>
        <Text style = {styles.versionText}></Text>
        <Text style = {styles.aboutText}></Text>
        {content}
      </ScrollView>
      <NavigationBar
        backTinkColor = 'while',
        title = '关于开发者',
        barOpacity = {0.8}
        barStyle = {style.navbar}
        backFunc = {() =>{this.props.navigator.pop()}}
      ></NavigationBar>
    </View>
  })
}

  var styles = StyleSheet.create({
    container:{
      flex:1
      backgroundColor:'#252528'
    },
    navbar:{
      top:0,
      left:0,
      right:0,
      position:'absolute'
    },
    imgLauncher:{
       alignSelf:'center',
       marginTop:114,
       width:90,
       height:90
    }
    contentContainer:{
      backgroundColor:'while',
      margin:8,
      padding:15,
      borderRadius:4
    },
    contentText:{
      marginTop:13,
      lineHeight:18
    },
    versionText:{
      color:'while',
      fontSize:16,
      alignSelf:'center',
      marginTop:13
    },
    aboutText:{
      fontSize:15,
      marginTop:30,
      marginButtom:5,
      marginLeft:8,
      color:'#434243'
    }
  })

  module.exports = AboutPage
