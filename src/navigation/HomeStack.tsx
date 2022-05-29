import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import Logo from '../assets/images/logo.png';
import {HomeStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Feed}
        options={{headerTitle: Header, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
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

export default HomeStack;
