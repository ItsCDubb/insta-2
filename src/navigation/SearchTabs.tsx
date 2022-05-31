import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Comments from '../screens/Comments';
import UserSearch from '../screens/UserSearch';
import colors from '../theme/colors';
import {SearchTabNavigatorParamList} from '../types/navigation';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

function SearchTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarIndicatorStyle: {backgroundColor: colors.secondary},
      }}>
      <Tab.Screen name="Users" component={UserSearch} />
      <Tab.Screen name="Posts" component={Comments} />
    </Tab.Navigator>
  );
}

export default SearchTabs;
