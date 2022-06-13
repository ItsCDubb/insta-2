import {Image, Text, View} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {User} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';
import {Auth} from 'aws-amplify';
import {useAuthContext} from '../../contexts/AuthContext';
import styles from './styles';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image
          source={{uri: user.image || DEFAULT_USER_IMAGE}}
          style={styles.avatar}
        />
        {/* Stats */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofPosts}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.nofFollowing}</Text>
          <Text>Following</Text>
        </View>
      </View>
      {/* Name */}
      <Text style={styles.name}>{user.name}</Text>
      {/* Bio */}
      <Text>{user.bio}</Text>
      {/* Buttons */}
      {userId === user.id && (
        <View style={{flexDirection: 'row'}}>
          <Button
            inLine
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
          />
          <Button inLine text="Sign Out" onPress={() => Auth.signOut()} />
        </View>
      )}
    </View>
  );
};

export default ProfileHeader;
