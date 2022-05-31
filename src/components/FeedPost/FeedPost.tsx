import {Image, Pressable, Text, View} from 'react-native';
import {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../Comment';
import {IPost} from '../../types/Models';
import DoublePress from '../DoublePressable';
import Carousel from '../Carousel';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import styles from './styles';

interface IFeedPost {
  post: IPost;
  isVisable: boolean;
}

const FeedPost = ({post, isVisable}: IFeedPost) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id});
  };
  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const toggleDescritpionExpanded = () => {
    setDescriptionExpanded(v => !v);
  };
  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable DoublePress={toggleLiked}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.content}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLiked} />;
  } else if (post.video) {
    content = (
      <DoublePressable DoublePress={toggleLiked}>
        <VideoPlayer uri={post.video} paused={!isVisable} />
      </DoublePressable>
    );
  }

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.headerAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={fonts.size.md}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      <DoublePress DoublePress={toggleLiked}>{content}</DoublePress>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={fonts.size.xlg}
              style={styles.icon}
              color={isLiked ? colors.secondary : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={fonts.size.xlg}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={fonts.size.xlg}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={fonts.size.xlg}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text>
          Liked by <Text style={styles.bold}>itscdubb</Text> &{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text> others
        </Text>
        {/* Description */}
        <Text style={styles.text} numberOfLines={descriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          <Text style={styles.descriptionText}>{post.description}</Text>
        </Text>
        <Text onPress={toggleDescritpionExpanded}>
          {descriptionExpanded ? 'less' : 'more'}
        </Text>
        {/* Comments */}
        <Text onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* Date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
