import { SafeAreaView, Text, View } from 'react-native';
import {style} from "./App.style";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding from './src/screens/auth/Onboarding';

export default function App() {

  return (
    <>

        <Onboarding />



    </>
  );
}

