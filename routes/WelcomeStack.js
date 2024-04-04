import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';


const Stack = createStackNavigator();

export default function WelcomeStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen 
     name='welcome'
     component={WelcomeScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Login'
     component={LoginScreen}
     options={{headerShown:false}}
     />
     <Stack.Screen
     name='Signup'
     component={SignupScreen}
     options={{headerShown:false}}
     />
    </Stack.Navigator>
  );
}