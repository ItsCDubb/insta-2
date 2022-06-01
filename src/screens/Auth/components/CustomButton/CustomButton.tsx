import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface ICustomButton {
  onPress: () => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
