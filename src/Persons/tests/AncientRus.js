import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../../Styles';
import { Dimensions } from 'react-native'
import Ad from '../../AdBlock';

const ex = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}


let c_razm = 175
let c1_mt = 50
let c2_mt = 50
let c3_mt = 50
let fz = 22

if (ex.height < 730) {
    c_razm = 140
    c2_mt = 30
    c3_mt = 30
    c1_mt = 30
    fz = 20
}
if (ex.height < 600) {
    c_razm = 125
    c2_mt = 20
    c3_mt = 20
    c1_mt = 20
    fz = 20
}
if (ex.height > 900) {
    c_razm = 225
    c2_mt = 50
    c3_mt = 50
    c1_mt = 50
    fz = 25
}
if (ex.height > 1100) {
    c_razm = 300
    c2_mt = 80
    c3_mt = 80
    c1_mt = 80
    fz = 27
}

function AncientRus ({ navigation }) {
    return (
        <View style={styles.styles2.view}>
            <Ad />
            <View style={styles.styles2.btnCont}>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c1(c_razm, c1_mt)
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_TestLvl1', {name: 'AncientRus'})
                    }
                    >
                    <Text style={styles.styles2.buttonText(fz)}>Уровень №1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c2(c_razm, c2_mt)
                    ]}
                    onPress={() =>
                        navigation.navigate('Per_TestLvl2', {name: 'AncientRus'})
                    }
                    >
                    <Text style={styles.styles2.buttonText(fz)}>Уровень №2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.styles2.button, styles.styles2.c3(c_razm, c3_mt)
                    ]}
                    /*
                    onPress={() =>
                        navigation.navigate('Per_TestLvl3', {name: 'AncientRus'})
                    }
                    */
                    >
                    <Text style={styles.styles2.buttonText(fz)}>Уровень №3</Text>
                </TouchableOpacity>
            </View>
        </View>
        
      );
};

export default AncientRus


