import * as React from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../StylesPers';

import { Dimensions } from 'react-native'
import Ad from '../AdBlock';

const ex = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

let c_razm = 160
let fz = 18

if (ex.width > 450) {
    c_razm = 170
}
if (ex.width > 700) {
    c_razm = 275
    fz = 21
}
if (ex.width > 900) {
    c_razm = 400
    fz = 26
}
if (ex.width <= 370) {
    c_razm = 150
    fz = 16
}
if (ex.width <= 350) {
    c_razm = 130
    fz = 15
}

function Per_Tests ({ navigation }) {
    return (
        <View style={styles.styles_all.view}>
            <Ad />
            <ScrollView contentContainerStyle={styles.styles_7.btnCont}>
            <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c1
                    ]}
                    onPress={() =>
                        navigation.navigate('T_Per_AncientRus')
                    }
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>Древняя Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('T_Per_SpecificRus')
                    }
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>Удельная Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c3
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_MoscowRus')
                    }
                    */
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>Московская Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c4
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Rus18')
                    }
                    */
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>Российская империя XVIII век</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c5
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Rus19')
                    }
                    */
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>Российская империя XIX век</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_7.button(c_razm), styles.styles_7.c6
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Century20')
                    }
                    */
                    >
                    <Text style={styles.styles_7.buttonText(fz)}>XX век</Text>
                </TouchableOpacity>
                <View style={styles.styles_7.centerRow}>
                    <TouchableOpacity
                        style={[
                            styles.styles_7.button(c_razm), styles.styles_7.c7
                        ]}
                        /*
                        onPress={() =>
                            navigation.navigate('T_AllEpochs')
                        }
                        */
                        >
                        <Text style={styles.styles_7.buttonText(fz)}>Все эпохи</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        
      );
};

export default Per_Tests

