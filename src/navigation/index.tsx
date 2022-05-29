import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Comments from '../screens/Comments';
import {RootNavigator} from './types';

const Stack = createNativeStackNavigator<RootNavigator>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNavigation">
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
