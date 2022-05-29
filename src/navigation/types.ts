import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigator = {
  BottomTabNavigation: undefined;
  Comments: {postId: string};
};

export type BottomTabNavigationParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};

export type MyNavigationProp = BottomTabNavigationProp<
  BottomTabNavigationParamList,
  'MyProfile'
>;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigationParamList,
  'MyProfile'
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  'Edit Profile': undefined;
};

export type ProfileStackNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;
