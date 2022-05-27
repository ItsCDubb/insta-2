import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    aspectRatio: 1,
    width: 100,
    borderRadius: 50,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberText: {
    color: colors.secondary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.full,
  },
  name: {
    color: colors.secondary,
    fontWeight: fonts.weight.semi,
  },
});
