import {
  FlatList,
  Image,
  useWindowDimensions,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import {useRef, useState} from 'react';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';
import styles from './styles';

interface ICarousel {
  images?: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImage, setActiveImage] = useState(0);
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImage(viewableItems[0].index || 0);
      }
    },
  );
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable DoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{aspectRatio: 1, width}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.dotContainer}>
        {images?.map((_, index) => (
          <View
            key={index}
            style={{
              aspectRatio: 1,
              margin: 5,
              marginHorizontal: 3,
              width: 10,
              borderRadius: 5,
              backgroundColor:
                activeImage === index ? colors.primary : colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
