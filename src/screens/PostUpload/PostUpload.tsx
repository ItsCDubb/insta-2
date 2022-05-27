import {Pressable, Text, View} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import styles from './styles';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModetoIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUpload = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef<Camera>(null);
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonPermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonPermission.status === 'granted',
      );
    };
    getPermission();
  }, []);
  const flipCamera = () => {
    setCameraType(
      currentCameraType === CameraType.back
        ? CameraType.front
        : CameraType.back,
    );
  };
  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };
  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current.takePictureAsync(options);
  };
  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }
    const options: CameraRecordingOptions = {
      quality: VideoQuality['480p'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
    } catch (e) {
      console.log(e);
    }
    setIsRecording(false);
  };
  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };
  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text>No camera permissions granted!</Text>;
  }
  return (
    <View style={styles.root}>
      <Camera
        ref={camera}
        type={cameraType}
        flashMode={flash}
        ratio="4:3"
        onCameraReady={() => setIsCameraReady(true)}
        style={styles.camera}
      />
      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons
          name="close"
          size={fonts.size.xxlg}
          color={colors.white}
        />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModetoIcon[flash]}
            size={fonts.size.xxlg}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons
          name="settings"
          size={fonts.size.xxlg}
          color={colors.white}
        />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons
          name="photo-library"
          size={fonts.size.xxlg}
          color={colors.white}
        />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: isRecording
                    ? colors.secondary
                    : colors.white,
                },
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={fonts.size.xxlg}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUpload;
