import React, {FC} from 'react';
import {Image} from 'react-native';
import {TGifDataType} from '../Types';
// reusable component, that is render GIF
const GifItemComponent: FC<TGifDataType> = ({width, height, url}) => (
  <Image
    style={{
      width,
      height,
    }}
    source={{
      uri: url,
    }}
  />
);

export default GifItemComponent;
