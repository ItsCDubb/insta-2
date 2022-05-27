import {ReactNode} from 'react';
import {Pressable} from 'react-native';

interface IDoublePressable {
  DoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  DoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const doublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      DoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={doublePress}>{children}</Pressable>;
};

export default DoublePressable;
