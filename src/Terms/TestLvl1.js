import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import styles from '../Styles';

function TestLvl1 ({ navigation }) {
    return (
        <View style={styles.styles_all.view}>
            <View style={styles.styles_all.adwert}>
                <Text style={styles.styles_all.adwertText}>реклама</Text>
            </View>
            <Text>Terms</Text>
        </View>
        
      );
};

export default TestLvl1
