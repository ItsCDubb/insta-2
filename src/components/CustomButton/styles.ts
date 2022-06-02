import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: colors.primary,
  },

  container_SECONDARY: {
    borderColor: colors.primary,
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_PRIMARY: {},

  text_SECONDARY: {
    color: colors.primary,
  },

  text_TERTIARY: {
    color: colors.grey,
  },
});
