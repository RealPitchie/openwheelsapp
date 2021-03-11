import React,  { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export class Header extends Component{
    constructor(props){
        super(props); 
    }

    render(){
        return(
            <View style={styles.headerView}>
                <Text style={styles.header }>
                    {this.props.text}
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
        height: 70,
        width: 600,
        marginLeft: 0,
        backgroundColor: '#cdff89'
    }
  });
export default Header;