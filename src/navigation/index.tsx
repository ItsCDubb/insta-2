import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from '../assets/images/logo.png';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{headerTitleAlign: 'center', headerTitle: Header}}
        />
        <Stack.Screen name="UserProfile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <Image
      source={Logo}
      resizeMode="contain"
      style={{height: 40, width: 150}}
    />
  );
};

export default Navigation;
