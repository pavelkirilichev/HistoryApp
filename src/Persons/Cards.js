import * as React from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../StylesPers';

import { Dimensions } from 'react-native'
import Ad from '../AdBlock';

const ex = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

let c_razm = 180
let fz = 18

if (ex.width > 450) {
    c_razm = 180
}
if (ex.width > 600) {
    c_razm = 260
    fz = 21
}
if (ex.width > 900) {
    c_razm = 375
    fz = 26
}
if (ex.width <= 380) {
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
            <ScrollView contentContainerStyle={styles.styles_6.btnCont}>
            <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c1
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_AncientRus')
                    }
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>Древняя Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c2
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_SpecificRus')
                    }
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>Удельная Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c3
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_MoscowRus')
                    }
                    */
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>Московская Русь</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c4
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Rus18')
                    }
                    */
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>Российская империя XVIII век</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c5
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Rus19')
                    }
                    */
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>Российская империя XIX век</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles_6.button(c_razm), styles.styles_6.c6
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('T_Per_Century20')
                    }
                    */
                    >
                    <Text style={styles.styles_6.buttonText(fz)}>XX век</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        
      );
};

export default Per_Tests

