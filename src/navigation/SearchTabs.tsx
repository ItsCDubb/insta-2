import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Comments from '../screens/Comments';
import Feed from '../screens/Feed';

const Tab = createMaterialTopTabNavigator();

function SearchTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserSearch" component={Feed} />
      <Tab.Screen name="PostSearch" component={Comments} />
    </Tab.Navigator>
  );
}

export default SearchTabs;
