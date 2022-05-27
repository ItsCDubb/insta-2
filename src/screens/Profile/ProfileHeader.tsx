import {Image, Text, View} from 'react-native';
import Button from '../../components/Button';
import user from '../../assets/data/user.json';
import styles from './styles';

const ProfileHeader = () => {
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
          text="Edit Profle"
          onPress={() => console.warn('Edit Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('Another Button')}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;