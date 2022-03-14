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
                        navigation.navigate('WH_FactConsequence')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Факт-следствие</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('WH_ProcessArg')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Процесс-аргумент</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c3
                    ]}
                    onPress={() =>
                        navigation.navigate('WH_RusWorldHis')
                    }
                    >
                    <Text style={styles.styles2.buttonText}>
                        Россия {"\n"} — {"\n"}
                        Всемирная история
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
        
      );
};

export default Tests
