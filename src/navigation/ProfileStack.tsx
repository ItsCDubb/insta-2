import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import {ProfileStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit Profile" component={EditProfile} options={{}} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
