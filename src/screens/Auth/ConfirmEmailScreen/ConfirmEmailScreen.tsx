import {ScrollView, Text, View} from 'react-native';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {
  ConfirmEmailNavigationProp,
  ConfirmEmailRouteProp,
} from '../../../types/navigation';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

type ConfirmEmailData = {
  username: string;
  code: string;
};

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailRouteProp>();
  const {control, handleSubmit} = useForm<ConfirmEmailData>({
    defaultValues: {username: route.params.username},
  });

  const navigation = useNavigation<ConfirmEmailNavigationProp>();

  const onConfirmPressed = (data: ConfirmEmailData) => {
    console.warn(data);
    navigation.navigate('Sign in');
  };

  const onSignInPress = () => {
    navigation.navigate('Sign in');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <FormInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <FormInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
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

export default ConfirmEmailScreen;
