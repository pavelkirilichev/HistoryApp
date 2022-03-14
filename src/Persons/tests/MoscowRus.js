import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import Ad from '../../AdBlock';

import styles from '../../Styles';

function MoscowRus ({ navigation }) {
    return (
        <View style={styles.styles_all.view}>
            <Ad />
            <View style={styles.styles2.btnCont}>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c1
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_TestLvl1', {name: 'MoscowRus'})
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_TestLvl2', {name: 'MoscowRus'})
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c3
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_TestLvl3', {name: 'MoscowRus'})
                    }
                    >
                    <Text style={styles.styles2.buttonText}>Уровень №3</Text>
                </TouchableOpacity>
            </View>
        </View>
        
      );
};

export default MoscowRus
