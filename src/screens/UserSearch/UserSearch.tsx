import {ActivityIndicator, FlatList} from 'react-native';
import UserListItem from '../../components/UserListItem/UserListItem';
import {useQuery} from '@apollo/client';
import {listUsers} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';

const UserSearch = () => {
  const {data, loading, error, refetch} = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listUsers);
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <ApiErrorMessage title="Error fetching Users" message={error.message} />
    );
  }
  const users = (data?.listUsers?.items || []).filter(
    user => user && !user._deleted,
  );
  return (
    <FlatList
      data={users}
      renderItem={({item}) => item && <UserListItem user={item} />}
      onRefresh={() => refetch()}
      refreshing={loading}
    />
  );
};

export default UserSearch;
