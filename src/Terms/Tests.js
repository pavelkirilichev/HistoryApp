import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import styles from '../Styles';

function Tests ({ navigation }) {
    return (
        <View style={styles.styles2.view}>
            <View style={styles.styles2.adwert}>
                <Text style={styles.styles2.adwertText}>реклама</Text>
            </View>
            <View style={styles.styles2.btnCont}>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c1
                    ]}
                    onPress={() =>
                        navigation.navigate('T_TestLvl1')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('T_TestLvl2')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c3
                    ]}
                    onPress={() =>
                        navigation.navigate('T_TestLvl3')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №3</Text>
                </TouchableOpacity>
            </View>
        </View>
        
      );
};

export default Tests
