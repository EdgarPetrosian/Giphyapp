import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import COLORS from '../UI/colors';
import GifItemComponent from '../Components/GifItemComponent';
import getGifsApi from '../Utils/getGifsApi';
import {useIsFocused} from '@react-navigation/native';
import NoResult from '../Components/NoResult';
import {IGifItemData} from '../Types';
const {width, height} = Dimensions.get('window');

const SearchGifs: React.FC = () => {
  const [searchValue, setSearchValue] = useState('Simpson');
  const [gifsData, setGigsData] = useState([]);
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();
  // Search GIFs data functionality, I do search when search text length is equal or up 3
  const searchGif = useCallback(
    async (search: React.SetStateAction<string>) => {
      setIsLoading(true);
      setSearchValue(search);
      if (search?.length >= 3) {
        const result = await getGifsApi(search);
        setGigsData(result);
      }
      setIsLoading(false);
    },
    [],
  );

  const renderItem = useCallback(
    ({item}: IGifItemData) => (
      <GifItemComponent
        width={+item?.images?.original?.width || width}
        height={+item?.images?.original?.height || height}
        url={item?.images?.original?.url}
      />
    ),
    [],
  );
  // First time fetch list data , when screen is focused
  useEffect(() => {
    if (isFocused) {
      getGifsApi('Simpson').then(result => {
        setGigsData(result);
      });
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[styles.input, isTextInputFocused && styles.focusedStyle]}
        onChangeText={searchGif}
        value={searchValue}
        maxLength={100}
        placeholder=" search gifs ..."
        onFocus={() => setIsTextInputFocused(true)}
        onBlur={() => setIsTextInputFocused(false)}
      />
      <FlatList
        data={gifsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        keyboardDismissMode={'on-drag'}
        contentContainerStyle={styles.contentStyle}
        ListEmptyComponent={() => <NoResult isLoading={isLoading} />}
        getItemLayout={(data, index) => ({
          length: height / 2,
          offset: (height / 2) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  input: {
    fontSize: 24,
    margin: 10,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray6,
    backgroundColor: COLORS.snowGray,
  },
  focusedStyle: {
    borderColor: COLORS.blueDark,
  },
});

export default SearchGifs;
