import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home.screen";
import Signin from "../screens/Signin/Signin.screen";
import Signup from "../screens/Signup/Signup.screen";
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title:'Please Ticketing'}}/>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{title:'Sign In'}}/>
              <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title:'Sign Up'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default Navigation;