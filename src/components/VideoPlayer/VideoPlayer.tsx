import {Pressable, View} from 'react-native';
import Video from 'react-native-video';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  return (
    <View>
      <Video
        source={{uri}}
        resizeMode="cover"
        style={styles.video}
        repeat
        muted={muted}
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-high-sharp'}
          color={colors.white}
          size={fonts.size.md}
        />
      </Pressable>
    </View>
  );
};

export default VideoPlayer;
