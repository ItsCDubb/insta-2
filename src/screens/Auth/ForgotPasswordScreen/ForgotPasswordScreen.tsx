import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import {Auth} from 'aws-amplify';
import styles from './styles';

type ForgotPasswordData = {
  username: string;
};

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm<ForgotPasswordData>();
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const [loading, setLoading] = useState(false);
  const onSendPressed = async ({username}: ForgotPasswordData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.forgotPassword(username);
      Alert.alert(
        'Check your email',
        `The code has been sent to ${response.CodeDeliveryDetails.Destination}`,
      );
      navigation.navigate('New password');
    } catch (e) {
      Alert.alert('Oops', (e as Error).message);
    } finally {
      setLoading(false);
    }
    // console.warn(data);
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Send'}
          onPress={handleSubmit(onSendPressed)}
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
