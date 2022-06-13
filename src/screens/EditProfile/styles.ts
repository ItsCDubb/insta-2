import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    aspectRatio: 1,
    width: '30%',
    borderRadius: 100,
  },
  button: {
    color: colors.secondary,
    margin: 10,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
  },
  buttonDanger: {
    color: colors.error,
    margin: 10,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    minHeight: 50,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
