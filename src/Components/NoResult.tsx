import React, {FC, memo} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import COLORS from '../UI/colors';
import {TNoResult} from '../Types';

const NoResult: FC<TNoResult> = ({isLoading}) =>
  isLoading ? (
    <View style={[styles.noResultContainer, styles.crossCenter]}>
      <ActivityIndicator />
    </View>
  ) : (
    <Text style={styles.noResult}>No Result</Text>
  );

const styles = StyleSheet.create({
  noResultContainer: {
    paddingVertical: 10,
  },
  noResult: {
    paddingTop: 10,
    alignItems: 'center',
    color: COLORS.black,
  },
  crossCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(NoResult);
