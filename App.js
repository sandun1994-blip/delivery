import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';
import OriginalContextProvider, { DestinationContextProvider } from './src/contexts/context';


export default function App() {
  return (
    <DestinationContextProvider>
    <OriginalContextProvider>
<RootNavigator/>
    </OriginalContextProvider>
    </DestinationContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
    ,
  },
});
