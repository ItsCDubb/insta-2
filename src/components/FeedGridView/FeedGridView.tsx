import {FlatList} from 'react-native';
import {Post} from '../../API';
import FeedGridViewItem from './FeedGridItem';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  refetch: () => void;
  loading: boolean;
}

const FeedGridView = ({
  data,
  ListHeaderComponent,
  refetch,
  loading,
}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => item && <FeedGridViewItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      onRefresh={refetch}
      refreshing={loading}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
