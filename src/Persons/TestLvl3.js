import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Ad from '../AdBlock';
import styles from '../Styles';

function TestLvl3 ({ navigation, route }) {
    return (
        <View style={styles.styles_all.view}>
            <Ad />
            <Text>{route.params.name}</Text>
        </View>
        
      );
};

export default TestLvl3
