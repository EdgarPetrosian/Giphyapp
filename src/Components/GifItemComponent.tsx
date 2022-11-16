import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';
import {TGifDataType} from '../Types';
// reusable component, that is render GIF
const GifItemComponent: FC<TGifDataType> = ({width, height, url}) => (
  <FastImage
    style={{
      width,
      height,
    }}
    source={{
      uri: url,
      headers: {Authorization: 'someAuthToken'},
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
);

export default GifItemComponent;
