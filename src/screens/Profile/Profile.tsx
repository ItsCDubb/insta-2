import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView';
import ProfileHeader from './ProfileHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  UserProfileNavigationProp,
  MyNavigationProp,
  UserProfileRouteProp,
  MyProfileRouteProp,
} from '../../navigation/types';

const Profile = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyNavigationProp
  >();
  const userId = route.params?.userId;
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default Profile;
