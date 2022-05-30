import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {IUser} from '../../types/Models';
import styles from './styles';

interface IUserListItem {
  user: IUser;
}

const UserListItem = ({user}: IUserListItem) => {
  const navigation = useNavigation();
  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };
  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

export default UserListItem;
