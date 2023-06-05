import Onboarding from './src/screens/auth/Onboarding';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import { AuthProvider } from './src/context/AuthContext';
import Home from './src/screens/home';

const Stack = createStackNavigator();

export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

