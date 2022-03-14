import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Styles';
import { Dimensions } from 'react-native'
import Ad from '../AdBlock';

const ex = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

let c_razm = 250
let c2_mt = 70
let fz = 25

if (ex.height < 730) {
    c_razm = 210
    c2_mt = 50
}
if (ex.height < 600) {
    c_razm = 185
    c2_mt = 35
}
if (ex.height > 900) {
    c_razm = 325
    c2_mt = 100
    fz = 28
}
if (ex.height > 1100) {
    c_razm = 400
    c2_mt = 200
    fz = 30
}

function Persons ({ navigation }) {
    return (
        <View style={styles.styles1.view}>
            <Ad />
            <ScrollView contentContainerStyle={styles.styles1.btnCont}>
                <TouchableOpacity
                    style={[
                        styles.styles1.button, styles.styles1.c1(c_razm)
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_Cards')
                    }
                    >
                    <Text style={styles.styles1.buttonText(fz)}>Карточки</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles1.button, styles.styles1.c2(c_razm, c2_mt)
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_Tests')
                    }
                    >
                    <Text style={styles.styles1.buttonText(fz)}>Тесты</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        
      );
};

export default Persons
