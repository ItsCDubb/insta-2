import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  root: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    aspectRatio: 3 / 4,
    width: '100%',
  },
  buttonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  circle: {
    aspectRatio: 1,
    width: 75,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});
