'use strict'

import React from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import WebViewPage from './WebViewPage'

var{
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableHighlight
}  = React

const HEADER_HGITH = 400

class DailyContent extends Component{
  const MAX = HEADER_HGITH - 64
  let y = event.nativeEvent.contentOffset.y
  if (y>MAX) {
    y = MAX
  }
  const opatentData = this.props.convertData;
  let thumnail = (typeOf contentData.results.福利[0].url !== 'undefined') ? contentData.result.福利[0].url: ''

  let Header = (
    <NavigationBar title = {contentData.date}
    backHidden = {false}
    backIcon = {true}
    barTintColor = 'while'
    barOpacity = {this.state.opacity}
    barStyle = {styles.navbar}
    backFunc = {()=>{
      this.props.navigator.pop()
    }}>)

    return <View needsOffscreenAlphaCompositing renderTohardwareTextureAndroid style = {styles.container}>
            <ScrollView
              onScroll = {this.onScroll.bind(this)}
              scrollEventThrottle = {5}
              bounces = {false}>
                <Image source = {{uri:thumnail}} style = {styles.headerImage}></Image>
                <View style = {{flex:1}}>
                  {this._getViews(contentData)}
                </View>
              </ScrollView>
              <View style = {styles.backIcon} />
              {Header}
    </View>
  )
}

_getViews(container){
  return contentData.category.map((category,index)=>(
    <View key={index} style= {styles.itemContainer}>
      <Text style = {styles.category}>{category}</Text>
      {this.getItems(contentData,category)}
    </View>
  ))
}

getItems(container){
  return contentData.result[category].map((item,index) =>(
    <TouchableHighlight style = {styles.titleWrapper}
    ></TouchableHighlight>
  )
}

var styles =  StyleSheet.create({
  container:{
    backgroundColor:'#252328'
    flex:1
  },
  navbar:{
    top:0
    left:0
    right:0
    position:'absolute'
  },
  headerImage:{
    height:HEADER_HGITH
  },
  itemContainer:{
    flex:1
    backgroundColor:'while'
    margin:8
    padding:15
    borderRadius:3
 },
 category:{
   fontSize:18
 },
 title:{
   fontSize:18
   marginLeft:15
 },
 titleWrapper:{
   flex:1
   marginTop:10
 },
 backIcon:{
   width:14
   height:14
   borderRadius:'#777'
   borderLeftWidth:2
   borderButtomWidth:2
   transform:[rotate:'45deg']
   backgroundColor:'transparent'
   positon:'absolute'
   top:33.9
   left:14.5
 }

})
