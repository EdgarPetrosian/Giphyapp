import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {StyleSheet, View, Dimensions} from 'react-native';

import {TGifDataType} from '../Types';
import getRandomGifsApi from '../Utils/getRandomGifsApi';
import GifItemComponent from '../Components/GifItemComponent';

const {width, height} = Dimensions.get('window');

const RandomGifs: React.FC = () => {
  const [gifData, setGifData] = useState<TGifDataType>({
    width,
    height,
    url: undefined,
  });
  const isFocused = useIsFocused();
// fetch data every 15 seconds and only when screen is focused
  useEffect(() => {
    const interval = setInterval(() => {
      if (isFocused) {
        getRandomGifsApi().then(data => {
          setGifData(data);
        });
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [isFocused]);

// first time fetch data when screen is focused
  useEffect(() => {
    if (isFocused) {
      getRandomGifsApi().then(result => {
        setGifData(result);
      });
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <GifItemComponent
        width={+gifData?.width || width}
        height={+gifData?.height || height}
        url={gifData?.url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default RandomGifs;
