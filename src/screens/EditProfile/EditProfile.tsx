import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Control, Controller, useForm} from 'react-hook-form';
import colors from '../../theme/colors';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {useEffect, useState} from 'react';
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from '../../API';
import {useMutation, useQuery} from '@apollo/client';
import {getUser, updateUser, deleteUser} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Auth} from 'aws-amplify';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<User, IEditableUserFields>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserFields;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  name,
  control,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {control, handleSubmit, setValue} = useForm<IEditableUser>({});
  const navigation = useNavigation();

  const {userId, user: authUser} = useAuthContext();

  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const user = data?.getUser;

  const [updateLoggedInUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const [deleteCurrentUser, {loading: deleteLoading, error: deleteError}] =
    useMutation<DeleteUserMutation, DeleteUserMutationVariables>(deleteUser);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('bio', user.bio);
      setValue('website', user.website);
    }
  }, [user, setValue]);

  const onSubmit = async (formData: IEditableUser) => {
    console.warn('Submit', data);
    await updateLoggedInUser({
      variables: {input: {id: userId, ...formData, _version: user?._version}},
    });
    navigation.goBack();
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your user profile is permanet', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes, delete',
        style: 'destructive',
        onPress: startDeletion,
      },
    ]);
  };

  const startDeletion = async () => {
    if (!user) {
      return;
    }
    await deleteCurrentUser({
      variables: {input: {id: userId, _version: user._version}},
    });
    authUser?.deleteUser(err => {
      if (err) {
        console.log(err);
      }
      Auth.signOut();
    });
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error || updateError || deleteError) {
    return (
      <ApiErrorMessage
        title="Error fetching or updating User"
        message={error?.message || updateError?.message || deleteError?.message}
      />
    );
  }

  return (
    <View style={styles.root}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.button}>
        Change profile photo
      </Text>
      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters',
          },
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          required: 'Website is required',
          pattern: {value: URL_REGEX, message: 'Invalid URL'},
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
        label="Bio"
        multiline
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.button}>
        {updateLoading ? 'Submitting...' : 'Submit'}
      </Text>
      <Text onPress={confirmDelete} style={styles.buttonDanger}>
        {deleteLoading ? 'Deleting...' : 'DELETE'}
      </Text>
    </View>
  );
};

export default EditProfile;
