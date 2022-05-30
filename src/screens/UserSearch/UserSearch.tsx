import {FlatList, Text, View} from 'react-native';
import users from '../../assets/data/users.json';
import UserListItem from '../../components/UserListItem/UserListItem';

const UserSearch = () => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearch;
