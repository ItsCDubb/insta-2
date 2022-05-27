import {Image, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import styles from './styles';

const input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    console.warn('Posting Comment');
    setNewComment('');
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        multiline
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Enter your comment..."
        style={styles.input}
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

export default input;
