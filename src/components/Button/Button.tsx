import {Pressable, Text} from 'react-native';
import styles from './styles';

interface IButton {
  text?: string;
  onPress?: () => void;
  inLine?: boolean;
}

const Button = ({text = '', onPress = () => {}, inLine = false}: IButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, inLine ? {flex: 1} : {}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
