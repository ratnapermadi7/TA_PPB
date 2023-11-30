import { faCat, faHomeUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cat from './Cat';
import About from './About';

const BottomTab = createBottomTabNavigator();

const TabBawah = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faHomeUser} /> }} />
      <BottomTab.Screen name="Cat" component={Cat} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faCat} /> }} />
      <BottomTab.Screen name="About" component={About} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faUserAlt} /> }} />
    </BottomTab.Navigator>
  );
};

export default TabBawah;
