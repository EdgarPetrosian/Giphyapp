import React, {memo} from 'react';
import {Text} from 'react-native';

import styles from './index.style';
import {tabLabels} from '../../Constants';
import {LTypes} from '../../Types';
import COLORS from '../../UI/colors';

export const TabLabel: React.FC<LTypes> = memo(({text, focused}) => (
  <Text
    style={[styles.label, {color: focused ? COLORS.darkRed : COLORS.blueDark}]}>
    {tabLabels[text.toLowerCase()]}
  </Text>
));
