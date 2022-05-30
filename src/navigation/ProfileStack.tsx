import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/EditProfile';
import Profile from '../screens/Profile/Profile';
import {ProfileStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
