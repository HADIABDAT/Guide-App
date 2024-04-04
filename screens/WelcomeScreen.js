import { StyleSheet, Text, View , Image , Button, Pressable, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Flatbutton from '../shared/bouton';
import Flatbutton1 from '../shared/bouton1';
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';


export default function WelcomeScreen() {

  const navigation = useNavigation(); 

  return (
    <LinearGradient style={styles.container} colors={["#008080", "#c3e6cb", "#ffffff"]}>
       <StatusBar style="light" />

     <Image source={require('../assets/alger.jpg')}  style={styles.imageContainer}/>
     <Text style={styles.Text}> Welcome to the app & let’s get started</Text>
     <Text style={styles.T}>Welcome to your dream journey with Fennec Land, exploring the beauty of Algeria!thank you for downloading it. 
     You wont regret using it.</Text> 
      
      <View style={styles.cont}>
      <Text> <Flatbutton  /></Text> 
       <Text> <Flatbutton1/> </Text>
      </View>
       <TouchableOpacity>
       <Text style={styles.guest}>Continue as a guest ?</Text>
       </TouchableOpacity>
        <View style={styles.cont1}>

        <Pressable style={({pressed}) =>{ 
          return{opacity : pressed ? 0.4 : 1}
        }}>
        <Image source={require("../assets/google.png")} style={styles.im2} />
       </Pressable>

       <Pressable style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}>
        <Image source={require("../assets/facebook.png")} style={styles.im1} />
       </Pressable>

       <Pressable style={({pressed}) =>{ 
        return{opacity : pressed ? 0.4 : 1}
       }}>
        <Image source={require("../assets/tweeter.png")} style={styles.im3} />
       </Pressable>
       </View>

  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    top: 15,
     flexDirection : 'row' , 
     justifyContent : 'space-evenly'
  },
  cont1: {
     flexDirection : 'row' , 
     justifyContent : 'space-between',
     top:40
  },
  imageContainer: {
    top: -70, // Use numbers for consistency
    width: 260,
    height: 260,
    borderRadius: 1000, // Consider using a more manageable value
    backgroundColor: '#fff', // Set a background color if needed
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
   Text: {
    top:-60,
    color: '#080a0b',
    fontSize: 32, // Use numbers for font size in React Native
    fontFamily: 'Inter',
    fontWeight: 'bold', // Use 'bold' instead of a numerical weight
    lineHeight: 40,
    textAlign: 'center',
  },
  T: {
    top: -50,
    color: '#5d5d5b',
    fontSize: 14, // Use numbers for font size in React Native
    fontFamily: 'Inter',
    lineHeight: 18,
    textAlign: 'center',
  },
  guest:{
    top: 30,
    color : '#5d5d5b',
    fontSize : 14,
    textAlign: 'center',
    marginVertical: 10
  },
  im1:{
    width : 55,
    height:55,
    borderRadius:50,
    left : 0,
  },
  im2:{
    width : 55,
    height:55,
    borderRadius:50,
    left: -20
  }
  ,
  im3:{
    width : 55,
    height:55,
    borderRadius:50,
    left: 30  }
});
