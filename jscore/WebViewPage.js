'use strict'

import Reac from 'react-native'
import NavigationBar from 'react-native-navigationbar'

var{
  Component,
  View,
  Text,
  WebView
} = Reac

class WebViewPage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <View style = {{flex:1}}>
        <NavigationBar title = {this.props.title}
        backHidden = {false}
        backTintColor = 'while'
        backFunc = { () => {
            this.props.navigator.pop()}}
        ></NavigationBar>
        <WebView source = {{uri this.props.url}}></WebView>
      </View>
    )
  }
}

module.exports = WebViewPage
