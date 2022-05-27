import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    aspectRatio: 1,
    marginRight: 5,
    width: 40,
    borderRadius: 25,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});
