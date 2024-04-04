import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Flatbutton1(){
    const navigation = useNavigation(); 

    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Signup")
        }}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>
           Sign up
            </Text>
            </View> 
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
      borderRadius: 30,
      backgroundColor : '#2ECC71',
      width: 150,
      height : 50,
      
    },
    buttontext : {
        transform : 'uppercase',
        fontWeight : 'bold',
        color : 'white',
        fontSize : 23, 
        textAlign:'center',
        lineHeight : 37
    }
})