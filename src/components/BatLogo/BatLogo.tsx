import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
const batLogo = require('../../../assets/bat-logo.png');

export function BatLogo() {
  return (
    <View style={styles.container}>
        <Text>
            BAT PASS GENERATOR
        </Text>
        <Image
        source={batLogo}
        />
    </View>
  );
}