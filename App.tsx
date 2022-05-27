import {View} from 'react-native';
import Feed from './src/screens/Feed';
import Comments from './src/screens/Comments';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import Upload from './src/screens/PostUpload';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.app}>
      <Upload />
    </View>
  );
};

export default App;
