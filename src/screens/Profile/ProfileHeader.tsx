import {Image, Text, View} from 'react-native';
import Button from '../../components/Button';
import user from '../../assets/data/user.json';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {Auth} from 'aws-amplify';
import styles from './styles';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile Image */}
        <Image source={{uri: user.image}} style={styles.avatar} />
        {/* Stats */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text>Followers</Text>
        </View>
      </View>
      {/* Name */}
      <Text style={styles.name}>{user.name}</Text>
      {/* Bio */}
      <Text>{user.bio}</Text>
      {/* Buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button text="Sign Out" onPress={() => Auth.signOut()} />
      </View>
    </View>
  );
};

export default ProfileHeader;
