import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerAvatar: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  content: {
    aspectRatio: 1,
    width: '100%',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.secondary,
    lineHeight: 18,
  },
  bold: {
    color: colors.primary,
    fontWeight: fonts.weight.bold,
  },
  descriptionText: {
    color: colors.secondary,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
    lineHeight: 18,
  },
});
