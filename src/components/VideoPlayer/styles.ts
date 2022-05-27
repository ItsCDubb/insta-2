import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  video: {
    aspectRatio: 1,
    width: '100%',
  },
  muteButton: {
    position: 'absolute',
    padding: 5,
    top: 10,
    right: 10,
    borderRadius: 25,
    backgroundColor: colors.black,
  },
});
