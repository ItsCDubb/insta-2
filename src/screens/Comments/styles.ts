import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  image: {
    aspectRatio: 1,
    width: 40,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    marginLeft: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    position: 'absolute',
    color: colors.primary,
    bottom: 15,
    right: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
  },
});
