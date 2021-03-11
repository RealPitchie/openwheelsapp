import React,  { Component } from "react";
import { Text, StyleSheet, View, Touchable, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
 
export class PostHeader extends Component{
    constructor(props){
        super(props);  
        this.getBack = this.getBack.bind(this);
    }
    getBack()  
    {
        this.props.navigation.navigate('Главная')
    } 
    myIcon = (
        
        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate('Главная')}>
            <Icon name="arrow-left" size={24} color="grey" />
        </TouchableOpacity>
        
    );
    render(){
        const { navigation, value, title } = this.props; 
        return(
            
            <View style={styles.headerView}>
                
                <Text style={styles.header}>
                    {this.myIcon}    {this.props.text}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
     container:{ 
        marginTop: 25
     },
    logo: {
      opacity: 0.2,
      overflow: 'visible',
      resizeMode: 'cover',
      /*
       * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
       *
       * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
       * source image's size.
       */
      marginLeft: -128,
      marginBottom: -192,
    },
    header: {
        marginTop:25,   
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'grey',
        textAlign:'left', 
        marginLeft: 20
    },
    headerView: { 
        top: 0,
        height: 70,
        width: 600,
        marginLeft: 0,
        backgroundColor: '#cdff89'
    },
    backIcon: {
        height: 20
    }
  });
export default PostHeader;