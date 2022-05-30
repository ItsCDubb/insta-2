import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Logo from '../assets/images/logo.png';
import {HomeStackNavigatorParamList} from './types';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerTitle: Header, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileStack}
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
