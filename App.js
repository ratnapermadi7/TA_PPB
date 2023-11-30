import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import About from './pages/About';
import AllCats from './pages/AllCats';
import TabBawah from './pages/BottomTab';
import Brown from './pages/Brown';
import Cat from './pages/Cat';
import DetailAll from './pages/DetailAll';
import DetailBrown from './pages/DetailBrown';
import DetailDevon from './pages/DetailDevon';
import DetailGrey from './pages/DetailGrey';
import DetailOren from './pages/DetailOren';
import DetailWhite from './pages/DetailWhite';
import Grey from './pages/Grey';
import Home from './pages/Home';
import Oren from './pages/Oren';
import White from './pages/White';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Stray Cat" component={TabBawah} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cat" component={Cat} />
        <Stack.Screen name="Oren" component={Oren} />
        <Stack.Screen name="White" component={White} />
        <Stack.Screen name="Grey" component={Grey} />
        <Stack.Screen name="Brown" component={Brown} />
        <Stack.Screen name="AllCats" component={AllCats} />
        <Stack.Screen name="Detail All Cats" component={DetailAll} />
        <Stack.Screen name="Detail Oren Cat" component={DetailOren} />
        <Stack.Screen name="Detail White Cat" component={DetailWhite} />
        <Stack.Screen name="Detail Grey Cat" component={DetailGrey} />
        <Stack.Screen name="Detail Brown Cat" component={DetailBrown} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Devon" component={DetailDevon} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
