import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import image from './error.png';
import Button from '../Button';
import styles from './styles';

interface ApiErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ApiErrorMessage = ({
  title = 'Error',
  message = 'Unknown Error',
  onRetry = () => {},
}: ApiErrorMessageProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Button text="Retry" onPress={onRetry} />
    </View>
  );
};

export default ApiErrorMessage;
