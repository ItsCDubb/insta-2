import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    color: colors.secondary,
    fontWeight: fonts.weight.semi,
  },
});
