'use strict'

import Reac,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,

} from'react-native'

class Textinputextends extends Component{
    render(){
       <View style={{backgroundColor:'#f4f4f4',flex:1}}>
           <Image
                style={styles.style_image}
                source={require('./img/app_icon.png')}
           ></Image>
           <TextInput
               style={styles.style_user_input}
               placeholder = 'QQ号码/手机号/邮箱'
               numberOfLines={-1}
               autoFocus={true}
               underlineColorAndroid={'transparent'}
               textAlign:'center: '
           >
           </TextInput>
           <View
               style={{height:1,backgroundColor: '#f4f4f4'}}
           ></View>
            <TextInput
                style={styles.style_pwd_input}
                placeholder = '密码'
                numberOfLines={1}
                undlelineColorAndroid={'tansparent'}
                secureTextEntry={true}
                textAlign = 'center'
            ></TextInput>
           <View
               style={ styles.style_view_commit}
           >
               <Text style={{color:'#fff'}}>
                   登录
               </Text>
           </View>
           <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',buttom:10}}>

           </View>

       </View>
    }
}
const styles = StyleSheet.create({

    style_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    } ,

    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:30,
    },

    style_pwd_input:{
        backgroundColor:'#fff',
        height:35,
        marginTop:10,
    },

    style_view_commit:{
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#63b8ff'
    },

    style_view_unlogin:{
        fontsize:12,
        color:'#63b8ff',
        marginLeft:10,
    },

    style_view_register:{
        fontsize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'raw',
        textAlign:'right'
    }
});


AppRegistry.registerComponent('Textinputextends', () => Textinputextends);
