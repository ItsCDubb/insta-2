import React, {useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {NewPasswordNavigationProp} from '../../../types/navigation';
import {Auth} from 'aws-amplify';
import styles from './styles';

type NewPasswordType = {
  username: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm<NewPasswordType>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NewPasswordNavigationProp>();

  const onSubmitPressed = async ({
    username,
    code,
    password,
  }: NewPasswordType) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      navigation.navigate('Sign in');
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
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <FormInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <FormInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading...' : 'Submit'}
          onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
